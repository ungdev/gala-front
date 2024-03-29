# Gala UTT

[![Build Status](https://github.com/ungdev/gala.utt.fr/actions/workflows/ci.yml/badge.svg)](https://github.com/ungdev/gala.utt.fr/actions/workflows/ci.yml)

## Requirements

- [yarn](https://yarnpkg.com/)

## Installation

```
# Clone the repository from GitHub
git clone git@github.com:ungdev/gala.utt.fr.git
# or
git clone https://github.com/ungdev/gala.utt.fr.git

# Go inside the repository
cd gala.utt.fr

# Download and install the dependencies
yarn
```

## Configuration

```
# Create your env file (.env) from the template (.env.example)
# And edit your variables in .env, that will not be pushed
cp .env.example .env
```

## Commands

```
yarn dev      # launch development server
yarn build    # build production server
yarn start    # launch production server
yarn prettify # prettify the source code
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
│   ├── app.tsx                      # describe the app and the routes
│   ├── index.scss                    # sass script, turned into common css by vite
│   ├── index.tsx                    # entry point
│   └── serviceWorker.ts             # generated file for PWA
├── .editorconfig                 # define editor options
└── .env                          # environment variables
```
