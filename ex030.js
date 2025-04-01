let resultadoDiv = document.getElementById("resultado");
let numeros = "";
let i = 1;
do{
    if(i%5==0){
        numeros += i + "<br>";
    }
}while(i<=100);
resultadoDiv.innerHTML = numeros; 