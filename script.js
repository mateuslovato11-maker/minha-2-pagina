 const botoes = document.querySelectorALL("button");

botoes.forEach(function (botao) {
   let curtiu = false;
   botao.addEventListener("click", botaoClicado);
   function botaoClicado() {
      let texto = botao.querySelector("span");
      if (curtiu === false){
        texto.textContent++;
        curtiu = true;
      } else{ 
         texto.textContent--;
         curtiu = false;
      }
   } 
})
    
const btnTemaEscuro = document.querySelector("btn-tema-escuro");

  btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
   const corpoPagina = document.body;
   if(corpoPagina.classList.contains("tema-escuro")) {
      corpoPagina.classList.remove("tema-escur0");
   } else{
      corpoPagina.classlist.add("tema-escuro");
   }
}


