# vue-mask [in development]

> A Vue.js Plugin for masking input fields.

## Formatting flags
```js
{
  '9': /[0-9]/, // any number
  'A': /[A-Z]/, // any uppercase letter
  'a': /[a-z]/, // any lowercase letter
  'c': /[A-z]/ // any letter
}
```


## Example Usage
```html
  <input type="text" v-mask="(999) 999-9999">
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
