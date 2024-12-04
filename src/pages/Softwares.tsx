import Sidebar from "../components/sidebar/Sidebar";
import Subtitle from "../components/Subtitle";
import Text from "../components/Text";
import Title from "../components/Title";

export default function Softwares() {
  const content = `O Dataviewer é um sistema de porte pequeno até o momento, para o desenvolvimento acontecer na sua máquina local serão necessários um conjunto de softwares que estão listados nessa seção.`;

  const node = `O Dataviewer é desenvolvido com o framework NestJS, utilizando o <a href="https://nodejs.org/pt" target="_blank">NodeJS 22.11.0 (LTS)</a> para garantir compatibilidade e estabilidade. Recomendamos instalar essa versão específica do Node e, caso ache necessário ter mais de uma versão do Node em sua máquina de maneira fácil, experimente usar o <a href="https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating" target="_blank">nvm</a>. <br><br>

  Para o gerenciamento de dependências, usamos o Yarn. Caso ainda não tenha configurado, consulte a <a href="https://classic.yarnpkg.com/en/docs/install#debian-stable" target="_blank"> documentação oficial </a> para instalação e configuração.`;

  const git = `Utilizamos o <a href="https://classic.yarnpkg.com/en/docs/install#debian-stable" target="_blank"> git </a> para o versionamento de código do projeto. Para realizar contribuições e trabalhar em equipe, você vai precisar tê-lo configurado em seu ambiente.`

  const mongo = `O Dataviewer utiliza o <a href="https://www.mongodb.com/pt-br/docs/manual/installation/" target="_blank"> MongoDB </a> como banco de dados principal. Dessa forma,  você pode instalá-lo localmente ou utilizar via Docker. Para usar pelo Docker, é necessário ter o Docker instalado em sua máquina. O projeto já inclui um script no arquivo docker-compose.yml que facilita a configuração do banco de dados sem necessidade de instalação manual. Escolha a opção que melhor atende ao seu ambiente de desenvolvimento.<br><br>
  
  Instale também o <a href="https://www.mongodb.com/products/tools/compass" target="_blank"> MongoDB Compass </a> para auxiliar nas operações e debug envolvendo o banco de dados.`;

  const docker = `O uso do <a href="https://www.docker.com/" target="_blank"> Docker </a> no Dataviewer é opcional, mas pode ser uma alternativa prática caso você não queira instalar o MongoDB diretamente na sua máquina. Para isso instale o <a href="https://www.docker.com/" target="_blank"> Docker </a> e <a href="https://docs.docker.com/compose/install/" target="_blank"> Docker compose </a>.<br><br>
  
  O sistema está configurado principalmente para o MongoDB, mas, se você tiver mais familiaridade com Docker, é possível configurar todo o ambiente, incluindo Node.js, MongoDB e outras dependências, diretamente em containers, sem a necessidade de instalar nada localmente.`

  return (
    <div className="container-bg">
      <div className="container">
        <div>
          <Sidebar/>
        </div>
        <div className="content">
          <Title title='Softwares'/>
          <Text text={content} />
          <div>
            <Subtitle subtitle='nodeJS'/>
            <Text text={node} html={true}/>
          </div>
          <div>
            <Subtitle subtitle='Git'/>
            <Text text={git} html={true}/>
          </div>
          <div>
            <Subtitle subtitle='MongoDB'/>
            <Text text={mongo} html={true}/>
          </div>
          <div>
            <Subtitle subtitle='Docker'/>
            <Text text={docker} html={true}/>
          </div>
        </div>
      </div>
    </div>
  );
}