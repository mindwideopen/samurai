import React from "react";
import s from './Header-component.module.css'

const Header = () => {
  
    return (
      <header className={s.header}>

          <div className={s.logo}>
                <img className={s.nyr} src="https://cms.nhl.bamgrid.com/images/photos/330479418/binary-file/raw.jpg" alt=""/>
            </div>

      </header>
    );
    
  
  
  }

  export default Header;
