let divs = document.querySelectorAll(".evento");
let num = 0;

function expandir(n){
    let active = document.querySelector(".active");
    if (active == null){
        num = n;
        open(n);
    }else{
        let div_pai = active.parentNode;
        div_pai.style.backgroundColor = "";
        active.classList.remove("active");
        if(num == n){
            div_pai.style.backgroundColor = "";
            active.classList.remove("active");
        }else{
            open(n);
            num = n;
        }
    }
}

function open(n){
    let div_evento = divs[n];
    div_evento.style.backgroundColor = "#f5f5f5";
    div_evento.querySelector(".evento_desc").classList.add("active");

}