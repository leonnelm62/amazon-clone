/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

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
                    <span className='header__optionLineTwo'>Se connecter</span>
                </div>
                <div className='header__option'>
                    <span className = 'header__optionLineOne'>Retours</span> 
                    <span className = 'header__optionLineTwo'>& Commandes</span>
                </div>
                <div className='header__option'>
                    < span className = 'header__optionLineOne'> Testez</span> 
                    <span className = 'header__optionLineTwo'>Prime</span>
                </div>

                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionTwo header__basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
