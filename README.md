# Micro app architecture with expo

![alt text](docs/assets/conference.png "Conference photo")
This repo contains the code showcased at Appjs conference during the talk "Micro app architecture with expo".

[See talk here](https://youtu.be/j6nNdPciqn0)

## Installation

Start by installing all dependencies:
`yarn` from root. To run the main app navigate to apps/mobile and run `yarn start`. To run any of the micro apps run `yarn start` from either apps/payments or apps/support.

## Background

### Setup

The project is setup as a monorepo using yarn. To create the app and micro apps, expo is used. See how to setup a monorepo with expo here: https://docs.expo.dev/guides/monorepos/

To get expo start to work with a mono repo the start script in each micro app has been modified:

`"start": "EXPO_USE_METRO_WORKSPACE_ROOT=1 expo start -c"`

The -c argument resets the cache when starting metro. This is not neccesary and not recommended in a normal development workflow, however since this is a demo app, this makes sures that metro is always correct when switching between micro apps.

### Creating new micro apps

To create a new micro app, navigate to the app folder and run `npx create-expo-app@latest`. This will scaffold a new expo app. Expo generates a lot of files not needed for most apps, so if you don't want the additional expo demo components, change to the new directory and run `yarn reset-project`.

## Navigation

### React navigation

Creating navigation in micro apps is easy with react navigation. Each package defines any navigator needed. When running the whole app, each micro app just exports their navigators to the main app. Since all navigators are react components its easy to do.

### Expo Router

Expo router is a bit more complicated in micro app architecture, since expo router is based on file structures and not react components. Each micro app can setup its own expo route. This works as expected, however when you want to run the main app this becomes tricker as it doesn't have access to the micro apps file structures.

You can make this work by changing the main entry of the main app. In this app we have enabled this using our package `"@micro/core-navigation"`.

In the main app's package.json make sure to change `"main": "expo-router/entry"` to `"main": "index.js"`. This has already been done in the project. In the index.js file we now need to show our main app where the other file structures to our navigators are located.

If you have created a new micro app above, go and add it to the main apps index.js

```
  {
    context: require.context("../new-app/app/(new-app)", true, /.*/),
    prefix: "(new-app)",
  },
```

In the new micro app, create a file in `new-app/app/(new-app)`. Everything you want to export to the main app should be located in the folder with parenthisis. Any other navigation that should be part of the micro app but not the main app can be put directly in the app folder.
