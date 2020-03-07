# Gala UTT

[![Build Status](https://travis-ci.org/ungdev/gala.utt.fr.svg?branch=master)](https://travis-ci.org/ungdev/gala.utt.fr)

## Requirements

- [yarn](https://yarnpkg.com/)

## Installation

```
git clone git@github.com:ungdev/gala.utt.fr.git
# or
git clone https://github.com/ungdev/gala.utt.fr.git

cd gala.utt.fr
yarn
```

## Configuration

```
# copy env file for all environments
cp .env .env.local
# makes your changes in .env.local, which will not be pushed
nano .env.local
```

## Commands

```
yarn dev    # development server
yarn build  # build production assets
yarn start  # static server
yarn serve  # pm2 static server (load balancing)
yarn reload # pm2 hot reload
yarn lint   # prettier lint
```

## Structure

```
gala.utt.fr/
├── public/                       # public assets that will be served directly (should not be used for fonts, images nor css)
├── src/                          # base directory
│   ├── assets/                      # assets (eg. fonts, images, css)
│   ├── components/                  # widely used components
│   │   └── header/
│   ├── containers/                  # pages that handle routes
│   │   └── home/
|   │      └── components/           # components used by this container only
│   ├── app.js                       # describe the app and the routes
│   ├── index.css                    # common css
│   ├── index.js                     # entry point
│   └── serviceWorker.js             # generated file for PWA
├── .editorconfig                 # define editor options
├── .env                          # global configuration
├── .env.local                    # override global configuration (not pushed to repository)
├── .env.development              # development configuration
└── .env.development.local        # override development configuration (not pushed to repository)
```
