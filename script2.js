
function contar(){
    var txini = window.document.querySelector('input#txtini');
    var ini = Number.parseFloat(txini.value);
    var txfim = window.document.querySelector('input#txtfim');
    var fim = Number.parseFloat(txfim.value);
    var txint = window.document.querySelector('input#txtint');
    var int = Number.parseFloat(txint.value);
    if(ini < fim){
        while(ini <= fim){
            result.innerHTML += `&#9758 ${ini} `
           ini = ini + int;
    }
    }else{
        while(ini >= fim){
            result.innerHTML += `&#9758 ${ini} `
           ini = ini - int;
        }
    }
}