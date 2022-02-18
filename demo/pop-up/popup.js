var moveForce = 30; // max popup movement in pixels
var rotateForce = 20; // max popup rotation in deg
const content =" 春节（Spring Festival），即中国农历新年，俗称新春、新岁、岁旦等，口头上又称过年、过大年。春节历史悠久，由上古时代岁首祈岁祭祀演变而来。万物本乎天、人本乎祖，祈岁祭祀、敬天法祖，报本反始也。春节的起源蕴含着深邃的文化内涵，在传承发展中承载了丰厚的历史文化底蕴。在春节期间，全国各地均有举行各种庆贺新春活动，带有浓郁的各地域特色"

/**
 * #### 弹窗组件
 * @param {Object} assets 渲染相关内容 
 * - cover 封面
 * - title 节日名称
 * - time 节日时间
 * - content 节日简介
 * - link 百科链接
 * @return {Function} open 打开弹窗
 * @return {Function} close 关闭弹窗
 */
class Popup {
  constructor(assets = {
    cover: './imgs/ex-spring.jpg',
    title: '春节',
    time: '一月初一',
    content: content,
    link: 'https://baike.baidu.com/item/%E6%98%A5%E8%8A%82/136876'
  }) {
    this.moveForce =30;
    this.rotateForce = 20;
    this.cover = assets.cover;
    this.title = assets.title;
    this.time = assets.time;
    this.content = assets.content;
    this.link = assets.link;

    this.render()
    this.control()
  }
  
  // 渲染器
  render () {
    const popbody =  ` <div class="popup-content">
    <img class="cover" src="${this.cover}" alt="">
      <div class="popup-text">
        <div class="header-title">
          <h4>${this.title}</h4>
          <h5>${this.time}</h5>
        </div>
        <div class="content">
          <p class="content-text">
            ${this.content}
          </p>
          <a href="${this.link}" class="link">查看更多</a>
        </div>
      </div>
  </div>`
    
    const body = document.createElement('div')
    body.innerHTML = popbody
    $('.popup').append(body)
  }

  // 控制器
  control () {
    const _this = this
    $(document).mousemove(function(e) {
        var docX = $(document).width();
        var docY = $(document).height();
        
        var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
        var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
        
        var rotateY = (e.pageX / docX * _this.rotateForce*2) - rotateForce;
        var rotateX = -((e.pageY / docY * _this.rotateForce*2) - rotateForce);
        
        $('.popup')
            .css('left', moveX+'px')
            .css('top', moveY+'px')
            .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
    });
  }

  // 显示弹窗
  open () {
    $('.moving-zone').addClass('open')
  }

  // 关闭弹窗
  close () {
    $('.moving-zone').removeClass('open')
  }
} 

// demo
let isOpen = false;
const popup = new Popup()
$('#btn').click(function () {
  if (isOpen) {
    popup.close()
    this.innerHTML = 'open'
    isOpen = false
  } else {
    popup.open()
    this.innerHTML = 'close'
    isOpen = true
  }
})