# Metaverse VM Browser Extension

You can find the latest version of Metaverse on [our official website](https://mvs.org/). For help using Metaverse, visit our [Documentation Site](https://docs.mvs.org).

The Metaverse VM browser extension supports Firefox, Google Chrome, and Chromium-based browsers. We recommend using the latest available browser version.

For up to the minute news, follow our [Twitter](https://twitter.com/mvs_org) or [Medium](https://medium.com/metaverse-blockchain) pages.

To learn how to develop Metaverse-compatible applications, visit our [Developer Docs](https://docs.mvs.org/).

## Building locally

- Install [Node.js](https://nodejs.org) version 10
    - If you are using [nvm](https://github.com/creationix/nvm#installation) (recommended) running `nvm use` will automatically choose the right node version for you.
- Install [Yarn](https://yarnpkg.com/en/docs/install)
- Install dependencies: `yarn`
- Build the project to the `./dist/` folder with `yarn dist`.
- Optionally, to start a development build (e.g. with logging and file watching) run `yarn start` instead.
    - To start the [React DevTools](https://github.com/facebook/react-devtools) and [Redux DevTools Extension](http://extension.remotedev.io)
      alongside the app, use `yarn start:dev`.
      - React DevTools will open in a separate window; no browser extension is required
      - Redux DevTools will need to be installed as a browser extension. Open the Redux Remote Devtools to access Redux state logs. This can be done by either right clicking within the web browser to bring up the context menu, expanding the Redux DevTools panel and clicking Open Remote DevTools OR clicking the Redux DevTools extension icon and clicking Open Remote DevTools.
        - You will also need to check the "Use custom (local) server" checkbox in the Remote DevTools Settings, using the default server configuration (host `localhost`, port `8000`, secure connection checkbox unchecked)

Uncompressed builds can be found in `/dist`, compressed builds can be found in `/builds` once they're built.

## Contributing

### Running Tests

Run tests with `yarn test`.

You can also test with a continuously watching process, via `yarn watch`.

You can run the linter by itself with `yarn lint`.

## Development

```bash
yarn
yarn start
```

## Build for Publishing

```bash
yarn dist
```

## License

This wallet is a fork of the most recent MetaMask wallet code that was released under the MIT license. We will keep this project under the same license. The license notice can be found in the LICENSE file that is part of the source code.

## Other Docs

- [How to add custom build to Chrome](./docs/add-to-chrome.md)
- [How to add custom build to Firefox](./docs/add-to-firefox.md)
- [How to add a new translation to MetaverseVM extension](./docs/translating-guide.md)
- [Publishing Guide](./docs/publishing.md)
- [How to use the TREZOR emulator](./docs/trezor-emulator.md)
