function remSize() {
    var dWidth = document.documentElement.clientWidth || window.innerWidth
    if(dWidth>=750){
        dWidth=750
    }
    if(dWidth<=320){
        dWidth=320
    }
    //750px-->1rem=100px,320px-->1rem=50px
    document.documentElement.style.fontSize = (dWidth/7.5)+'px'
    //字体大小
    document.querySelector('body').style.fontSize = 0.3+'rem'
}
remSize()
//窗口发生改变调用函数
window.onresize = function(){
    remSize()
}