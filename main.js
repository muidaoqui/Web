let bool=true;
const inputClass = document.querySelector('input.inputClass');
const btnClick = document.querySelector('button.btnClass');

btnClick.addEventListener('click', function() {
    const input = document.querySelector('input.inputClass').value;
    document.getElementById('result').innerHTML = input;
}); 
