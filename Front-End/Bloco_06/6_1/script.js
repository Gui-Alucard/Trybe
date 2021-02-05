// Define o nosso select na variável stateSelect
const stateSelect = document.getElementById('form-state');
const stateList = [
  ['Acre - AC'],
  ['Alagoas - AL'],
  ['Amapá - AP'],
  ['Amazonas - AM'],
  ['Bahia - BA'],
  ['Ceará - CE'],
  ['Distrito Federal - DF'],
  ['Espírito Santo - ES'],
  ['Goiás - GO'],
  ['Maranhão - MA'],
  ['Mato Grosso - MT'],
  ['Mato Grosso do Sul - MS'],
  ['Minas Gerais - MG'],
  ['Pará - PA'],
  ['Paraíba - PB'],
  ['Paraná - PR'],
  ['Pernambuco - PE'],
  ['Piauí - PI'],
  ['Rio de Janeiro - RJ'],
  ['Rio Grande do Norte - RN'],
  ['Rio Grande do Sul - RS'],
  ['Rondônia - RO'],
  ['Roraima - RR'],
  ['Santa Catarina - SC'],
  ['São Paulo - SP'],
  ['Sergipe - SE'],
  ['Tocantins - TO']
];

function geraOption() {
  // Faz um loop em todos itens do stateList
  for (item of stateList) {
    // Define a tag createOption
    const createOption = document.createElement('option');
    // Cria o elemento option como filho da lista
    const adicionaElement = stateSelect.appendChild(createOption);
    // Atribui a cada filho um valor da stateList
    adicionaElement.innerText = item[0];
    adicionaElement.value = item[1];
  }
}

stateSelect.addEventListener('click', geraOption);
