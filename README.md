# @mobeye/react-native-form-fields

Optimized field components with nice design for react-native forms

<p align="center" >
  <a href="https://www.npmjs.com/package/@mobeye/react-native-form-fields"><img src="https://img.shields.io/npm/dm/@mobeye/react-native-form-fields.svg?style=flat-square" alt="NPM downloads"></a>
  <a href="https://www.npmjs.com/package/@mobeye/react-native-form-fields"><img src="https://img.shields.io/npm/v/@mobeye/react-native-form-fields.svg?style=flat-square" alt="NPM version"></a>
  <a href="/LICENSE"><img src="https://img.shields.io/github/license/Mobeye/react-native-form.svg?style=flat-square" alt="License"></a>
</p>
<p align="center" >
  <a href="https://github.com/Mobeye/react-native-form/commits/master"><img src="https://img.shields.io/github/commit-activity/m/Mobeye/react-native-form.svg?style=flat-square" alt="Commit activity"></a>
  <a href="https://github.com/Mobeye/react-native-form/commits/master"><img src="https://img.shields.io/github/last-commit/Mobeye/react-native-form.svg?style=flat-square" alt="Last Commit"></a>
</p>

---

## Table of contents

-   [Getting started](#getting-started)
-   [General Usage](#general-usage)
-   [Field common props](#field-common-props)
-   [Fields](#fields)
-   [Other components](#other-components)
-   [Example](#example)

## Getting started

Install the library using Yarn:

```bash
// add library
yarn add @mobeye/react-native-form-fields

// add peer dependencies
yarn add @react-native-community/datetimepicker
```

## General Usage

See example app (`example/App.tsx`) for more examples using TypeScript

You can use most Fields based on the example below, they work in the same way as a basic `TextInput`.  
!!! All fields and component are wrapped with `React.memo` for memoization.

```javascript
import React from 'react';
import SingleLineTextField from '@mobeye/react-native-form-fields';

const containerStyle = {
    width: '90%',
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 14,
    elevation: 5,
};

const App = () => {
    const [text, setText] = React.useState('');

    // Make sure to use React callbacks and/or memoized values to prevent unnecessary renders !
    return (
        <SingleLineTextField
            label="Click on me !"
            value={text}
            onChangeText={setText}
            containerStyle={containerStyle}
        />
    );
};
```

## Field common props

### `Description`

All fields come with an optional `Description` to display text and/or images above the field.
Can be used to give context, indications or whatever you want.

Those props are present in every field and will be immediately passed to the `Description` component.

| Property                            | Type                      | Description                                                                                                                  |
| ----------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `descriptionText`                   | `string`                  | (Optional) Text to display                                                                                                   |
| `descriptionPictures`               | `FormUrl[]`               | (Optional) Pictures to display. See [FormUrl](#formurl)                                                                      |
| `descriptionImageViewer`            | `FC<ImageViewerProps>`    | (Optional) If an ImageViewer component is provided, it will open on picture press. See [ImageViewerProps](#imageviewerprops) |
| `onPressDescriptionPicture`         | `(index: number) => void` | (Optional) callback fired when user touches a picture                                                                        |
| `descriptionContainerStyle`         | `ViewStyle`               | (Optional) Style for the Description container                                                                               |
| `descriptionTextStyle`              | `TextStyle`               | (Optional) Style for the text                                                                                                |
| `descriptionPicturesContainerStyle` | `ViewStyle`               | (Optional) Style for the view containing the pictures                                                                        |
| `descriptionPictureStyle`           | `ImageStyle`              | (Optional) Style for the Image components rendering the pictures                                                             |

#### `FormUrl`

Custom type used to pass pictures to the `Description` component

| Property     | Type                                | Description                                                                                     |
| ------------ | ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| `src`        | `string`                            | (Required) Url or path to the image                                                             |
| `name`       | `string`                            | (Optional) Not used for now                                                                     |
| `size`       | `number`                            | (Optional) Not used for now                                                                     |
| `dimensions` | `{ width: number; height: number }` | (Optional) If not provided will be computed on initial render and every time `pictures` changes |

#### `ImageViewerProps`

Props of the custom ImageViewer component passed using `descriptionImageViewer`
Those 4 props will be passed to the component by the `DescriptionPictures` component
It is up to you to use them or not

| Property        | Type         | Description                                         |
| --------------- | ------------ | --------------------------------------------------- |
| `isVisible`     | `boolean`    | (Required) Show/Hide ImageViewer                    |
| `pictureUris`   | `string[]`   | (Required) List of the description pictures         |
| `startingIndex` | `number`     | (Required) index of the picture pressed by the user |
| `goBack`        | `() => void` | (Required) callback to dismiss the viewer           |

### Styles

In addition to their own style props, every field has these 4 styles:

| Property                           | Type        | Description                                 |
| ---------------------------------- | ----------- | ------------------------------------------- |
| `containerStyle`                   | `ViewStyle` | (Optional) Container style                  |
| `labelAndValidationContainerStyle` | `ViewStyle` | (Optional) Label/validation container style |
| `labelStyle`                       | `TextStyle` | (Optional) Label text style                 |
| `validationDotStyle`               | `ViewStyle` | (Optional) Validation dot style             |

### Colors

All fields have an optional props `colors` which is an object with the optional following keys:
`valid`, `error`, `active`, `inactive`, `activeBackground`, `inactiveBackground`, `placeholder`

Depending on the field only some of them can be used. If unsure please refer to the types exported with the library

## Fields

### `SingleLineTextField`

A TextInput with a nice animation on focus/blur

| Property              | Type                                       | Description                                                                                                                         |
| --------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `label`               | `string`                                   | (Required) Label to display and animate                                                                                             |
| `value`               | `string`                                   | (Required) Value to display in the input. Can be empty                                                                              |
| `isValid`             | <code>bool &#124; null</code>              | (Optional) If undefined or null, validation will not be rendered. If boolean validation will be rendered either as valid or invalid |
| `onChangeText`        | `(text: string) => void`                   | (Optional) `TextInput` `onChangeText` callback                                                                                      |
| `onFocus`             | `() => void`                               | (Optional) Triggered on input focus                                                                                                 |
| `onBlur`              | `() => void`                               | (Optional) Triggered on input blur                                                                                                  |
| `leftIcon`            | `(isExpanded: boolean) => React.ReactNode` | (Optional) Func that return icon to display on the left part of the field. isExpanded is true when the field contain a value        |
| `rightIcon`           | `(isExpanded: boolean) => React.ReactNode` | (Optional) Func that return icon to display on the right part of the field. isExpanded is true when the field contain a value       |
| `minFontSize`         | `number`                                   | (Optional) the min size for the font                                                                                                |
| `maxFontSize`         | `number`                                   | (Optional) the max size for the font                                                                                                |
| `textInputProps`      | `TextInputProps`                           | (Optional) Props that will be directly passed down to the `TextInput`                                                               |
| `inputContainerStyle` | `ViewStyle`                                | (Optional) input container style                                                                                                    |
| `inputStyle`          | `TextStyle`                                | (Optional) Style to pass down to the `TextInput`                                                                                    |
| `disabled`            | `boolean`                                  | (Optional) To make it not editable                                                                                                  |

### `MultiLineTextField`

A multi line TextInput with a nice animation on focus/blur

| Property         | Type                          | Description                                                                                                                         |
| ---------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `label`          | `string`                      | (Required) Label to display and animate                                                                                             |
| `value`          | `string`                      | (Required) Value to display in the input. Can be empty                                                                              |
| `isValid`        | <code>bool &#124; null</code> | (Optional) If undefined or null, validation will not be rendered. If boolean validation will be rendered either as valid or invalid |
| `placeholder`    | `string`                      | (Optional) Placeholder to display is no value                                                                                       |
| `onChangeText`   | `(text: string) => void`      | (Optional) `TextInput` `onChangeText` callback                                                                                      |
| `onFocus`        | `() => void`                  | (Optional) Triggered on input focus                                                                                                 |
| `onBlur`         | `() => void`                  | (Optional) Triggered on input blur                                                                                                  |
| `textInputProps` | `TextInputProps`              | (Optional) Props that will be directly passed down to the `TextInput`                                                               |
| `inputStyle`     | `TextStyle`                   | (Optional) Style to pass down to the `TextInput`                                                                                    |
| `disabled`       | `boolean`                     | (Optional) To make it not editable                                                                                                  |

### `MCQField`

A MCQ field that can be foldable.

| Property                        | Type                            | Description                                                                                                                         |
| ------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `label`                         | `string`                        | (Required) Label to display and animate                                                                                             |
| `possibleAnswers`               | `string[]`                      | (Required) List of possible answers to display                                                                                      |
| `selectedAnswersIndices`        | `number[]`                      | (Required) List of indices of the selected answers                                                                                  |
| `onSelectAnswer`                | `(answerIndex: number) => void` | (Required) Callback fired when user selects an answer                                                                               |
| `isValid`                       | <code>bool &#124; null</code>   | (Optional) If undefined or null, validation will not be rendered. If boolean validation will be rendered either as valid or invalid |
| `foldable`                      | `boolean`                       | (Optional) Should the MCQField be foldable (useful when there are a lot of possible answers)                                        |
| `openFoldableLabel`             | `string`                        | (Optional) Opening button label for foldable MCQ                                                                                    |
| `closeFoldableLabel`            | `string`                        | (Optional) Closing button label for foldable MCQ                                                                                    |
| `activeAnswerIcon`              | `React.ReactNode`               | (Optional) Icon to display next to the answer when it is selected                                                                   |
| `inactiveAnswerIcon`            | `React.ReactNode`               | (Optional) Icon to display next to the answer when it is not selected                                                               |
| `activeOpenFoldableIcon`        | `React.ReactNode`               | (Optional) Icon to display in the open button for foldable MCQ when it is closed                                                    |
| `inactiveOpenFoldableIcon`      | `React.ReactNode`               | (Optional) Icon to display in the open button for foldable MCQ when it is opened                                                    |
| `activeCloseFoldableIcon`       | `React.ReactNode`               | (Optional) Icon to display in the close button for foldable MCQ when it is closed                                                   |
| `inactiveCloseFoldableIcon`     | `React.ReactNode`               | (Optional) Icon to display in the close button for foldable MCQ when it is opened                                                   |
| `shouldAnimateOpenFoldableIcon` | `boolean`                       | (Optional) Should the openFoldableIcon be animated (90° rotation) on opening                                                        |
| `answerContainerStyle`          | `ViewStyle`                     | (Optional) Answer container style                                                                                                   |
| `answerTextStyle`               | `TextStyle`                     | (Optional) Answer text style                                                                                                        |
| `openFoldableBoxStyle`          | `ViewStyle`                     | (Optional) Open foldable button style                                                                                               |
| `openFoldableLabelStyle`        | `TextStyle`                     | (Optional) Open foldable button label style                                                                                         |
| `closeFoldableBoxStyle`         | `ViewStyle`                     | (Optional) Close foldable button style                                                                                              |
| `closeFoldableLabelStyle`       | `TextStyle`                     | (Optional) Close foldable button label style                                                                                        |
| `validLabel`                    | `string`                        | (Optional) Text to put inside tablet                                                                                                |
| `validLabelStyle`               | `ViewStyle`                     | (Optional) Style for tablet text                                                                                                    |
| `disabled`                      | `boolean`                       | (Optional) To make it not editable                                                                                                  |

### `PickerField`

A simple presentational picker field with an `openPicker` prop to work with an input picker component like [DatePicker](#datepicker).

| Property              | Type                                       | Description                                                                                                                         |
| --------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `label`               | `string`                                   | (Required) Label to display and animate                                                                                             |
| `value`               | `string`                                   | (Required) Value to display in the input. Can be empty                                                                              |
| `openPicker`          | `() => void`                               | (Required) Callback fired when user presses the field to open the picker                                                            |
| `isValid`             | <code>bool &#124; null</code>              | (Optional) If undefined or null, validation will not be rendered. If boolean validation will be rendered either as valid or invalid |
| `leftIcon`            | `(isExpanded: boolean) => React.ReactNode` | (Optional) Func that return icon to display on the left part of the field. isExpanded is true when the field contain a value        |
| `rightIcon`           | `(isExpanded: boolean) => React.ReactNode` | (Optional) Func that return icon to display on the right part of the field. isExpanded is true when the field contain a value       |
| `inputContainerStyle` | `ViewStyle`                                | (Optional) input container style                                                                                                    |
| `inputStyle`          | `TextStyle`                                | (Optional) Style to pass down to the `TextInput`                                                                                    |
| `disabled`            | `boolean`                                  | (Optional) To make it not editable                                                                                                  |

### `DatePickerField`

A date picker field which use the [DatePicker](#datepicker) component.

| Property                      | Type                                       | Description                                                                                                                         |
| ----------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `label`                       | `string`                                   | (Required) Label to display and animate                                                                                             |
| `value`                       | `Date`                                     | (Optional) date value to display in the input.                                                                                      |
| `isValid`                     | <code>bool &#124; null</code>              | (Optional) If undefined or null, validation will not be rendered. If boolean validation will be rendered either as valid or invalid |
| `onChange`                    | `(date?: Date) => void`                    | (Required) Callback fired when user selects a date                                                                                  |
| `leftIcon`                    | `(isExpanded: boolean) => React.ReactNode` | (Optional) Func that return icon to display on the left part of the field. isExpanded is true when the field contain a value        |
| `rightIcon`                   | `(isExpanded: boolean) => React.ReactNode` | (Optional) Func that return icon to display on the right part of the field. isExpanded is true when the field contain a value       |
| `dateStringFormat`            | `string`                                   | (Optional) the format of the value. default is 'DD/MM/YYYY'                                                                         |
| `minimumDate`                 | `Date`                                     | (Optional) The min date selectable in the picker                                                                                    |
| `maximumDate`                 | `Date`                                     | (Optional) The max date selectable in the picker                                                                                    |
| `iosClearButtonText`          | `string`                                   | (Optional) The label for the clear button on iOS. Default: 'CLEAR'                                                                  |
| `iosValidateButtonText`       | `string`                                   | (Optional) The label for the validate button on iOS. Default: 'OK'                                                                  |
| `inputContainerStyle`         | `ViewStyle`                                | (Optional) Style to pass down to the input container                                                                                |
| `inputStyle`                  | `TextStyle`                                | (Optional) Style to pass down to the input text                                                                                     |
| `modalStyle`                  | `ViewStyle`                                | (Optional) Style to pass down to the modal wrapping the date picker                                                                 |
| `datePickerIOSContainerStyle` | `ViewStyle`                                | (Optional) Style to pass to the date picker container on iOS only                                                                   |
| `datePickerIOSHeaderStyle`    | `ViewStyle`                                | (Optional) Style to pass to the date picker header on iOS only                                                                      |
| `disabled`                    | `boolean`                                  | (Optional) To make it not editable                                                                                                  |

### `PhotoField`

A field that display photos.
To take photo with it, you need to implement yourself a camera.

| Property               | Type                                                       | Description                                                                                                                         |
| ---------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `label`                | `string`                                                   | (Required) Label to display and animate                                                                                             |
| `pictureUris`          | `string[]`                                                 | (Required) List of picture uris to display                                                                                          |
| `openCameraButton`     | `React.ReactNode`                                          | (Required) Open Camera button to be pressed by the user to open the camera                                                          |
| `isValid`              | <code>bool &#124; null</code>                              | (Optional) If undefined or null, validation will not be rendered. If boolean validation will be rendered either as valid or invalid |
| `onPressPicture`       | `(index: number) => void`                                  | (Optional) Callback fired when user presses a picture                                                                               |
| `openCameraButton`     | `React.ReactNode`                                          | (Required) The open camera button component                                                                                         |
| `imageComponent`       | `(uri: string, style?: StyleProp<any>) => React.ReactNode` | (Optional) Func that return the Image component to display. Default: `<Image source={{ uri }} style={style} />`                     |
| `imagesContainerStyle` | `ViewStyle`                                                | (Optional) Style for the view containing the images                                                                                 |
| `imageContainerStyle`  | `ViewStyle`                                                | (Optional) Style for the Touchable containing each individual image                                                                 |
| `imageStyle`           | `ImageStyle`                                               | (Optional) Style for the images                                                                                                     |

## Other components

### `Description`

You can directly import and use the [Description](https://github.com/Mobeye/react-native-form#description) component.

### `DatePicker`

A date picker component. To be used with a presentational component like [PickerField](#pickerfield) that can display the picked date.

| Property                      | Type                    | Description                                                        |
| ----------------------------- | ----------------------- | ------------------------------------------------------------------ |
| `isVisible`                   | `boolean`               | (Required) Boolean to show or hide the picker.                     |
| `value`                       | `Date`                  | (Optional) Date value to display in the input.                     |
| `onClosePicker`               | `(date?: Date) => void` | (required) Callback fired when the picker is closed.               |
| `minimumDate`                 | `Date`                  | (Optional) The min date selectable in the picker                   |
| `maximumDate`                 | `Date`                  | (Optional) The max date selectable in the picker                   |
| `iosClearButtonText`          | `string`                | (Optional) The label for the clear button on iOS. Default: 'CLEAR' |
| `iosValidateButtonText`       | `string`                | (Optional) The label for the validate button on iOS. Default: 'OK' |
| `modalStyle`                  | `ViewStyle`             | (Optional) Style to pass to the modal wrapping the date picker     |
| `datePickerIOSContainerStyle` | `ViewStyle`             | (Optional) Style to pass to the date picker container on iOS only  |
| `datePickerIOSHeaderStyle`    | `ViewStyle`             | (Optional) Style to pass to the date picker header on iOS only     |

## Example

You can run a simple example present in the module to test the form. First, you need to install node_modules and example pods:

```bash
yarn && cd example/ios/ && pod install && cd .. && yarn && yarn start
```

Then, open the example directory with xcode or android studio to build the example.

---

<p align="center">
  <a href="https://mobeye-app.com/">
    <img width="120px" src="https://u4s4z4j6.stackpathcdn.com/wp-content/uploads/2018/10/logo-noir-e1568971859438.png">
  </a>
  <p align="center">
    Built and maintained by <a href="https://mobeye-app.com/">Mobeye</a>.
  </p>
</p>
