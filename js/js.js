function mais1 () {
    me.textgol.value = parseInt(me.textgol.value)+1;
}
function menos1 () {
   var dec = parseInt(me.textgol.value);
   if (dec<=0){
        me.textgol.value=0;
   }else{
        me.textgol.value=dec-1;
   }
}

function reset(){
    me.textgol.value=0;  
}

function compra(){

    alert('Compra efetuada com sucesso!');
}

function teste(){

    teste.teste1.value
}