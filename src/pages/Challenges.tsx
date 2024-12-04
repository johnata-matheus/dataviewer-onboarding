import Sidebar from "../components/sidebar/Sidebar";
import Subtitle from "../components/Subtitle";
import Text from "../components/Text";
import Title from "../components/Title";

 
export default function Challenges() {
  const content = "Os exercícios a seguir não vão para produção, mas devem passar pelo processo de code review para exercitar também nosso processo de entrega de tarefas. Para isso, crie uma nova branch para cada desafio.";

  const rota = `Neste exercício, vamos criar uma nova rota no módulo questions. O objetivo é criar uma rota que retorna uma mensagem simples, como "Olá mundo!", para praticar a estrutura básica de uma rota no projeto.
  <ul>
    <li>No modulo de <strong>questions</strong>, abra o arquivo <strong>questions.controller.ts</strong> e adicione um novo método chamado <strong>helloWord</strong>. Esse método deve retornar uma resposta simples, como "Hello Word!".
    </li>
    <li>Adicione o <a href='https://docs.nestjs.com/controllers' target='_blank'>decorator</a> <strong>@Get('hello-word')</strong> acima do método criado para que ele esteja disponível através de uma requisição HTTP GET.</li>
    <li>Perceba que no <strong>@Controller('questions')</strong> é especificado uma rota base para todas as rotas deste controller. Isso significa que todas as rotas definidas nos métodos terão o prefixo <strong>/questions</strong> antes da rota especificada. Assim, no seu navegador, faça uma requisição para a rota que você criou, acessando: <strong>http://localhost:3333/questions/hello-word</strong>. Verifique se a resposta está sendo retornada corretamente. </li>
  </ul>`

  const edit = `O módulo QuestionsByDifficulty é responsável por gerenciar as questões de acordo com o nível de dificuldade. Vamos apenas mudar algumas coisas a seguir.
  <ul>
    <li>Adicione um novo campo do tipo boolean ao schema, chamado: <strong>is_active</strong>.</li>
    <li>Nos Dtos, adicione o novo campo.</li>
    <li>Após adicionar o campo ao DTO, utilize a rota <strong>POST</strong> para criar uma nova questão. Use ferramentas como Insomnia, Postman ou qualquer método que permita enviar uma requisição para a rota, passando a nova propriedade no corpo da requisição.</li>
    <li>No banco de dados, verifique se foi corretamente criada.</li>
    <li>No service, crie um novo método <strong>findByIdAndActive</strong> que busca uma questão por question_id e is_active = true.</li>
    <li>No controller, crie uma nova rota que lida com o método criado no service e retorna a questão se ela for encontrada e estiver ativa.</li>
    <li>Acesse sua rota e veja se a mesma está retornando corretamente apenas as questões ativas.</li>
    <li>Use como exemplo o próprio módulo de questions.</li>
  </ul>`;

  const module = `No Dataviewer, um módulo é a forma mais completa de se implementar uma nova feature. Vamos implementar uma nova integração com a api do Github com o objetivo de buscar por repositórios usando apenas o endpoint: <strong>https://api.github.com/search/repositories?q=react</strong> para simplificar.
  <ul>
    <li>Na pasta <strong>modules</strong>, crie um novo módulo chamado <strong>github</strong>. Dentro dele, adicione o arquivo <strong>github.module.ts</strong>. Nesse arquivo, você não precisará de imports adicionais, apenas configure os campos <strong>controllers</strong> e <strong>providers</strong> para posteriormente incluir o <strong>GithubController</strong> e o <strong>GithubService</strong>, respectivamente. Você pode usar o arquivo <strong>questions.module.ts</strong> como referência para estruturar o módulo corretamente.
    </li>
    <li>Adicione o modulo criado ao <strong>app.module.ts</strong>.</li>
    <li>Crie e implemente o <strong>GithubService</strong> apenas com um método para buscar repositórios baseado no nome e que retorna uma <strong>Promise</strong>.</li>
    <li>Uma abordagem prática e direta para realizar a requisição é utilizar a função nativa <strong>fetch()</strong>.</li>
    <li>Crie e implemente o <strong>GithubController</strong>. No construtor, adicione o parâmetro <strong>private githubService: GithubService</strong>, que será automaticamente injetado pelo mecanismo de injeção de dependências do NestJS, eliminando a necessidade de criar uma instância manualmente. Adicione também um método que recebe uma string de busca como parâmetro e retorna a <strong>Promise</strong> do método correspondente criado no <strong>GithubService</strong>.</li>
    <li>Acesse a rota criada e verifique se os repositórios corretos são retornados.</li>
    <li>Escreva testes automatizados(unitário, E2E) para o githubService e githubController.</li>
    <li>Para os testes unitários use mocks para simular a reposta da API do Github.</li>
  </ul>`;

  const final = `<strong>Parabéns</strong>, você concluiu sua jornada nesse documento. Ainda existe muito a aprender, mas isso virá com as entregas graduais de tarefas reais que você fará a partir de agora.
`;

  return (
    <div className="container-bg">
      <div className="container">
        <div>
          <Sidebar/>
        </div>
        <div className="content">
          <Title title='Desafios'/>
          <Text text={content}/>

          <Subtitle subtitle='Rota simples'/>
          <Text text={rota} html={true}/>

          <Subtitle subtitle='Edite um CRUD'/>
          <Text text={edit} html={true}/>

          <Subtitle subtitle='Módulo com integração'/>
          <Text text={module} html={true}/>
          <Text text={final} html={true}/>
        </div>
      </div>
    </div>
  );
}