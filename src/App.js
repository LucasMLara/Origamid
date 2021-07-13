const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    {nome: 'Notebook', preco: 'R$ 2500'},
    {nome: 'Geladeira ', preco: 'R$ 3000'},
    {nome: 'Smartphone', preco: 'R$ 1500'},
    {nome: 'Guitarra', preco: 'R$ 3500'},
  ],
  ativa: false,
};

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    {nome: 'Notebook', preco: 'R$ 2500'},
    {nome: 'Geladeira ', preco: 'R$ 3000'},
    {nome: 'Smartphone', preco: 'R$ 1500'},
  ],
  ativa: true,
};

function App() {
  const { cliente, idade, compras, ativa } = luana;

  const total = compras.map(({preco}) => +preco.replace('R$ ', '')).reduce(( acc, value) => acc + value, 0)
  // Método '+' substitui o Number(com toda a string que será convertida para número dentro dos parênteses);
  // Método 'replace' substitui o que está escrito no primeiro parâmetro pelo segundo parâmetro.

  return (
    <>
    <p>Nome: {cliente}</p>
    <p>Idade: {idade}</p>
    <p>Situação: <span style = {{color: ativa? 'green': 'red'}}>{ativa ? 'Ativa' : 'Inativa'}</span></p>
    <p>Total Gasto: R$ {total}</p>
    {total > 10000 && <p>Você está gastando demais</p>}
    </>
  )
}

export default App;
