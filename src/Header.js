import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import { useStateValue } from "./StateProvider";


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.forex.academy/wp-content/uploads/2020/11/complete_look_non_fungible_tokens_NFT.jpg"
        />
      </Link>
      
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Profile</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      
    </div>
  );
}

export default Header;
