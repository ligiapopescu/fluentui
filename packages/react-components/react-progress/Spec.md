# @fluentui/react-progress Spec

## Background

The `Progress` component is used to display the current progress of an operation flow, or show that an operation is currently being executed.

## Prior Art

### Open UI

| Library                 | Component Name     | Spec Link                                                                                                    | Notes                                                                                             |
| ----------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| Ant Design              | Progress           | [Progress](https://ant.design/components/progress/)                                                          | Specifies the type, a combined progress component                                                 |
| Atlassian Design        | Progress bar       | [ProgressBar](https://atlassian.design/components/progress-bar/success-progress-bar/examples)                | Defaults to determinate state, which turns green when value reaches 1. Has an indeterminate state |
| Bootstrap               | Progress           | [Progress](https://getbootstrap.com/docs/4.3/components/progress/)                                           | Allows for multiple different animation styles on the same Progress bar                           |
| Carbon Design           | Progress Indicator | [ProgressIndicator](https://react.carbondesignsystem.com/?path=/story/components-progressindicator--default) | Determinate Progress that has steps, similar to a Slider                                          |
| Fast                    | Progress           | [Progress](https://explore.fast.design/components/fast-progress)                                             | Combined Progress and Spinner component, has a determinate and indeterminate state                |
| Lightning Design System | Progress Bar       | [ProgressBar](https://www.lightningdesignsystem.com/components/progress-bar/)                                | Has a vertical bar, only determinate, and can specify progress step                               |
| Semantic UI             | Progress           | [Progress](https://semantic-ui.com/modules/progress.html#indicating)                                         | Allows for success and error states, default rounded edges. No indeterminate form                 |

### Comparison of v8 and v0

The existing components are:

- v8
  - `ProgressIndicator`
- v0

## Sample Code

Basic example:

```jsx
import { Progress } from '@fluentui/react-progress';

function App() {
  return <Progress thickness="large" />;
}
```

## Variants

- Indeterminate Progress
  - The default Progress that animates indefinitely
- Determinate Progress
  - The determinate form of the Progress component that incrementally loads from 0% to 100%

#### Adding Label and Description with ProgressField

There is a `ProgressField` component that adds a `label`, validation state(`success`, `warning`, `error`), and hint text to the `Progress`.
You can use it like so:

```jsx
import * as React from 'react';
import type { ProgressFieldProps } from '@fluentui/react-field';
import { ProgressField } from '@fluentui/react-field';

export const Default = (props: ProgressFieldProps) => (
  <ProgressField
    label="Example Progress field"
    value={0.75}
    validationState="success"
    validationMessage="This is a success message"
    hint="This is a hint message"
    {...props}
  />
);
```

### Shape

The Progress is represented as a rounded rectangular area with an inner animated bar that either travels across the area indefinitely or animates up till a specified point

## API

### Slots

- `root` - The root element of the Progress, which also serves as the track for the Progress bar. The html element is a `div`
- `bar` - The div element that gets animated into a Progress bar. The html element is `div`

### Props

See API at [Progress.types.tsx](https://github.com/microsoft/fluentui/blob/master/packages/react-components/react-progress/src/components/Progress/Progress.types.ts).

## Structure

```html
<div class="fui-Progress">
  <!-- Bar for Progress -->
  <div class="fui-Progess__bar" />
</div>
```

## Migration

See [MIGRATION.md](./MIGRATION.md).

## Behaviors

### States

- **Display** - The Progress will use the following priority:

  - Specifying the `value` prop will alter the Progress from `indeterminate` to `determinate`.
  - The component also has `rtl` support and will animate the progress bar from right to left if set.

### Interaction

The Progress is non-interactive.

- **Keyboard** - Not keyboard focusable.
- **Mouse**

  - Click: No action

- **Touch** - Nothing

## Accessibility

- The `determinate` Progress has the proper `aria` attributes assigned to the element that will allow screen readers to get the `max` and current `value` of the `Progress`.
