/**
 * Initialize Masker
 */
let Masker = {
  flags: {
    '9': /\d/, // any digit
    'A': /[A-Z]/, // any uppercase letter
    'a': /[a-z]/, // any lowercase letter
    'C': /[A-z0-9]/, // any alphanumeric character
    'c': /[A-z]/ // any letter
  }
};

/**
 * Parse input against format
 * @param  {String} input Text from input field
 * @param  {String} mask  Mask input from v-mask
 * @return {String}       Masked input
 */
Masker.parse = function(input, mask) {
  let o = '';

  for (let i = 0, x = 1; x && i < mask.length; i++) {
    let c = input.charAt(i);
    let m = mask.charAt(i);

    if(typeof this.flags[m] === 'undefined') o += m;
    else if(this.flags[m].test(c)) o += c;
    else x = 0;
  }

  return o;
};

/**
 * Default Export (ES6 Module)
 */
export default {

  /**
   * Base install function for Vue.use()
   */
  install(Vue, options) {

    /**
     * Create new Vue directive (v-mask)
     */
    Vue.directive('mask', {

      /**
       * Bind Masker.parse() on @input of attached v-mask $el
       */
      bind() {
        this.handler = function() {
          this.el.value = Masker.parse(this.el.value, this.expression);
        }.bind(this);

        this.el.addEventListener('input', this.handler);
      },

      /**
       * Remove Masker.parse() bind on @input of attached v-mask $el
       */
      unbind() { this.el.removeEventListener('input', this.handler); }
    });

  }
}
