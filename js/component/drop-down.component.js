AFRAME.registerComponent('drop-down', {
    schema:{
        velocity:{type:'number',default:1}
    },
    init: function () {
        this.dropDown = function (height) {
            this.el.object3D.position.y -= height;
        }
    },
    tick: function () {
        this.dropDown(this.data.velocity);
    },
    
});