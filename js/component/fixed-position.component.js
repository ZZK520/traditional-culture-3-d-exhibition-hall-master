/* global AFRAME */
AFRAME.registerComponent('fixed-position', {
    schema: {
        centerPoint: {
            type: "vec3", default: {
                // x: 3.91995, y: 1.6, z: 10.11278
                x: 0, y: 1.6, z: 0

            }
        }
    },
    init: function () {
        // Set up the tick throttling.
        this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
      },
      tick: function (time, delta) {
        // console.log("delta " + delta);
        if(this.el.object3D.position.y != this.data.centerPoint.y){
            console.error('seting');
            this.el.object3D.position.y=this.data.centerPoint.y;
        }
      }
});