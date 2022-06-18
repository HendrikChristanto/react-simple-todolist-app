import React from "react";
import { BiAddToQueue } from "react-icons/bi";

import "./header.css";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__title">
          <h2>TODO LIST</h2>
        </div>
        <div className="btn header__btn" onClick={props.handleOpenModal}>
          <BiAddToQueue size="1.2rem" />
          <span>ADD TASK</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
