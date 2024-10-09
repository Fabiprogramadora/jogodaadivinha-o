let numeroSecreto;
let tentativa = 0;

function gerarnumeroAleatorio(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            numeroSecreto = Math.floor(Math.random()*100)+1;
            resolve(numeroSecreto);
        },1000);
    });
}
function verificarPalpite(palpite){
    return new promise((resolve,reject) =>{
        tentativa++;
        if(palpite < 1 || palpite > 100){
            reject("Por favor digite um número de 1 a 100");
        }else if(palpite === numeroSecreto){
            resolve("Parabéns, você acertou o número!!!");
        } else if(palpite<numeroSecreto){
            resolve("Muito baixo! Tente novamente.");
        }else{
            resolve("Muito alto! Tente novamente")
        }
    });
}
async function iniciarJogo() {
    await gerarnumeroAleatorio();
    const botaoEnviar = document.getElementsByid("Enviar");
    const inputPalpite = document.getElementById("palpite");
    const resultado = document.getElementById("resultado");
    const tentativaDisplay = document.getElementById("tentativas");

    botaoEnviar.addEventlistener("click",async()=>{
        try {
            const palpite = parseInt (inputPalpite.value);
            const mensagem = await verificarPalpite(palpite);
            resultado.textContent = mensagem;
            tentativaDisplay.textContent = `Tentativas: ${tentativa}`;

            // Limpa o campo de palpite
            inputPalpite.value = "";

            //Reinicia o jogo se o usuário acertar
            if (mensagem.includes("acertou")) {
                tentativas = 0;
                resultado.textContent += "O jogo será reiniciado!";
                await gerarnumeroAleatorio();
                tentativaDisplay.textContent = erro;
            }
        } catch (erro) {
            resultado.textContent = erro; 
        }
        
    });
}
            
//inicia o jogo ao carregar a página
window.onload = iniciarJogo; 