var body = document.querySelector('body');
var cursor = document.querySelector('#cursor');

body.addEventListener('mousemove', function(a){
    gsap.to('#cursor', {
        x: a.x,
        y: a.y
    })
})