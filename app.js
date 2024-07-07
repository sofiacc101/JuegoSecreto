let numeroSecreto=0;
let intentos=0;
let listaNumeros=[];
let numeromaximo=10;
F_inicializarJuego();
//let parrafo

function F_verififcarIntento(){
    let numerodeUsusario=parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto===numerodeUsusario){
        F_asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1)? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('id_intentar').setAttribute('disabled',false);
    }
    else{
        if(numerodeUsusario<numeroSecreto){
            F_asignarTextoElemento('p',"El numero secreto es mayor");
        }
        else{
            F_asignarTextoElemento('p',"El numero secreto es menor");
        }
        intentos++;
        F_limpiarCaja();
    }

   /* console.log(numerodeUsusario);
    console.log(typeof(numerodeUsusario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numerodeUsusario===numeroSecreto);/// el triple igual no solo compara el valore sino en tipo de dato

        //alert("hola bebe");*/

    return;
}
function F_reiniciarJuego(){
    //limpiar caja
    //valores inicializarlos
    //parrafos
    F_inicializarJuego();
    //document.getElementById('id_intentar').setAttribute('disabled',false);
    document.getElementById('reiniciar').setAttribute('disabled',true);
    document.getElementById('id_intentar').removeAttribute('disabled');

    //

}

function F_limpiarCaja(){
    document.querySelector('#valorUsuario').value='';

}

function F_asignarTextoElemento(elemento,texto){
    let titulo=document.querySelector(elemento);//trae el elemento
    titulo.innerHTML=texto;
    return;
}
function F_generarNumeroAleatoreo(){
    let var_numero=Math.floor(Math.random()*numeromaximo)+1;
    console.log(var_numero);
    console.log(listaNumeros);
    // si el numero genereado esta en la lista
    if(listaNumeros.length==numeromaximo){
        F_asignarTextoElemento('p','Ya se sortearon todos los nùmeros posibles');
    }else{        
        if(listaNumeros.includes(var_numero)){
            return F_generarNumeroAleatoreo();
        }else{
            listaNumeros.push(var_numero);
            return var_numero;
        }}
}
function F_inicializarJuego(){
    F_asignarTextoElemento('h1',"Juego del Nùmero selector");
    F_limpiarCaja();
    F_asignarTextoElemento('p',`Indica un número del 1 al ${numeromaximo}`);
    numeroSecreto=F_generarNumeroAleatoreo();
    intentos=1;
    console.log(numeroSecreto);

}

