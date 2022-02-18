AFRAME.registerComponent("character", {
    schema: {
        run: { type: 'boolean', default: false },
        rSpeed: { type: 'number', default: 0 },
        speed: { type: 'number', default: 0 },
        acceleration: { type: 'number', default: 0.01 },
        deceleration: { type: 'number', default: 0.02 },
        maxSpeed: { type: 'number', default: 0.1 },
        dirRotation: { type: 'number', default: 0 },
    },
    init: function () {
        const carData = this.data;
        // 人物动作监听
        document.body.addEventListener('keydown', function (e) {
            switch (e.key) {
                case 'w': // w
                    carData.run = true;
                    break;
                case 'a': // a
                    carData.rSpeed = 0.06;
                    break;
                case 'd': // d
                    carData.rSpeed = -0.06;
                    break;
             
            }
            // console.error('carData', carData);
        });

        document.body.addEventListener('keyup', function (e) {
            switch (e.key) {
                case 'w': // w
                    carData.run = false;
                    break;
                case 'a': // a
                    carData.rSpeed = 0;
                    break;
                case 'd': // d
                    carData.rSpeed = 0;
                    break;

            }
        });
        // 设置tick频率
        this.tick = AFRAME.utils.throttleTick(this.tick, 50, this);

    },
    tick: function () {
        const carData = this.data;

        if (carData.run) {
            carData.speed += carData.acceleration;
            if (carData.speed > carData.maxSpeed) {
                carData.speed = carData.maxSpeed;
            }
        } else {
            carData.speed -= carData.deceleration;
            if (carData.speed < 0) {
                carData.speed = 0;
            }
        }
        let speed = -carData.speed;
        // console.log('speed', speed);

        // if (speed === 0) {
        //     return;
        // }

        carData.dirRotation += carData.rSpeed;
        // console.log('carData.dirRotation',carData.dirRotation)
        let rotation = carData.dirRotation;
        let speedX = Math.sin(rotation) * speed;
        let speedZ = Math.cos(rotation) * speed;

        const entityEl=this.el;
        entityEl.object3D.rotation.y =rotation;
        entityEl.object3D.position.z+=speedZ;
        entityEl.object3D.position.x+=speedX;

    }
})


