<p align="center">
  <h1 align="center">
    POC StencilJS i18n
  </h1>
</p>

POC i18n with StencilJS

## Installation

1. Use the package manager to install project deps.

```bash
yarn && yarn bootstrap
# or
npm install && npm run bootrstrap
```

2. After installing the deps, we will now configure Crowdin. First you'll add `CROWDIN_PROJECT_ID` and `CROWDIN_API_TOKEN` of yours Crowdin account in env of terminal (bash, zsh or other).

3. Build all projects, just run into root directory `yarn build`

4. Start Core app with `yarn start`

5. Well done 😄

## Commands

Build all projects

```bash
yarn build
```

Start Core app

```bash
yarn start
```

Upload new translations

```bash
cd packages/i18n
yarn i18n:upload
```

Download translations

```bash
cd packages/i18n
yarn i18n:download
```

## Upload New Translations

1. Adding new translation keys into `packages/i18n/src/configs/translations.json`
2. After just run `yarn i18n:upload`
3. The new translations will be on Crowdin

## Download Translations

1. Translate all terms on Crowdin
2. Run `yarn i18n:download` to get the new translations
3. The new translations will be present on `packages/i18n/src/configs/en/translations.json` and `packages/i18n/src/configs/pt/translations.json`

## Demos

Look and test all demos into `examples` folder
