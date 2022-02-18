// 将element添加到scene中
function addElementToScene(scene, element) {
  scene.appendChild(element);
}

// 返回 min<=x<max间的数
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// 返回随机RGB颜色
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// 返回平面上以centerPoint为中点,角度分布在startAngel与endAngel间，半径分布在minRadius和maxRadius中间的随机点坐标
function getRandomPosition_circle(centerPoint, startAngel, endAngel, minRadius, maxRadius) {
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


function reset() {
  // let finishDlgElm = document.querySelector("#finishDialog")
  // finishDlgElm.setAttribute("style", "display: none");
  location.reload();
}


function hideEle(el) {
  el.setAttribute("style", "display: none");
}
function showEle(el) {
  el.setAttribute("style", "display: block");
}




