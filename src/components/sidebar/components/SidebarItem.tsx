import { NavLink } from 'react-router-dom';
import styles from './sidebarItem.module.css';

interface SidebarItemProps {
  name: string;
  icon: string;
  to: string;
}

export default function SidebarItem({ name, icon, to }: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${styles.sidebarItem} ${isActive ? styles.active : ""}`
      }
    >
      <img src={icon} alt={`${name} icon`} className={styles.icon} />
      {name}
    </NavLink>
  );
}
