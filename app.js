window.addEventListener('DOMContentLoaded',calculator);

const options = ['*', '/', '+', '-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']; // all keys
const specialKeys = ['*', '/', '+', '-'] //special function keys

function calculator(){
    document.title = "JavaScript Calculator";

    let decimal = false; //decimal sign
    let evaluation = false; //so we can use decimal sign again if it's after using a special key && is also used to disable "=" sign if the special key has been pressed 

    const container = document.createElement('div');
    container.classList.add('container');
    container.style.maxWidth = '600px';
    container.style.margin = 'auto';
    document.body.appendChild(container);

    const outputCalculator = document.createElement('input');
    outputCalculator.setAttribute('type','text');
    outputCalculator.classList.add('output');
    outputCalculator.style.width = "100%";
    outputCalculator.style.lineHeight = '50px';
    outputCalculator.style.fontSize = '3em';
    outputCalculator.style.textAlign = 'right';
    container.appendChild(outputCalculator);


    const keysArea = document.createElement('div');
    keysArea.classList.add('keys-area');
    keysArea.style.width = '100%';
    container.appendChild(keysArea);

    options.forEach(function(val){
        btnMaker(val,addOutput);
    })

    btnMaker('=', resultOutput);
    btnMaker('C', clearOutput);

    function colorOutput(value){
        outputCalculator.style.border = value + ' 1px solid';
        outputCalculator.style.color = value;
    }

    function resultOutput(){
        colorOutput('black');

        if (outputCalculator.value===""){
            colorOutput('red');
         } 
         else if (evaluation){
            colorOutput('red');}
         else{
            outputCalculator.value = eval(outputCalculator.value);
        }
        decimal = outputCalculator.value.includes('.');
    }

    function clearOutput(){
        colorOutput('black');
        outputCalculator.value = "";   
    }

    function btnMaker(txt, myFunction){
        let btn = document.createElement('button');
        btn.setAttribute('type','button');
        btn.style.width = '23%';
        btn.style.lineHeight = '50px';
        btn.style.margin = "1%";
        btn.style.fontSize = '2em';
        btn.val = txt,
        btn.textContent = txt;
        btn.addEventListener('click', myFunction);
        keysArea.appendChild(btn);
    }

    function addOutput(e){
        colorOutput('black');
        let char = e.target.val;

        if (char == '.'){
            if (decimal){
                char = '';
                colorOutput('red');
            } else {
                decimal = true;
            }
        }

        evaluation = specialKeys.includes(char);

        if (evaluation){
            decimal=false;
        }
        // outputCalculator.value = outputCalculator.value + char;
        outputCalculator.value += char; //adding whatever the value of the character that's been pressed
    }






}

