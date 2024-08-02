function ParaBinario() {
    let decpbi = document.getElementById('decpbi').value
    let binario = ''
    let resto
  
    while (decpbi > 0) {
      resto = decpbi % 2
      binario = resto + binario
      decpbi = Math.floor(decpbi / 2)
    }
    let res1 = document.getElementById('res1')
    res1.innerHTML = `O número em binário é: ${binario}`
  }
  function ParaHexadecimal() {
    let decphe = document.getElementById('decphe').value;
    let hexadecimal = '';
    let resto;
  
    while (decphe > 0) {
      resto = decphe % 16;
      decphe = Math.floor(decphe / 16);
    
      if (resto < 10) {
        hexadecimal = resto + hexadecimal;
      } else {
        hexadecimal = String.fromCharCode(resto + 55) + hexadecimal;
      }
    }
  
    let res2 = document.getElementById('res2');
    res2.innerHTML = `O número em hexadecimal é: ${hexadecimal}`;
  }
  