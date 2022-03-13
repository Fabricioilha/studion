let slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slide").length;
slider.style.width = `calc(100vw * ${slides})`
let posicao = 0;

function vai(){
    if(posicao == (slides -1 )){
        posicao = 0;
        mudamargem(posicao);
    }else{
        posicao++;
        mudamargem(posicao);
    }
}
function volta(){
    if(posicao == 0){
        posicao = (slides -1) ;
        mudamargem(posicao);
    }else{
        posicao--;
        mudamargem(posicao)
    }
}
function mudamargem(n){
    slider.style.marginLeft = `calc(-100vw * ${n})`;
}

//setInterval((vai),5000)