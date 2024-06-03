

// ----------------------images-----------------
function changeImages1(){


let ci = document.getElementById('deflt_images') ;
 if (ci){
ci.setAttribute("src","images/image-product-1.jpg") ;

 }

}
function changeImages2(){


let ci = document.getElementById('deflt_images') ;
 if (ci){
ci.setAttribute("src","images/image-product-2.jpg") ;

 }

}
function changeImages3(){


let ci = document.getElementById('deflt_images') ;
 if (ci){
ci.setAttribute("src","images/image-product-3.jpg") ;

 }

}
function changeImages4(){


let ci = document.getElementById('deflt_images') ;
 if (ci){
ci.setAttribute("src","images/image-product-4.jpg") ;

 }

}
// -----------------lightbox-------------------
function back(){
document.getElementById('lightbox').style.display ="none" ;

}

function enter(){
    document.getElementById('lightbox').style.display ="block" ;
    
}


let imagess = ['images/image-product-1.jpg' , 'images/image-product-2.jpg' , 'images/image-product-3.jpg', 'images/image-product-4.jpg']
   

let index =0;

const next = document.querySelector('.next');
const pre  = document.querySelector('.pre');
let slaidimg = document.getElementById('imagesboximg');

next.addEventListener('click' , nextclick)
pre.addEventListener('click' ,preclick)


function nextclick(){
        index = (index === (imagess.length - 1 )? 0 : index +1);
        slaidimg.setAttribute('src' ,imagess[index] )
}
function preclick(){
        index = (index === (imagess.length - 1 )? 0 : index +1);
        slaidimg.setAttribute('src' ,imagess[index] );
}
// =======-------------   cartcalculation  ------------------=======
let plus  = document.querySelector('.cplas');
let mines  = document.querySelector('.cmines');
plus.addEventListener('click',plusn);
mines.addEventListener('click',minesn);
let cartcounter = document.querySelector('.cartCounter').innerHTML ;
cartcounter = '0';
let p = 0;
function plusn(){
    p++;
    document.querySelector('.cartCounter').innerHTML = p;
    document.querySelector('.cartCount').innerHTML = p;
    document.querySelector('.equlprice').innerHTML = (p*125)+'.00';

}

function minesn(){
    if(p>0){
        p--;
        document.querySelector('.cartCounter').innerHTML = p;
        document.querySelector('.cartCount').innerHTML = p;
        document.querySelector('.equlprice').innerHTML = (p*125)+'.00';
    }
}

// ----------------cart--------------

function cartClick(){
    
    document.getElementById('cartClick').style.display = 'block';
    document.getElementById('close_cart').style.display = 'block';
    
    
}
function close_cart(){
    document.getElementById('cartClick').style.display = 'none';
    document.getElementById('close_cart').style.display = 'none';
    
}
let prodact = document.querySelector('.prodact');
let addcart = document.querySelector('.cartBtn');
let delprodact = document.querySelector('.delprodact');
addcart.addEventListener('click', onaddcart);
delprodact.addEventListener('click', delprodactt);
function onaddcart(){
    document.querySelector('.prodact').style.display = 'block' ;
    document.querySelector('.empty').style.display = 'none' ;
    document.querySelector('.delimg').style.display = 'block' ;
    document.querySelector('.Chekoutt').style.display = 'flex' ;
    document.querySelector('.delprodact').style.display = 'block' ;
}
function delprodactt(){
    document.querySelector('.prodact').style.display = 'none' ;
    document.querySelector('.empty').style.display = 'block' ;
    document.querySelector('.Chekoutt').style.display = 'none' ;
    document.querySelector('.delimg').style.display = 'none' ;
    document.querySelector('.delprodact').style.display = 'none' ;
}


