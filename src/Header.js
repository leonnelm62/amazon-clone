/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return (
        <div className='header'>
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className='header__option'>
                    <span className='header__optionLineOne'>Bonjour Alvan</span>
                    <span className='header__optionLineOne'>Se connecter</span>
                </div>
                <div className='header__option'>
                    <span className = 'header__optionLineOne' >Retours</span> 
                    <span className = 'header__optionLineOne' >& Commandes</span>
                </div>
                <div className='header__option'>
                    < span className = 'header__optionLineOne' > Testez</span> 
                    <span className = 'header__optionLineOne' >Prime</span>
                </div>
            </div>
        </div>
    )
}

export default Header
