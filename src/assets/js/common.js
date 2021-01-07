import FastClick from './fastclick';

window.addEventListener('load', function(){
  FastClick.attach(document.body);
}, false);

//禁止多指
document.documentElement.addEventListener('touchmove', function(e){
  if(e.touches.length > 1){
    e.preventDefault();
  }
}, false)

//设置根节点字体大小
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
