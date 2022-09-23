import React from 'react';
import './css/commonHeader.scss';
import { Link } from 'react-router-dom';

function CommonHeader(props) {
    return (
<header id="CommonHeader" className='header'>
  <section className='header_container'>
    <div className='container'>
    <img className="container_logo" src="img/adidas_logo.png" alt="main logo"  />
    <div className='container_menu'>
        <div className='menu'>
            <div className='menu_gender'>
            <Link className='menu_gender_men' to="/">MEN</Link>
            <Link className='menu_gender_women' to="/">WOMEN</Link>
            <Link className='menu_gender_kids' to="/">KIDS</Link>
            </div>
            <div className='menu_type'>
            <Link className='menu_type_sports' to="/">SPORTS</Link>
            <Link className='menu_type_brands' to="/">BRANDS</Link>
            <Link className='menu_type_sale' to="/">SALE</Link>
            </div>
        </div>
    </div>
    <div className='container_info'>
      <div className='info'>
        <div className='info_search'>search</div>
        <div className='info_mypage'>mypage</div>
        <div className='info_basket'>basket</div>
      </div>
    </div>
    </div>
  </section>
</header>

    );
}

export default CommonHeader;