# react-kofi-button

[![GitHub Deployment Workflow Status](https://img.shields.io/github/workflow/status/costasak/react-kofi-button/NodeJS%20Continuous%20Deployment?style=for-the-badge&logo=nodedotjs)](https://github.com/CostasAK/react-kofi-button/actions/workflows/node-cd.yml)
[![version](https://img.shields.io/npm/v/react-kofi-button?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/react-kofi-button?activeTab=versions)
[![weekly downloads](https://img.shields.io/npm/dw/react-kofi-button?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/react-kofi-button)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge&logo=prettier)](https://github.com/prettier/prettier)
[![GitHub](https://img.shields.io/github/license/costasak/react-kofi-button?style=for-the-badge)](https://github.com/CostasAK/react-kofi-button/blob/main/LICENSE)
[![GitHub watchers](https://img.shields.io/github/watchers/costasak/react-kofi-button?style=for-the-badge&logo=github)](https://github.com/CostasAK/react-kofi-button)
[![GitHub forks](https://img.shields.io/github/forks/costasak/react-kofi-button?style=for-the-badge&logo=github)](https://github.com/CostasAK/react-kofi-button/network/members)
[![Stars](https://img.shields.io/github/stars/costasak/react-kofi-button?style=for-the-badge&logo=github)](https://github.com/CostasAK/react-kofi-button)
[![Ko-fi](https://img.shields.io/badge/support_me_on_ko--fi-F16061?style=for-the-badge&logo=kofi&logoColor=f5f5f5)](https://ko-fi.com/CostasAK)

React Components to link to your Ko-fi profile.

- [How to use](#how-to-use)
  - [Installation](#installation)
  - [`<KofiButton />`](#kofibutton-)
    - [Importing](#importing)
    - [Examples](#examples)
    - [Properties](#properties)
  - [Customization](#customization)

## How to use

### Installation

With npm

```bash
npm i react-kofi-button
```

or yarn

```bash
yarn add react-kofi-button
```

### `<KofiButton />`

Displays a configurable button that scales to the current font size and links to the profile page of the configured user.

#### Importing

```javascript
import { KofiButton } from "react-kofi-button";
```

#### Examples

These buttons would all lead to [`https://ko-fi.com/costasak`](https://ko-fi.com/costasak) on click, since the `username` property is set to `"costasak"` on all of them.

##### Default preset

```jsx
<KofiButton username="costasak" label="Support me" />
```

![Default preset example GIF](/screenshots/default_preset.gif?raw=true "Default preset example GIF")

##### Thin preset

```jsx
<KofiButton
  username="costasak"
  label="Thin preset"
  preset="thin"
  backgroundColor="kofiRed"
/>
```

![Thin preset example GIF](/screenshots/thin_preset.gif?raw=true "Thin preset example GIF")

##### Skinny preset

```jsx
<KofiButton
  username="costasak"
  label="Skinny preset"
  preset="skinny"
  backgroundColor="kofiGrey"
/>
```

![Skinny preset example GIF](/screenshots/skinny_preset.gif?raw=true "Skinny preset example GIF")

#### Properties

| Property          | Required? | Default                 | Description                                                                                                                                                                                       |
|-------------------|-----------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `username`        | Required  | `"costasak"`            | Your Ko-fi username, which appears in the URL to your profile.                                                                                                                                    |
| `label`           | Optional  | `"Support Me on Ko-fi"` | The text on the button.                                                                                                                                                                           |
| `title`           | Optional  | `""`                    | Text that shows on hovering the button.                                                                                                                                                           |
| `preset`          | Optional  | `""`                    | One of several presets that change the style of the button. See examples.                                                                                                                         |
| `backgroundColor` | Optional  | `"kofiBlue"`            | The background color of the button. Can be one of the named Ko-fi colors (kofiBlue, kofiRed, kofiYellow or kofiGrey) or any valid CSS color value.                                                |
| `animation`       | Optional  | `true`                  | Whether the Ko-fi logo should be animated. Accepts `true`, `"true"`, `"on_hover"`, `false` and `"false"`. The `"on_hover"` option causes the logo to only be animated when the button is hovered. |

### Customization

Any of the presets can be further customized through CSS with the following classes.

| Class         | Description                     |
|---------------|---------------------------------|
| `.KofiButton` | The entire clickable area.      |
| `.KofiImage`  | The image within the button.    |
| `.KofiText`   | The text (label) on the button. |
