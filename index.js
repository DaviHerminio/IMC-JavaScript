function calculate() {
  const name = document.getElementById("name").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("resultado");
 

  if(name !== '' && height !== '' && weight !== ''){
    const resultInput = (weight / (height * height)).toFixed(2);

    let classificacao = "";

    if(resultInput < 18.5){
      classificacao = "abaixo do peso"
    } else if(resultInput < 25){
      classificacao = "com peso normal"
    } else if(resultInput < 30){
      classificacao = "com sobrepeso"
    } else if(resultInput < 40){
      classificacao = "com obesidade"
    } else if(resultInput > 40){
      classificacao = "com obesidade grave"
    }
  
    result.textContent = `${name} seu IMC é ${resultInput} e você está ${classificacao}`
    console.log(resultInput)

  } else{
    result.textContent = "Preencha todos os campos";
  }
}

