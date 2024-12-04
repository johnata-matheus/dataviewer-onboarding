import Sidebar from "../components/sidebar/Sidebar";
import Subtitle from "../components/Subtitle";
import Text from "../components/Text";
import Title from "../components/Title";
 
export default function Workflow() {
  const content = "Nesta seção, você encontrará uma introdução detalhada à arquitetura do sistema e ao fluxo de trabalho utilizado no projeto. Essa visão geral permitirá que você compreenda como estruturamos e organizamos nossa solução, abordando tanto a divisão modular do sistema quanto o uso do GitFlow para gerenciar o ciclo de desenvolvimento.";

  const system = `O sistema é organizado de maneira modular, onde cada funcionalidade é representada por um módulo específico.<br><br>

  Um módulo é composto por:<br>
  <ul>
    <li><strong>Controller</strong>: Responsável por definir os endpoints da API, processar as requisições recebidas, validar os dados e delegar a lógica de negócios ao service.</li>
    <li><strong>Service</strong>: Implementa a lógica de negócios do módulo, aplicando regras específicas e interagindo com o repositório para acessar ou manipular dados no banco.</li>
    <li><strong>Repository</strong>: Atua como a camada de persistência de dados, realizando operações no banco de dados, como consultas, inserções, atualizações e exclusões.</li>
    <li><strong>Schemas</strong>: Representam os modelos de dados utilizados no sistema, servindo para definir a estrutura e os tipos dos documentos armazenados no banco de dados.</li>
    <li><strong>Module</strong>: Centraliza a configuração do módulo, integrando o controller, o service e o repository, garantindo que eles funcionem corretamente dentro do sistema.</li>
  </ul>
  Além desses arquivos principais, o módulo pode conter pastas auxiliares:<br>
  <ul>
    <li><strong>DTO</strong>: Contém os Data Transfer Objects, usados para validar e estruturar os dados transferidos entre as camadas do sistema, garantindo consistência e integridade.</li>
    <li><strong>Test</strong>: Inclui os testes do módulo, sejam unitários, para verificar funcionalidades específicas, ou de ponta a ponta (e2e), para validar o comportamento completo do sistema, simulando cenários reais de uso.</li>
    <li><strong>Mocks</strong>: Armazena simulações de dependências externas usadas durante os testes, permitindo isolar o comportamento do código testado.</li>
  </ul>
  Essa abordagem permite uma manutenção mais simples, maior escalabilidade e facilita a colaboração entre desenvolvedores, pois cada módulo pode ser trabalhado de forma independente.`;

  const gitflow = `O projeto utiliza um fluxo de trabalho baseado no GitFlow para organizar o desenvolvimento e garantir um ciclo de vida eficiente do código. Essa abordagem define um conjunto de branches e um fluxo bem estabelecido para o gerenciamento de versões e funcionalidades.<br><br>

  O nosso fluxo Gitflow é composto por:<br>
  <ul>
    <li><strong>Main</strong>: Branch principal destinada ao ambiente de produção. Apenas código estável e testado é integrado a essa branch.</li>
    <li><strong>Dev</strong>: Branch utilizada como ambiente de testes. Ao realizar merges nela, o deploy é automaticamente disparado no ambiente de homologação para validação das funcionalidades.</li>
    <li><strong>Feature</strong>: Branches criadas a partir da <strong>Main</strong> para o desenvolvimento de novas funcionalidades. Essas branches devem seguir a nomenclatura padrão: <strong>feature/DV-111-mongo-local</strong>, onde "111" é o identificador da tarefa e "mongo-local" é um resumo descritivo. Após a conclusão do desenvolvimento, as branches <strong>Feature</strong> são integradas à branch <strong>Dev</strong> para testes e homologação.</li>
  </ul>
 Quando uma feature é concluída, ela é integrada à branch <strong>Dev</strong>, acionando automaticamente o processo de deploy no ambiente de teste. Após a validação bem-sucedida, é criado um <strong>Pull Request</strong> direcionado à branch <strong>Main</strong>, onde a funcionalidade passa por um code review. Somente após a aprovação, o merge é realizado, liberando a feature para o ambiente de produção.`;
  
  return (
    <div className="container-bg">
      <div className="container">
        <div>
          <Sidebar/>
        </div>
        <div className="content">
          <Title title='Fluxo de Trabalho'/>
          <Text text={content}/>

          <Subtitle subtitle="Sistema"/>
          <Text text={system} html={true}/>

          <Subtitle subtitle="Gitflow"/>
          <Text text={gitflow} html={true}/>
        </div>
      </div>
    </div>
  );
}