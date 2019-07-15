# REACTJS

> Step by Step to initial React Struct MANUALLY
> Using Class and Function Component.

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
    '@babel/preset-env', // changes JAVASCRIPT that browser do not understand
    '@babel/preset-react', // changes REACT actions that browser do not understand
  ],
};
```

## Make a new file: webpack.config.json

```js
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  // yarn add webpack-dev-server to auto reload after save
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  // using  /expression/ between / and  / => regular expression
  module: {
    rules: [
      {
        test: /\.js$/, //regular expression to find all js files
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
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

## Components

> There are 2 forms Function and Class

- To help with states and not declare it on constructor(){} you can add a new dependence:

```shell
yarn add @babel/plugin-proposal-class-properties -D
```

> Edit babel.config.js

```javascript
...js
  plugins: ['@babel/plugin-proposal-class-properties'],
...
```

### Fragments

> All HTML need to be part from only one tag. So, can be a <div> </div>. But it can be bad to CSS. Then, it's possible to use the tag like: <> </>. This is called fragment

### Let's create a new folder "src/components"

> this new folder will be used to add our components

## States are immutable

> We need to use this.setState to changes the state.

> Class Component Example:

```js
import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: ['NodeJS', 'ReactJS', 'React Native'],
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    });
  };
  render() {
    console.log('cheguei', this.state);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }
}
export default TechList;
```

> Function Component Example

```js
import React from 'react';

function TechItem({ tech }) {
  return (
    <li>
      {tech}
      <button onClick={() => this.handleDelete(tech)} type="button">
        Del
      </button>
    </li>
  );
}

export default TechItem;
```

### Element Properties

> To use parameters this.props (class) or props (function)

```js
function TechItem(props) {
  props.tech;
}
// or
function TechItem({ tech }) {}
// if a component CLASS to get paramers..
this.props.tech;
```

### Default Props

> Using above example, we can use default props like:

```js
//FUNCTION_NAME.defaultProps
TechItem.defaultProps = {
  tech: 'Hidden',
};
//IF COMPONENT CLASS:
static defaultProps = {
  tech: 'hidden',
}
```

### PropType

```shell
 yarn add prop-types
```

> To set correct types to props

```js
import PropTypes from 'prop-types';
...
//FUNCTION_NAME.propTypes
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
}
...
```

### So we can have TechList and TechItem like:

> TechList.js

```js
import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: ['NodeJS', 'ReactJS', 'React Native'],
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map(tech => (
              <TechItem
                key={tech}
                tech={tech}
                onDelete={() => this.handleDelete(tech)}
              />
            ))}
          </ul>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }
}
export default TechList;
```

> TechItem.js

```js
import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Del
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Hidden',
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;
```

## Life Cicle

> Using Class Component, we have some important methods. The principal are:

- componentDidMount()
  > executed as soon as the component appears on the screen.
- componentDidUpdate(prevProps, prevState)
  > executed whenever there are changes in the props or states
  > prevProps and prevState are old results before changed
- componentWillUnmount()
  > executed when component stop existing

### So, let's modify our TechList.js to use it.

```js
...
  state = {
    newTech: '',
    techs: [],
  };

  //About Life Cicle
  /**
   *
     executed as soon as the component appears on the screen.
   */
  componentDidMount() {
    //check if localstorage has items to be show
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  /**
   *
    executed whenever there are changes in the props or states
    prevProps and prevState are old results before changed
    if _ = not using the parameter.
   */
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  /**
   * executed when component stop existing
   */
  componentWillMount() {}
  // ===============
...
```

# How to Debug

> Chrome Extension:

- React devtools
