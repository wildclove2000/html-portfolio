const mousecircle = document.querySelector('.mouse-circle');
const mousedot = document.querySelector('.mouse-dot');

// Mouse circle
const mouseCircleFn = (x,y) => {
    mousecircle.style.cssText = `top:${y}px;left:${x}px; opacity:1;`;
    mousedot.style.cssText = `top:${y}px;left:${x}px; opacity:1;`;
};document.body.addEventListener('mousemove',e=>{
   
    mouseCircleFn(e.clientX,e.clientY);
})
document.body.addEventListener('mouseleave',()=>{
    mousecircle.style.opacity = '0'
    mousedot.style.opacity = '0'

})
// End ofMouse circle