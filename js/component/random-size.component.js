AFRAME.registerComponent('random-size', {
    schema: {
        minRadius: {type:'number',default:1 },
        maxRadius: {type:'number',default:2 },
      },
    init: function () {
        const minRadius = this.data.minRadius;
        const maxRadius = this.data.maxRadius;
        // 或者不采用random-size，而是在random-position的时候就用设置scale
        const finalRadius = getRandomArbitrary(minRadius, maxRadius);
        this.el.setAttribute('geometry', {
            radius: finalRadius
        });
        // console.log('check geometry:this.el', this.el.getAttribute('geometry'));
    }
});