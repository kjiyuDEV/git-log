'use client'
import React, { useState } from 'react';

const Slidemenu = ({ hideMenu, setHideMenu }) => {
    const [menuClose, setMenuClose] = useState(false);
    // 메뉴 닫을 때 부드럽게 닫히기 위한 fn
    const handleClose = () => {
        setMenuClose(true)
        setTimeout(() => {
            setHideMenu(!hideMenu)
        },800)
    }
    
    return (
        <div className={`slide-menu ${ menuClose ? 'inactive': !hideMenu ? 'active' : ''}`}>
            <button onClick={() => handleClose()}>close</button>

        </div>
        
    );
};

export default Slidemenu;