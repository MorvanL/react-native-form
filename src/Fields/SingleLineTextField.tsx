import React from 'react';
import { StyleProp, TextInput, TextInputProps, TextStyle, ViewStyle } from 'react-native';

import { CommonStyles, DescriptionProps, Nullable } from '../types';
import sharedStyles from '../SharedStyles';

import TextFieldAnimation from '../components/TextFieldAnimation';

interface Styles extends CommonStyles {
    inputContainerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
}

interface Props extends Styles {
    descriptionProps?: DescriptionProps;
    label: string;
    value: string;
    isValid?: Nullable<boolean>;
    onChangeText?: (text: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    textInputProps?: TextInputProps;
}

const SingleLineTextField = React.forwardRef((props: Props, ref) => {
    const { value, isValid, onChangeText, onFocus, onBlur } = props;

    const inputRef = React.useRef<TextInput>(null);
    const prevFocusRef = React.useRef(false);

    const [isFocused, setFocus] = React.useState(false);

    // Hook to modify the ref forwarded to the parent
    React.useImperativeHandle(ref, () => ({
        focus: () => {
            setFocus(true);
        },
    }));

    const inputFocus = React.useCallback(() => {
        if (inputRef.current && isFocused) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    /* run focus/blur functions */
    React.useEffect(() => {
        if (onFocus && !prevFocusRef.current && isFocused) onFocus();
        if (onBlur && prevFocusRef.current && !isFocused) onBlur();

        prevFocusRef.current = isFocused;
    }, [onFocus, onBlur, isFocused]);

    const onPress = React.useCallback(() => !isFocused && setFocus(true), [isFocused]);
    const isExpanded = React.useMemo(() => isFocused || !!value, [isFocused, value]);

    return (
        <TextFieldAnimation
            descriptionProps={props.descriptionProps}
            label={props.label}
            isValid={isValid === undefined ? null : isValid}
            isExpanded={isExpanded}
            onPress={onPress}
            onEndAnimation={isExpanded ? inputFocus : undefined}
            leftIcon={props.leftIcon}
            rightIcon={props.rightIcon}
            containerStyle={props.containerStyle}
            inputContainerStyle={props.inputContainerStyle}
        >
            <TextInput
                ref={inputRef}
                value={value}
                onChangeText={onChangeText}
                style={[sharedStyles.inputText, props.inputStyle]}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                {...props.textInputProps}
            />
        </TextFieldAnimation>
    );
});

export default React.memo(SingleLineTextField);
