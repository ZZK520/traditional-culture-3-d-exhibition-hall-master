AFRAME.registerComponent("slogan", {
    init: function () {
            let textValue= this.el.getAttribute('text');
            console.log('textValue 1',textValue);
            const sloganInfo=this.el.getAttribute('sloganInfo');
            // this.el.setAttribute('text',{
            //     value:sloganInfo
            // })
             textValue= this.el.getAttribute('text');
            console.log('textValue 2',textValue);
    }
})


