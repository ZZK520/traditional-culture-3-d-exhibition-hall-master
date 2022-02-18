// 等待场景加载完毕后，移除蒙层
const myScene = document.querySelector('#my-scene');
/**
 * hasLoaded不知为何不起效果，所以添加了5秒必然移除蒙层的功能
 */
if (myScene.hasLoaded) {
    console.error('hasLoaded',hasLoaded);
  run();
} else {
    myScene.addEventListener('loaded', run);
}
// 5s后移除蒙层
setTimeout(() => {
    run();
}, 5000);
function run () {
    let loader = document.querySelector("#blockerWrapper");
    console.error('loader',loader);
    loader.setAttribute('style',"display:none");
    console.error('加载完毕');
}