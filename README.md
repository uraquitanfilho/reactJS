# REACTJS

> Step by Step to initial React Struct

## Instalation

```shell
mkdir YOUR_FOLDER_PROJECT
cd YOUR_FOLDER_PROJECT
yarn init -y
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli -D
yarn add babel-loader webpack-dev-server -D
yarn add react react-dom
```

> webpack-dev-server like nodemon live reload

## Make a new file: babel.config.js

```js
//import presets that will to use
module.exports = {
  presets: [
    "@babel/preset-env", // changes JAVASCRIPT that browser do not understand
    "@babel/preset-react" // changes REACT actions that browser do not understand
  ]
};
```

## Make a new file: webpack.config.json

```js
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  // yarn add webpack-dev-server to auto reload after save
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  // using  /expression/ between / and  / => regular expression
  module: {
    rules: [
      {
        test: /\.js$/, //regular expression to find all js files
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      }
    ]
  }
};
```

## Make a new folder "src" and add a new file "index.js"

## Make a new folder "public"

> bundle path

## Edit package.json to add a script.

```json
"scripts": {
   "build": "webpack --mode -development",
   "dev": "webpack-dev-server --mode development",
   "prod": "webpack --mode production",
},
//or using webpack-dev-server to auto reload

```

## Load Styles and CSS

> to be possible import css files.

```shell
yarn add style-loader css-loader -D
```

> Edit webpack.config.js. go to rules to add

```js
...
rules:[
  ...,
{
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
  ...,
]
...
```

## To use images need a new loader:

```shell
yarn add file-loader -D
```

> Edit webpack.config.js. go to rules to add

```js
...
rules:[
  ...,
      {
        test: /.*\.(gif|png|pje?g)$/i, //i case-insensitive
        use: { loader: "file-loader" }
      }
  ...,
]
...
```
