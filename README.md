# vue-mask [in development]

> A Vue.js Plugin for masking input fields.

## Formatting flags
```js
{
  '9': /\d/, // any digit
  'A': /[A-Z]/, // any uppercase letter
  'a': /[a-z]/, // any lowercase letter
  'C': /[A-z0-9]/, // any alphanumeric character
  'c': /[A-z]/ // any letter
}
```


## Example Usage
```html
  <input type="text" v-mask="(999) 999-9999">
```

## Development Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
