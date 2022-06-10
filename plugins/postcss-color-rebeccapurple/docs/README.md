<!-- Available Variables: -->
<!-- <humanReadableName> PostCSS Your Plugin -->
<!-- <exportName> postcssYourPlugin -->
<!-- <packageName> @csstools/postcss-your-plugin -->
<!-- <packagePath> plugins/postcss-your-plugin -->
<!-- <cssdbId> your-feature -->
<!-- <specUrl> https://www.w3.org/TR/css-color-4/#funcdef-color -->
<!-- <example.css> file contents for examples/example.css -->
<!-- <header> -->
<!-- <usage> usage instructions -->
<!-- <env-support> -->
<!-- <link-list> -->
<!-- to generate : npm run docs -->

<header>

[PostCSS RebeccaPurple] lets you use the `rebeccapurple` color keyword in CSS.

```pcss
<example.css>

/* becomes */

<example.expect.css>
```

## About the `rebeccapurple` keyword

In 2014, Rebecca Alison Meyer, the daughter of [Eric A. Meyer](https://en.wikipedia.org/wiki/Eric_A._Meyer), an American web design consultant best known for his advocacy work on behalf of CSS, passed away of a brain tumor at six years of age.

In her memory, the hex color `#663399` is named `rebeccapurple` and [added to the CSS Colors list](https://lists.w3.org/Archives/Public/www-style/2014Jun/0312.html).

<usage>

<env-support>

## Options

### preserve

The `preserve` option determines whether the original notation
is preserved. By default, it is not preserved.

```js
<exportName>({ preserve: true })
```

```pcss
<example.css>

/* becomes */

<example.preserve-true.expect.css>
```

<link-list>