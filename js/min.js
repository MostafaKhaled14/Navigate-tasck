
var items = document.querySelectorAll('.item');
var row = document.querySelector('.row');
var images = document.querySelectorAll('img');
var btnClose = document.querySelector('#btnClose');
var btnNext = document.querySelector('#btnNext');
var btnPrevious = document.querySelector('#btnPrevious');
var aleert = document.querySelector('.aleert');
var img = document.querySelector('#aleert img');
var layer = document.querySelector('#layer');


function getImg(e){
    if(e.target === btnClose){
        return;
    }
    var parentOfImg = e.target.closest('.item');
    if(parentOfImg){
        aleert.classList.remove('d-none');
        layer.classList.remove('d-none');
    }else{return}
    var srcDynamic =  parentOfImg.firstElementChild.getAttribute('src');
    img.setAttribute('src', srcDynamic)
}

function nextEle(e){
    var newSrc;
    var nextsrc;
    var firstSrc = e.target.closest('.row').querySelectorAll('.item')[0].firstElementChild.getAttribute('src');
    var lastSrc = e.target.closest('.row').querySelectorAll('.item')[items.length-1].firstElementChild.getAttribute('src');
    for (let i = 0; i < items.length; i++) {
        newSrc = e.target.closest('.row').querySelectorAll('.item')[i].firstElementChild;
        if(newSrc.getAttribute('src') === img.getAttribute('src') && newSrc.getAttribute('src') !== lastSrc){
            nextsrc = newSrc.closest('.col-6').nextElementSibling.querySelector('.w-100').getAttribute('src');
            img.setAttribute('src', nextsrc)
            return;
        }else if(newSrc.getAttribute('src') === img.getAttribute('src') && newSrc.getAttribute('src') === lastSrc){
            img.setAttribute('src', firstSrc);
            return;
        }
    }
}

function PreviousEle(e){
    var newSrc;
    var previousSrc;
    var lastSrc = e.target.closest('.row').querySelectorAll('.item')[items.length-1].firstElementChild.getAttribute('src');
    var firstSrc = e.target.closest('.row').querySelectorAll('.item')[0].firstElementChild.getAttribute('src');
    for (let i = 0; i < items.length; i++) {
        newSrc = e.target.closest('.row').querySelectorAll('.item')[i].firstElementChild;
        if(newSrc.getAttribute('src') === img.getAttribute('src') && newSrc.getAttribute('src') !== firstSrc){
            previousSrc = newSrc.closest('.col-6').previousElementSibling.querySelector('.w-100').getAttribute('src');
            img.setAttribute('src', previousSrc)
            return;
        }else if(newSrc.getAttribute('src') === img.getAttribute('src') && newSrc.getAttribute('src') === firstSrc){
            img.setAttribute('src', lastSrc);
            return;
        }
    }
}

function closeAlert(){
    aleert.classList.add('d-none');
    layer.classList.add('d-none');
}

function displayLayer(e){
    layer.classList.add('d-none');
    aleert.classList.add('d-none');
}

row.addEventListener('click', getImg);
btnClose.addEventListener('click', closeAlert);
btnNext.addEventListener('click', nextEle);
btnPrevious.addEventListener('click', PreviousEle);
layer.addEventListener('click', displayLayer);