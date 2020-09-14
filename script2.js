
function contar(){
    var txini = window.document.querySelector('input#txtini');
    var ini = Number.parseFloat(txini.value);
    var txfim = window.document.querySelector('input#txtfim');
    var fim = Number.parseFloat(txfim.value);
    var txint = window.document.querySelector('input#txtint');
    var int = Number.parseFloat(txint.value);
    if(txini.value.length == 0 || txfim.value.length == 0 || txint.value.length == 0){
        result.innerHTML = '[ERRO] Existem campos não preenchidos'
    }else if( int == 0){
        result.innerHTML = 'Por favor insira um valor diferente de "0" no campo Intervalo'
    }else{
        if(ini < fim){
            while(ini <= fim){
                result.innerHTML += `${ini} \u{27A1} `;
               ini = ini + int;
        }
        }else{
            while(ini >= fim){
                result.innerHTML += `${ini} \u{27A1} `;
               ini = ini - int;
            }
        }
        result.innerHTML += `\u{2694}`;
    }
}