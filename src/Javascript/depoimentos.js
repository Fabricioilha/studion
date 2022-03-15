
let depoimentos = document.querySelector(".depoimentos");
let qt = document.querySelectorAll(".depoimento").length;
let checkbox = document.querySelector(".checkbox");
let posicao = 0;

for(let i = 0; i < (qt -1); i++){
    if(i == 0){
        checkbox.innerHTML = `<div class="box box_active"></div>`;
    }
    checkbox.innerHTML += `<div class="box"></div>`;
}

let box_active = document.querySelector(".box_active");
let box = document.querySelectorAll(".box");

depoimentos.style.width = `calc(1140px * ${qt})`;


function vai(){
    box[posicao].classList.remove("box_active");
    if(posicao == (qt -1 )){
        posicao = 0;
        mudamargem(posicao);
    }else{
        posicao++;
        mudamargem(posicao);
    }
}
function volta(){
    box[posicao].classList.remove("box_active");
    if(posicao == 0){
        posicao = (qt -1) ;
        mudamargem(posicao);
    }else{
        posicao--;
        mudamargem(posicao)
    }
}
function mudamargem(n){
    depoimentos.style.marginLeft = `calc(-1140px * ${n})`;
    box[n].classList.add("box_active")
}
