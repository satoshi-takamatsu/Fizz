window.addEventListener('load', function(){
  const button = document.getElementById('button');

  button.addEventListener('click', function(e){
    e.preventDefault();

    const fizzInput = document.getElementById('fizz').value;
    const buzzInput = document.getElementById('buzz').value;
    const output = document.getElementById('output');
    output.innerHTML = '';

    const p = document.createElement('p');

    p.textContent = ' 【出力】 ';

    output.appendChild(p);

    function errorMessage() {
      const checker = document.createElement('p');
      checker.textContent = '整数値を入力してください';
      const div = document.querySelector('div');
      output.appendChild(checker);
    };

    if (isNaN(fizzInput) || isNaN(buzzInput)) {
      return errorMessage();
    };

    if ((fizzInput == 0) || (buzzInput == 0)) {
      return errorMessage();
    };

    if (fizzInput.match(/^-?[0-9]+\.[0-9]+$/) || buzzInput.match(/^-?[0-9]+\.[0-9]+$/)) {
      return errorMessage();
    };

    for (let i = 1; i < 100; i++) {
      let value = '';
      if (i % fizzInput === 0 && i % buzzInput === 0 ) {
        value = "FizzBuzz" + " " + i;
      } else if (i % fizzInput === 0) {
        value = "Fizz" + " " + i;
      } else if (i % buzzInput === 0) {
        value = "Buzz" + " " + i;
      } else {
        value = '';
      };

      const fizzbuzz = document.createElement('p');
      fizzbuzz.textContent = value;
      const div = document.querySelector('div');
      output.appendChild(fizzbuzz);
    };
  });
});