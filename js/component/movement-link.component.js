AFRAME.registerComponent('movement-link', {
    schema:{
        id:{type:'string',default:'#player'},
        position:{
            type: "vec3", default: {
                x: 0, y: 0.5, z: 3
            }
        },
        rotation:{
            type: "vec3", default: {
                x: 0, y: 0, z: 0
            }
        }
    },
    init: function () {
        this.el.object3D.position.set(this.data.position.x, this.data.position.y, this.data.position.z);
        this.tick = AFRAME.utils.throttleTick(this.tick, 10, this);
        this.target=document.querySelector(this.data.id);
        this.originalPosition=this.data.position;
        this.originalRotation=this.data.rotation;
        // console.log('this.target',this.target);
        // console.log('targetPosition',targetPosition);
    },
    tick: function () {
        // // 设置旋转
        // let targetRotation=this.target.object3D.rotation;
        // let xRotation=this.originalRotation.x+targetRotation.x;
        // let yRotation=this.originalRotation.y+targetRotation.y;
        // let zRotation=this.originalRotation.z+targetRotation.z;
        // this.el.object3D.rotation.set(xRotation, yRotation/2, zRotation);
        
        // // 设置位置
        // let targetPosition=this.target.object3D.position;
        // let xPosition=this.originalPosition.x+targetPosition.x;
        // let yPosition=this.originalPosition.y+targetPosition.y;
        // let zPosition=this.originalPosition.z+targetPosition.z;
        // this.el.object3D.position.set(xPosition, yPosition, zPosition);
        
    },
    
});