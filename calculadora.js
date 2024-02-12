
function suma(){
    var numero1 = parseFloat(document.getElementById('numero1').value); //estamos obteniendo el elemento de nuestro pagina pag que tenga el id numero1 y lo almacenamos en la variable numero1
    var numero2 = parseFloat(document.getElementById('numero2').value); //estamos obteniendo el elemento de nuestro pagina pag que tenga el id numero2 y lo almacanamos en la variable numero2
    var resultado = numero1 + numero2;  //estamos sumando las variables numero1 y numero2 y lo almacenamos en la variable resultado
    document.getElementById('resultado').value = resultado; //estamos obteniendo el elemento de nuestro pagina pag que tenga el id resultado y le asignamos el valor de la variable resultado
}


const btnSwitch = document.querySelector('#switch'); //estamos obteniendo el elemento de nuestro pagina pag que tenga el id switch y lo almacenamos en la variable btnSwitch

btnSwitch.addEventListener('click', () => { //estamos agregando un evento click a la variable btnSwitch
    document.body.classList.toggle('dark'); //estamos obteniendo el elemento body de nuestro pagina pag y le estamos agregando la clase dark
    btnSwitch.classList.toggle('active'); //estamos obteniendo el elemento de nuestro pagina pag que tenga el id switch y le estamos agregando la clase active
});
