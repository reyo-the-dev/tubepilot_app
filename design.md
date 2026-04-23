# Design System & Variables

This document defines the visual language and design tokens used in the TubePilot application.

## Color Palette

The color system is defined in `src/styles/scss/_variables.scss`. Note that these variables are automatically injected into all SCSS modules.

| Variable            | HEX Code  | Description                                                                  |
| :------------------ | :-------- | :--------------------------------------------------------------------------- |
| `$red-core`         | `#10b981` | **Primary Color** (Emerald/Green) - Used for primary actions and highlights. |
| `$color_2`          | `#3b82f6` | **Secondary Color** (Blue) - Used for secondary actions and accents.         |
| `$color_bg`         | `#f0fdf4` | **Background Color** - The default background for the application pages.     |
| `$color_text_grey`  | `#64748b` | **Text Grey** - Used for secondary text, labels, and icons.                  |
| `$color_text_grey2` | `#cecece` | **Text Grey Light** - Used for placeholders or disabled states.              |
| `$color_danger1`    | `#ba1a1a` | **Danger Color** - Used for error messages, delete actions, and alerts.      |

## Typography

TubePilot uses **Inter** as the primary font family, loaded via `next/font/google`.

- **Font Family**: `Inter, sans-serif`
- **Variable**: `--font-primary` (accessible in SCSS if configured, or via `FONTS.font1` in JS)
- **Subsets**: `latin`
- **Weights**: 100 to 900

## Spacing & Layout

Standard spacing tokens for maintaining consistency.

| Variable      | Value  | Description                                     |
| :------------ | :----- | :---------------------------------------------- |
| `$padding_sm` | `16px` | Small padding for cards or internal elements.   |
| `$padding_md` | `20px` | Medium padding, standard for container gutters. |

## SCSS Mixins

Reusable style patterns defined in `src/styles/scss/_mixins.scss`.

### `flexCenter`

Centers children using flexbox.

```scss
@include flexCenter;
```

### `defaultBox`

The standard card style used across the app (white background, subtle shadow, light border).

```scss
@include defaultBox;
```

## Responsive Design

Breakpoints and media query mixins are defined in `src/styles/scss/_media_queries.scss`.

### Breakpoints

- **xs**: 0
- **sm**: 576px
- **md**: 768px
- **lg**: 992px
- **xl**: 1200px
- **xxl**: 1400px

### Usage

```scss
@include respond-above(md) {
  // Styles for tablets and larger
}

@include respond-below(sm) {
  // Styles for mobile phones
}

@include respond-between(sm, lg) {
  // Styles between mobile and large desktops
}
```
