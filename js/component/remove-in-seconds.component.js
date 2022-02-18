/* global AFRAME */
AFRAME.registerComponent('remove-in-seconds', {
  schema: {
    default: 6
  },
  init: function () {
    const self = this;
    const el = self.el;
    // setTimeout(this.destroy.bind(this), this.data * 1000);
    this.destroySelf = function (time) {
      setTimeout(() => {
        // console.log('el', el);
        // console.log('el.parentNode', el.parentNode);
        if (el.parentNode && el) {
          el.parentNode.removeChild(el);
          console.log(`removed in ${this.data} seconds`);
        }

      }, time * 1000);
    }
    this.destroySelf(this.data);
  },
});