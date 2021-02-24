# Airfoil Schematics

React Native boilerplate templates for the [Airfoil CLI](https://github.com/teamairship/airfoil).

## Templates

All templates have some common libraries baked into them such as [React Navigation](https://reactnavigation.org/) and [React Native Config](https://github.com/luggit/react-native-config). (See full list below)

### [BLIMP](./templates/blimp)

A minimalist app built on Axios and the Context API.

### [PROPELLER](./templates/propeller)

_COMING SOON_ - A bare-bones implementation of Redux and REST.

### [JET](./templates/jet)

A turbocharged starter-kit using Apollo Client and GraphQL.

## Common Built-In Features

- Sane Prettier Defaults
- Typescript enabled by default
- Opinionated Directory Structure

  ```
  .
  └── app/
      ├── components/
      ├── hooks/
      ├── navigation/
      ├── screens/
      ├── services/
      ├── utils/
      ├── App.tsx
      ├── constants.ts
      └── global.d.ts
  ```
- Relative local imports
  ```
  import HomeScreen from '@app/screens/HomeScreen'
  ```
- [ErrorBoundary](react-native-error-boundary) already set up
- First [React Navigation](https://reactnavigation.org/) route already set up
- [React Native Config](https://github.com/luggit/react-native-config) hooked up to load `.env` vars into `app/constants.ts`
