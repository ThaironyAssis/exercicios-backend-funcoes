const carro = {
    ligado: false,
    velocidade: 0,
    ligar() {
      if (carro.ligado) {
        console.log("Este carro já está ligado.");
      } else {
        carro.ligado = true;
        console.log(`Carro ligado. Velocidade: ${carro.velocidade}.`);
      }
    },
    desligar() {
      if (!carro.ligado) {
        console.log("Este carro já está desligado.");
      } else {
        carro.ligado = false;
        carro.velocidade = 0;
        console.log(`Carro desligado. Velocidade: ${carro.velocidade}.`);
      }
    },
    acelerar() {
      if (!carro.ligado) {
        console.log("Não é possível acelerar um carro desligado.");
      } else {
        carro.velocidade += 10;
        console.log(`Carro ligado. Velocidade: ${carro.velocidade}.`);
      }
    },
    desacelerar() {
      if (!carro.ligado) {
        console.log("Não é possível desacelerar um carro desligado.");
      } else {
        carro.velocidade -= 10;
        console.log(`Carro ligado. Velocidade: ${carro.velocidade}.`);
      }
    }
  };
  
  // Executar os métodos na ordem especificada
  carro.desligar();
  carro.ligar();
  carro.ligar();
  carro.acelerar();
  carro.acelerar();
  carro.desacelerar();
  carro.desligar();
  carro.acelerar();
  carro.desacelerar();