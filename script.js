const body = document.querySelector('body');
const formulario = document.querySelector('form');
const botonEstilo1 = document.getElementById('botonEstilo1');
const botonEstiloAltoContraste = document.getElementById('botonEstiloAltoContraste');

botonEstilo1.addEventListener('click', function() {
    body.className = 'bg-light text-dark'; 
    
    formulario.className = 'p-4 border border-secondary bg-white text-dark rounded'; 
    
});



botonEstiloAltoContraste.addEventListener('click', () => {
    body.className = 'bg-dark text-white'; 
    formulario.className = 'p-4 border border-light'; 
});
