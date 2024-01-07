$('.totoro').on('click', function(){
    anime({
    targets: '.totoro',
    translateX: '200px',
    duration: 2000,
    easing: 'easeOutBounce',
    scale: 0.5,
    loop: true
})
})

$('.fire').on('click', function(){
    anime({
    targets: '.fire',
    translateX: '200px',
    translateY: '500px',
    duration: 2000,
    easing: 'easeOutBounce',
    scale: 1.5,
    loop: true
})
})

$('.chernushka').on('click', function(){
    anime({
    targets: '.chernushka',
    translateX: '200px',
    rotate: '180deg',
    duration: 2000,
    delay: anime.stagger(200),
    easing: 'easeOutBounce',
    scale: 0.5,
    loop: true
})
})
