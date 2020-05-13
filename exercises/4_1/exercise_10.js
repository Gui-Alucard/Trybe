let custoDoProduto = 100;
let valorDeVenda = 130;

if (custoDoProduto > 0 && valorDeVenda > 0) {
  let lucroLiquido = (valorDeVenda - custoDoProduto) * (1 - 0.2) * 1000;
  console.log(lucroLiquido);
} else {
  console.log("Mensagem de erro");
 } 
