const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
      {
        id: 1,
        nome: "Camisa",
        qtd: 3,
        precoUnit: 3000
      },
      {
        id: 2,
        nome: "Bermuda",
        qtd: 2,
        precoUnit: 5000
      }
    ],
    imprimirResumoDoCarrinho: function () {
      let totalItens = 0;
      let totalAPagar = 0;
  
      this.produtos.forEach(produto => {
        totalItens += produto.qtd;
        totalAPagar += produto.qtd * produto.precoUnit;
      });
  
      console.log(`Cliente: ${this.nomeDoCliente}`);
      console.log(`Total de itens: ${totalItens} itens`);
      console.log(`Total a pagar: R$ ${(totalAPagar / 100).toFixed(2)}`);
    },
    addProdutoAoCarrinho: function (produto) {
      const produtoExistente = this.produtos.find(p => p.id === produto.id);
  
      if (produtoExistente) {
        produtoExistente.qtd += produto.qtd;
      } else {
        this.produtos.push(produto);
      }
    },
    imprimirDetalhes: function () {
      console.log(`Cliente: ${this.nomeDoCliente}\n`);
  
      this.produtos.forEach((produto, index) => {
        console.log(`Item ${index + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${(produto.qtd * produto.precoUnit / 100).toFixed(2)}`);
      });
  
      this.imprimirResumoDoCarrinho();
    },
    calcularTotalDeItens: function () {
      let totalItens = 0;
  
      this.produtos.forEach(produto => {
        totalItens += produto.qtd;
      });
  
      return totalItens;
    },
    calcularTotalAPagar: function () {
      let totalAPagar = 0;
  
      this.produtos.forEach(produto => {
        totalAPagar += produto.qtd * produto.precoUnit;
      });
  
      return totalAPagar;
    },
    calcularDesconto: function () {
      const totalItens = this.calcularTotalDeItens();
      const totalAPagar = this.calcularTotalAPagar();
  
      if (totalItens > 4) {
        const produtoMaisBarato = this.produtos.reduce((min, produto) => (produto.precoUnit < min.precoUnit ? produto : min));
        return produtoMaisBarato.precoUnit;
      } else if (totalAPagar > 10000) {
        return Math.floor(totalAPagar * 0.1);
      } else {
        return 0;
      }
    },
    imprimirResumo: function () {
      console.log(`Cliente: ${this.nomeDoCliente}`);
      console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
      console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar() - this.calcularDesconto()) / 100}`);
    }
  };
  
  // Testando as funções/métodos
  
  carrinho.imprimirResumoDoCarrinho();
  
  const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
  };
  
  carrinho.addProdutoAoCarrinho(novaBermuda);
  carrinho.imprimirResumo();
  
  const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
  };
  
  carrinho.addProdutoAoCarrinho(novoTenis);
  carrinho.imprimirResumo();
  
  carrinho.imprimirDetalhes();