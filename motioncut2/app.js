let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let mainDom = document.querySelector('.main');
let listItemDom = document.querySelector('.main .list');
let thumnailDom = document.querySelector('.main .thumnail');

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext =7000;
let runTimeOut;
let runAutoRun = setTimeout(() =>{
    nextDom.click();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.main .list .item')
    let itemThumnail = document.querySelectorAll('.main .thumnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumnailDom.appendChild(itemThumnail[0]);
        mainDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumnailDom.prepend(itemThumnail[positionLastItem]);
        mainDom.classList.add('prev');

    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        mainDom.classList.remove('next');
        mainDom.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runTimeOut = setTimeout(() =>{
        nextDom.click();
    }, timeAutoNext);

}