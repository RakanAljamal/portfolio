import React, { useEffect, useState } from 'react';
import styles from "../Navbar/styles.module.scss";
import { AiOutlineMenu } from "react-icons/all";
import { slide as Menu } from 'react-burger-menu'

const menuStyles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#ffffff'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '36px',
        width: '36px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        top: 0,
        overflow: 'none'
    },
    bmMenu: {
        background: 'rgba(34,34,34,0.95)',
        padding: '43px',
        fontSize: '1.15em',
        overflow: 'hidden'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#fff',
        padding: 0,
        fontSize: 42,
    },
    bmItem: {
        display: 'block',
        outline: 'none',
        margin: '20px 0'

    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0)'
    }
}

const SidebarMenu = ({ dark }) => {
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        if ( !document?.documentElement) {
            return
        }
        document.documentElement.style.overflow = openMenu ? 'hidden' : 'auto'

        return () => {
            document.documentElement.style.overflow = 'auto';
        }
    }, [openMenu])
    const handleMenuChange = (state) => {
        setOpenMenu(state.isOpen);
    }
    return <div className={ styles.mobileNavbar }>
        <AiOutlineMenu style={ { color: dark ? '#222' : null } } onClick={ () => setOpenMenu(state => !state) }/>
        <Menu
            isOpen={ openMenu }
            onStateChange={ handleMenuChange }
            customBurgerIcon={ false }
            styles={ menuStyles }
            width={ '300px' }>
            <a className={ styles.lightContact } style={ { fontSize: 26 } }>Intro</a>
            <a className={ styles.lightContact } style={ { fontSize: 26 } }>Skills</a>
            <a className={ styles.lightContact } style={ { fontSize: 26 } }>Projects</a>
        </Menu>


    </div>

}
export default SidebarMenu;