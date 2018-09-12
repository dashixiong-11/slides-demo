let n = 1
setInterval(() => {
    enter(getImage(n+1))
    recurrence(getImage(n)).one('transitionend',function(){
        $(this).removeClass('leave')
    })
    n++
}, 2000)
// setTimeout(() => {
    
//     $('.imgs>img:nth-child(3)').addClass('current')
//     $('.imgs>img:nth-child(2)').addClass('leave').removeClass('current').one('transitionend',function(){
//         $(this).removeClass('leave')
//     })
// }, 4000)
// setTimeout(() => {
    
//     $('.imgs>img:nth-child(1)').addClass('current')
//     $('.imgs>img:nth-child(3)').removeClass('current').addClass('leave').one('transitionend',function(){
//         $(this).removeClass('leave')
//     })
// }, 6000);
// setTimeout(() => {
//     $('.imgs>img:nth-child(2)').addClass('current')
//     $('.imgs>img:nth-child(1)').removeClass('current').addClass('leave').one('transitionend',function(){
//         $(this).removeClass('leave')
//     })
// }, 8000);
// setTimeout(() => {
//     $('.imgs>img:nth-child(3)').addClass('current') 
//     $('.imgs>img:nth-child(2)').removeClass('current').addClass('leave').one('transitionend',function(){
//         $(this).removeClass('leave')
//     })
// }, 10000);
function x(n){
    if(n>3){
        n = n%3
        if(n===0){
            n = 3
        }
    }
    return n
}
function recurrence($node){
    $node.addClass('leave').removeClass('current')
    return $node
}
function enter($node){
    $node.addClass('current')
}
function getImage(n){
    return $(`.imgs>img:nth-child(${x(n)})`)
}