# Installing PostCSS Progressive Custom Properties

[PostCSS Progressive Custom Properties] runs in all Node environments, with special instructions for:

| [Node](#node) | [PostCSS CLI](#postcss-cli) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- | --- |

## Node

Add [PostCSS Progressive Custom Properties] to your project:

```bash
npm install @csstools/postcss-progressive-custom-properties --save-dev
```

Use [PostCSS Progressive Custom Properties] as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssProgressiveCustomProperties = require('@csstools/postcss-progressive-custom-properties');

postcss([
  postcssProgressiveCustomProperties()
]).process(YOUR_CSS /*, processOptions */);
```

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli --save-dev
```

Use [PostCSS Progressive Custom Properties] in your `postcss.config.js` configuration file:

```js
const postcssProgressiveCustomProperties = require('@csstools/postcss-progressive-custom-properties');

module.exports = {
  plugins: [
    postcssProgressiveCustomProperties()
  ]
}
```

## Webpack

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader --save-dev
```

Use [PostCSS Progressive Custom Properties] in your Webpack configuration:

```js
const postcssProgressiveCustomProperties = require('@csstools/postcss-progressive-custom-properties');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: {
            postcssOptions: {
                plugins: [postcssProgressiveCustomProperties()],
              }
          } }
        ]
      }
    ]
  }
}
```

## Create React App

Add [React App Rewired] and [React App Rewire PostCSS] to your project:

```bash
npm install react-app-rewired react-app-rewire-postcss --save-dev
```

Use [React App Rewire PostCSS] and [PostCSS Progressive Custom Properties] in your
`config-overrides.js` file:

```js
const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssProgressiveCustomProperties = require('@csstools/postcss-progressive-custom-properties');

module.exports = config => reactAppRewirePostcss(config, {
  plugins: () => [
    postcssProgressiveCustomProperties()
  ]
});
```

## Gulp

Add [Gulp PostCSS] to your project:

```bash
npm install gulp-postcss --save-dev
```

Use [PostCSS Progressive Custom Properties] in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssProgressiveCustomProperties = require('@csstools/postcss-progressive-custom-properties');

gulp.task('css', () => gulp.src('./src/*.css').pipe(
  postcss([
    postcssProgressiveCustomProperties()
  ])
).pipe(
  gulp.dest('.')
));
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss --save-dev
```

Use [PostCSS Progressive Custom Properties] in your Gruntfile:

```js
const postcssProgressiveCustomProperties = require('@csstools/postcss-progressive-custom-properties');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      processors: [
       postcssProgressiveCustomProperties()
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS CLI]: https://github.com/postcss/postcss-cli
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS Progressive Custom Properties]: https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-progressive-custom-properties
[React App Rewire PostCSS]: https://github.com/csstools/react-app-rewire-postcss
[React App Rewired]: https://github.com/timarney/react-app-rewired