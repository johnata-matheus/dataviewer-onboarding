import Sidebar from "../components/sidebar/Sidebar";
import Text from "../components/Text";
import Title from "../components/Title";
 
export default function Execution() {
  const content = `Nesta etapa, você aprenderá como executar o sistema localmente em seu computador. Primeiro, acesse o GitHub, faça um <strong>git clone</strong> do repositório e tenha o projeto configurado na sua máquina. Em seguida, navegue até a pasta backend e na raiz do projeto crie um arquivo chamado <strong>.env</strong> e preencha-o com as informações abaixo:`;

  const codeBlock = `
  NODE_ENV=development
  DATABASE_HOST=mongodb://root:12345678@localhost:27017
  DATABASE_NAME=dataviewert1`;

  const test = `Depois, crie um arquivo adicional chamado <strong>.env.test</strong>, que será responsável pelas configurações do banco de dados de teste. Use o seguinte conteúdo:`;

  const codeBlockTest = `
  NODE_ENV=test
  DATABASE_HOST=mongodb://root:12345678@localhost:27017
  DATABASE_NAME=dataviewer_test`;

  const textBase = `Após configurar os arquivos .env e .env.test, execute o comando  <strong>yarn install</strong> para instalar as dependências do projeto.
  Certifique-se de que as configurações de conexão com o banco de dados nos arquivos .env e .env.test estão corretas.`;

  const docker = `Para subir o container do MongoDB, execute o comando <strong>docker-compose up -d</strong>. Depois disso, inicie a aplicação com o comando <strong>yarn start:dev</strong>. Assim, o sistema estará rodando localmente em sua máquina.`;

  return (
    <div className="container-bg">
      <div className="container">
        <div>
          <Sidebar/>
        </div>
        <div className="content">
          <Title title='Execução Local'/>
          <Text text={content} html={true}/>
          <pre>
            <code>{codeBlock}</code>
          </pre>

          <Text text={test} html={true}/>
          <pre>
            <code>{codeBlockTest}</code>
          </pre>

          <Text text={textBase} html={true}/>
          <Text text={docker} html={true}/>
        </div>

      </div>
    </div>
  );
}