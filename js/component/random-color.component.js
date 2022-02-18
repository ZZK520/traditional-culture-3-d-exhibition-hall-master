/**
 * Set random color on material.
 */
AFRAME.registerComponent('random-color', {
  init: function () {
    this.getRandomColor=getRandomColor;
    this.el.setAttribute('material', 'color', this.getRandomColor());
    // console.log('inited random-color');
    // console.log('this.el.getAttribute material', this.el.getAttribute('material'));
  },
  
});
