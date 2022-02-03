import React from 'react';
import Sidebar from '../Sidebar/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import * as styles from './index.module.css';

const Header: React.FC<{ onSidebarToggle: () => void }> = ({ onSidebarToggle }) => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <nav className={styles.navigation}>
            <ul>
              <li onClick={onSidebarToggle}><FontAwesomeIcon icon={faBars} /></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header;