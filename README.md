# Getting Started with Create ScandiPWA App

This package contains new ScandiPWA theme sources. Your parent theme is `@scandipwa/scandipwa`.

## Tasks

1. **Project Setup**  
Followed the official [ScandiPWA Quick Start Guide](https://docs.scandipwa.com/quick-start-guide) to set up a working ScandiPWA demo environment. The setup was configured using one of the provided demo sites as the data source.

2. **Cookie Component Enhancement**  
Redesigned the cookie consent component to make it more visually prominent and engaging. The new design encourages user interaction and compliance, ensuring the component feels more like a required action rather than a passive message.

3. **Mobile Burger Menu**  
Implemented a new burger menu button specifically for mobile devices. Positioned next to the logo in the header, the button triggers the menu overlay without redirecting the user to the `/menu` route, enhancing the mobile navigation experience.

Below, you can see screenshots from a mobile device showcasing the updated cookie component and the newly added burger menu in the header.

![Screenshots](./screenshots.png)

## Installation

Before you start, make sure to install package dependencies.

To do this, use `yarn` or `npm i` command.

### Recommended packages

For the best experience, install `scandipwa-cli` package globally. To do this, run:

```bash
npm i -g scandipwa-cli
```

## Available Scripts

### `npm run start` or `yarn start`

Starts the development server.

**Features**:
- The page will reload if you make edits.
- You will also see any lint errors in the console.

### `npm run build` or `yarn build`

Bundles the app into static files for production.

> **Note**: To bundle your application as valid Magento 2 theme use `--magento` option.

**Features**:
- The build is minified and the filenames include the hashes.
- The build is optimized for the best performance

## Extensions

To install an extension, run following command:

```bash
scandipwa extension <EXTENSION NAME>
```

> **Note**: to create new extension add `--create` option after the command. This will create a new extension package under `packages` folder.


