// Array para guardar os nomes adicionados
const nomes = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim(); // Pega e limpa espaços

  if (nome === '') {
    alert('Por favor, digite um nome válido.');
    return; // Sai da função sem adicionar
  }

  nomes.push(nome); // Adiciona o nome no array
  input.value = ''; // Limpa o campo de texto
  input.focus(); // Foca de novo no input para facilitar digitar o próximo
  atualizarLista(); // Atualiza a lista visível
  limparResultado(); // Limpa o resultado do sorteio se tiver algum
}

// Função para atualizar a lista de nomes na tela
function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Limpa a lista antes de atualizar

  nomes.forEach((nome) => {
    const li = document.createElement('li');
    li.textContent = nome;
    lista.appendChild(li);
  });
}

// Função para limpar a área do resultado do sorteio
function limparResultado() {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
}

// Função para sortear um amigo da lista
function sortearAmigo() {
  if (nomes.length === 0) {
    alert('Adicione pelo menos um nome para sortear.');
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * nomes.length);
  const nomeSorteado = nomes[indiceSorteado];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = ''; // Limpa resultado anterior

  const li = document.createElement('li');
  li.textContent = `O amigo secreto sorteado foi: ${nomeSorteado}`;
  resultado.appendChild(li);
}

