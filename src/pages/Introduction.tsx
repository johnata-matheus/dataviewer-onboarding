import Sidebar from "../components/sidebar/Sidebar";
import Subtitle from "../components/Subtitle";
import Text from "../components/Text";
import Title from "../components/Title";

export default function Introduction() {
  const content = "Estamos muito entusiasmados em dar as boas-vindas a você como o mais novo desenvolvedor do Dataviewer! Sua chegada representa um momento especial para nossa equipe, pois acreditamos que suas habilidades, experiências e visão serão essenciais no desenvolvimento do projeto.";

  const dataviewer = `Dataviewer é uma ferramenta de análise de dados que apresenta informações relevantes para o professor e aluno, para contribuir com a implementação da educação 4.0. A plataforma digital fornece uma visão geral para o professor sobre o aprendizado dos seus alunos, via dashboard. Enquanto no ambiente do aluno são fornecidos feedbacks relacionados à assimilação do conteúdo e funcionalidades que estimulam o aprendizado de forma personalizada. Tudo isso em tempo real e de forma automatizada. <br><br>Para conhecer mais o projeto acesse o  <a href="https://drive.google.com/file/d/100Iw9kBtFx9xUHAqQ_LoQbSEVNAvu1oQ/view?usp=sharing" target="_blank">Link</a>.`;

  const start = "Para ajudá-lo a se integrar de forma rápida e eficiente, preparamos este guia de onboarding. Nele, você encontrará uma visão completa sobre como trabalhamos no Dataviewer. Este material abrange desde nossa arquitetura modular e o fluxo de trabalho que seguimos, até as ferramentas essenciais que utilizamos no dia a dia para o desenvolvimento, versionamento de código e demais tópicos.<br> Vamos lá!" 

  return (
    <div className="container-bg">
      <div className="container">
        <div>
          <Sidebar/>
        </div>
        <div className="content">
          <Title title='Bem-vindo'/>
          <Text text={content}/>

          <Subtitle subtitle="O Dataviewer"/>
          <Text text={dataviewer} html={true}/>

          <Subtitle subtitle="Como Começar"/>
          <Text text={start} html={true}/>
        </div>
      </div>
    </div>
  );
}