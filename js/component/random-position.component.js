
AFRAME.registerComponent('random-position', {
    schema: {
        startAngel: { type: 'number', default: 0 },
        endAngel: { type: 'number', default: 360 },
        minRadius: { type: 'number', default: 25 },
        maxRadius: { type: 'number', default: 30 },
        // x,z坐标和中间的标语适配
        centerPoint: {
            type: "vec3", default: {
                // x: 3.91995, y: 1.6, z: 10.11278
                x: 0, y: 1.6, z: 0

            }
        }
    },
    init: function () {
        const centerPoint = this.data.centerPoint,
            startAngel = this.data.startAngel,
            endAngel = this.data.endAngel,
            minRadius = this.data.minRadius,
            maxRadius = this.data.maxRadius;
        this.getRandomArbitrary = getRandomArbitrary;
        this.el.setAttribute('position', this.getRandomPosition_circle(centerPoint, startAngel, endAngel, minRadius, maxRadius));

    },
    getRandomPosition_circle: function (centerPoint, startAngel, endAngel, minRadius, maxRadius) {
        const randomRadius = getRandomArbitrary(minRadius, maxRadius);
        const randomAngel = getRandomArbitrary(startAngel, endAngel) / (Math.PI * 2);
        const position_x = centerPoint.x + randomRadius * Math.cos(randomAngel);
        const position_z = centerPoint.z + randomRadius * Math.sin(randomAngel);
        const position_y = centerPoint.y;
        const res = {
            x: position_x,
            y: position_y,
            z: position_z
        }
        // console.log('res', res);
        return res;
    }
});

