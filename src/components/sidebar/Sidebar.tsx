import SidebarItem from "./components/SidebarItem";
import introducaoIcon from '../../assets/introducao.svg';
import softwaresIcon from '../../assets/softwares.svg';
import execucaoIcon from '../../assets/execucao.svg';
import fluxoIcon from '../../assets/fluxo.svg';
import desafiosIcon from '../../assets/desafios.svg';

export default function Sidebar() {
  return (
    <div style={{ display: 'grid', gap: '10px' }}>
      <SidebarItem name="Introdução" icon={introducaoIcon} to="/" />
      <SidebarItem name="Softwares" icon={softwaresIcon} to="/softwares" />
      <SidebarItem name="Execução" icon={execucaoIcon} to="/execution" />
      <SidebarItem name="Fluxo" icon={fluxoIcon} to="/workflow" />
      <SidebarItem name="Desafios" icon={desafiosIcon} to="/challenges" />
    </div>
  );
}