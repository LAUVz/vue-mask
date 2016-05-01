let Masker = {
  flags: {
    '9': /[0-9]/,
    'A': /[A-Z]/,
    'a': /[a-z]/,
    'c': /[A-z]/
  }
};

Masker.parse = function(input, format) {
  format = format.split('');
  input = input.split('');

  let output = '';

  for (var i = 0; i < input.length; i++) {
    let c = input[i];

    if(output.length === format.length) break;


    if(c.match(this.flags[format[i]]) && typeof this.flags[format[i]] !== 'undefined') {
      output += c;
    } else if(typeof this.flags[format[i]] === 'undefined') {
      output += format[i];
    } else break;
  }

  return output;
};

export default {
  install(Vue, options) {

    Vue.directive('mask', {
      bind() {
        this.handler = function() {
          this.el.value = Masker.parse(this.el.value, this.expression);
        }.bind(this);

        this.el.addEventListener('input', this.handler);
      },
      unbind() { this.el.removeEventListener('input', this.handler); }
    });

  }
}
