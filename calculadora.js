
function suma(){
    var numero1 = parseFloat(document.getElementById('numero1').value); //estamos obteniendo el elemento de nuestro pagina pag que tenga el id numero1
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = numero1 + numero2;
    document.getElementById('resultado').value = resultado;
}


const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});
