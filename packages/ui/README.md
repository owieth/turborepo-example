# UI

Shared React component library built with shadcn/ui, Radix primitives, and Tailwind CSS.

## Components

| Component | Description                                                                  |
| --------- | ---------------------------------------------------------------------------- |
| `Button`  | Button with variants (default, destructive, outline, secondary, ghost, link) |

## Adding Components

```bash
pnpm ui:add
```

Or manually create components in the `components/` directory following the existing patterns.

## Usage

Import components in any app:

```tsx
import { Button } from '@ui/components/button';
```

## Styling

Global styles and Tailwind theme are defined in `styles/globals.css`. Apps import this file in their root layout.
