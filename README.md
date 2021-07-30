# Airfoil Schematics

![Airfoil Schematics](/assets/airfoil-schematics.jpg)

React Native boilerplate templates for the [Airfoil CLI](https://github.com/teamairship/airfoil).

## Templates

All templates have some common libraries baked into them such as [React Navigation](https://reactnavigation.org/) and [React Native Config](https://github.com/luggit/react-native-config).

### [BLIMP](./templates/blimp)

A minimalist app built on Axios and the Context API.

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

## Development

Install base dependencies, and install dependencies for any template(s) you wish to run/test.

```bash
# install dev dependencies - needed only for global testing
yarn install

# install all templates
yarn install-templates

# install a specific template
yarn install-blimp
yarn install-jet
```

Then, to run a template:

```bash
yarn ios-blimp
yarn ios-jet
yarn android-blimp
yarn android-jet
```

## Testing

```bash
# test all templates
yarn test

# test a specific template
yarn test-blimp
yarn test-jet
```

## Contributing

To contribute, open a new pull request and tag someone as a reviewer.

Make sure all tests are passing.

## Issues

All feature requests, bug reports, questions, etc. welcome! [Please submit issues here](https://github.com/teamairship/airfoil-schematics/issues).
