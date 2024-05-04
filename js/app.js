let totalCarrinho = 0;

limpar();

function adicionar(){
  
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorProduto = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    let preco = quantidade * valorProduto;

    if (!produto || produto.trim() === "") {
      alert("Selecione um produto válido.");
      return;
  }

  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Insira uma quantidade válida.");
    return;
}

    let listaCarrinho = document.getElementById("lista-produtos");
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;

  totalCarrinho = totalCarrinho + preco;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$ ${totalCarrinho}`;
  document.getElementById("quantidade").value = 0;

}

function limpar(){

    totalCarrinho = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0"; 

}