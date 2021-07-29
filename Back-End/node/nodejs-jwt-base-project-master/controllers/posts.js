const mockPosts = [
  {
    title: 'Quem é Lucca?',
    content: 'Lucca é o nenem do Gui-Alucard e é o mais fofo de todos!',
  },
  {
    title: 'Quem é Carla?',
    content: 'Carla é a super esposa do Gui-Alucard',
  },
  {
    title: 'Afinal, quem é Gui-Alucard então?',
    content: 'Gui-Alucard é o programador mais top do Brasil e isso resume muito bem ele.',
  },
  {
    title: 'Por quê Alucard?',
    content: 'Alucard é o nome do primeiro vampiro, citado em Hellsing. É um anime muito bom e que representa muito bem o que deveria ser um vampiro!',
  },
  {
    title: 'DÚVIDAS?',
    content: 'Agora, note uma coisa: quando formos utilizar a API com nosso front-end, como é que sabemos que estamos autenticados? Podemos fazer essa verificação no front-end e, caso a requisição de login retorne true, fazemos uma requisição para obter os posts. Mas e se alguém inspecionar as requisições do browser e descobrir o endpoint /api/post ? Essa pessoa vai poder acessar dados que não deveria. Além disso, se o usuário fechar o browser, terá que logar novamente toda vez que precisar usar a API? E se for um sistema de banco, em que só se pode ficar online por um determinado tempo, como saberemos que a sessão expirou? No back-end, ao chegar uma requisição para /api/posts , como fazemos para retornar somente os posts de quem requisitou? Se o acesso for a um recurso que requer um nível de autorização mais elevado, como fazemos para saber se a pessoa é, por exemplo, um admin? São MUITAS dúvidas, mas calma. É aí que o JWT entra. Agora vamos alterar um pouco nossa API para adicionar autenticação via JWT. No final, vamos poder saber se o usuário está de fato autenticado, quem essa pessoa é, setar um tempo de sessão para ela, permitir que ela utilize apenas uma autenticação para trafegar entre várias aplicações etc.'
  }
];

module.exports = (req, res, next) => {
  res.status(200).json({ mockPosts });
};
