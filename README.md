# Fondue Design System by Frontify

[![Netlify Status](https://api.netlify.com/api/v1/badges/898e60eb-df4e-49d9-9d1d-829aeb9f61c2/deploy-status)](https://app.netlify.com/sites/fondue-components/deploys)
<a href="https://snyk.io/test/github/Frontify/fondue">
<img src="https://snyk.io/test/github/Frontify/fondue/badge.svg" alt="Known Vulnerabilities" />
</a>
<a href="https://github.com/Frontify/fondue/blob/main/README.md" title="latest">
<img alt="latest" src="https://img.shields.io/npm/v/@frontify/fondue/latest.svg" />
</a>

## Using `@frontify/fondue`

# Getting started

Welcome to Fondue, The design system for the [Frontify](https://frontify.com) ecosystem.

## Installation

Add the Fondue design system package as a dependency to your project.

```shell
npm i @frontify/fondue
# or
pnpm i @frontify/fondue
# or
yarn add @frontify/fondue
```

## Finding components

You can browse all available components in the Storybook instance of the [Fondue design system](https://fondue-components.frontify.com).
This Storybook contains all components from all subpackages in the Fondue monorepo. Each component will have a badge in the top bar indicating its current lifecycle state.

For the designers, the documentation is available in the [Fondue Design System Documentation](https://weare.frontify.com/document/1266?#/using-fondue) on weare.

## Usage

During the transition period in which we are cleaning up the Fondue Components, you can use old and new components side by side.

### Was this component already refactored?

If a component was refactored, the old implementation will be marked as **deprecated**.

This will be visible in the code when you consume the Component and through a Badge in the Top Bar of the Storybook Story.

### Using Refactored Components

If you want to use a refactored component, you can already import them through the `/components` subexport in the fondue package.

```tsx
import { Button } from "@frontify/fondue/components";

const App = () => <Button>Click Me</Button>;
```

### Using Old Components

If you are using the old components, you can continue to import them directly from the `@frontify/fondue` package.

```tsx
import { FondueButton } from "@frontify/fondue";

const App = () => <FondueButton>Click Me</FondueButton>;
```

## Contributing

See [Contribution Guidelines](CONTRIBUTING.md) for contributing and local development help.

## Important Links

-   [Storybook](https://fondue-components.frontify.com) – Storybook for previweing Fondue Components
-   [Fondue Documentation](https://weare.frontify.com/document/1266?#/using-fondue) – Documentation for the Fondue Design System
-   [Tailwind](https://tailwindcss.com/docs) – Utility-first CSS framework used in Fondue
