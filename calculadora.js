const display = document.getElementById('display');
let currentInput = '';
let lastValue = '';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if(value === 'C') currentInput = '';
        else if(value === 'CE') currentInput = currentInput.slice(0, -1);
        else if(value === '⌫') currentInput = currentInput.slice(0, -1);
        else if(value === '=') {
            try {
                let expr = currentInput.replace(/×/g,'*').replace(/÷/g,'/').replace(/,/g,'.');
                currentInput = eval(expr).toString().replace('.',',');
            } catch { currentInput = 'Erro'; }
        }
        else if(value === 'x²') currentInput = (eval(currentInput)**2).toString().replace('.',',');
        else if(value === '√') currentInput = Math.sqrt(eval(currentInput)).toString().replace('.',',');
        else if(value === '1/x') currentInput = (1/eval(currentInput)).toString().replace('.',',');
        else if(value === '+/-') currentInput = (eval(currentInput)*-1).toString().replace('.',',');
        else if(value === '%') currentInput = (eval(currentInput)/100).toString().replace('.',',');
        else currentInput += value;

        display.value = currentInput;
    });
});
