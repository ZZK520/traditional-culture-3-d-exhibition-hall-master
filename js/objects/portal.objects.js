AFRAME.registerComponent("portal", {
    schema:{
        popup:{type:"string",default:".moving-zone"}
    },
    init: function () {
        this.el.addEventListener('collide', (evt) => {
            // 撞上portal的人
            // console.log('evt.detail.body.el', evt.detail.body.el);
            const targetEl = evt.detail.target.el;//portal
            const id = targetEl.getAttribute('id');//portal的id
 
            if (evt.detail.body.el.id != undefined && evt.detail.body.el.id == "player") {
                console.error('传送开启',this.data.popup);
                const popup = document.querySelector(this.data.popup);
                console.error('popup',popup);
                let close;
                if(this.data.popup==='.moving-zone'){//节日弹窗
                    app.$data.popupsId=id;//设置popupsId以切换弹窗内容
                    close=document.querySelector('.close');
                }else{//个人信息弹窗
                    close=document.querySelector('.close-infomations');
                    app.$data.userId=id;//设置userId以切换弹窗内容
                }
                showEle(popup);//显示弹窗
                close.addEventListener('click',function(){
                    console.error('clicking');
                    hideEle(popup);
                })
                
                // 20s后隐藏弹窗
                setTimeout(() => {
                    hideEle(popup);
                }, 20000);
            }
        });


    }
})


