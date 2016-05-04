let Masker = {};

Masker.parse = function(input, mask) {
  var output = '',
    data = input;

  for (let i = 0, x = 1; x && i < mask.length; i++) {
    let c = data.charAt(i);
    let m = mask.charAt(i);

    switch (mask.charAt(i)) {
      case '9': if(/\d/.test(c)) output += c; else x = 0; break;
      case 'A': if(/[A-Z]/.test(c)) output += c; else x = 0; break;
      case 'a': if(/[a-z]/i.test(c)) output += c; else x = 0; break;
      case 'c': if(/[a-z0-9]/i.test(c)) output += c; else x = 0; break;
      case 'X': output += c; break;
      default: output += m; break;
    }
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
