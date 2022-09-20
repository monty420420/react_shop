import React from 'react';
import './css/commonHeader.scss';

function CommonHeader(props) {
    return (
<header id="CommonHeader" className='header'>
  <section className='header_container'>
    <div className='container'>
    <div className='container_logo'>hi</div>
    <div className='container_menu'>
        <div className='menu'>
            <div className='menu_men'>men</div>
            <div className='menu_women'>women</div>
            <div className='menu_event'>event</div>
        </div>
    </div>
    </div>
  </section>
</header>

    );
}

export default CommonHeader;