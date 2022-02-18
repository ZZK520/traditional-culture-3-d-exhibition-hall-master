/* global AFRAME, THREE */
AFRAME.registerComponent('spawn-in-circle', {
  schema: {
      radius: { type: 'number', default: 3 }
  },

  init: function () {
      // 获取相机当前位置
      const el = this.el;
      const center = el.getAttribute('position');

      const angleRad = this.getRandomAngleInRadians();
      const circlePoint = this.randomPointOnCircle(this.data.radius, angleRad);
      // 以center未圆心，circlePoint为半径画圆，取其坐标设置为el坐标
      const worldPoint = { x: circlePoint.x + center.x, y: center.y, z: circlePoint.y + center.z };
      el.setAttribute('position', worldPoint);

      const angleDeg = angleRad * 180 / Math.PI;
      const angleToCenter = -1 * angleDeg + 90;
      const rotationStr = '0 ' + angleToCenter + ' 0';
      el.setAttribute('rotation', rotationStr);
  },
  // 0~2PI的角度
  getRandomAngleInRadians: function () {
      return Math.random() * Math.PI * 2;
  },
  // 以圆形随机分布
  randomPointOnCircle: function (radius, angleRad) {
      x = Math.cos(angleRad) * radius;
      y = Math.sin(angleRad) * radius;
      return { x: x, y: y };
  }
});