import React from 'react';
import styles from './Header.module.css'

export default function Header() {
    return(<>
    <div className={styles.MainHeaderBox}>
        
        {/*Logo Div*/}
        <div className={styles.LogoBox}>
            <img src='' alt="Logo" className={styles.LogoImage}></img>
        </div>

        {/*NavBar Links Div*/}
        <div className={styles.NavLinks}>
            <ul className={styles.NavList}>
                <li className={styles.NavListItems}>Home</li>
                <li className={styles.NavListItems}>Services</li>
                <li className={styles.NavListItems}>Tenants</li>
                <li className={styles.NavListItems}>News</li>
                <li className={styles.NavListItems}>About Us</li>
            </ul>
        </div>

        {/*Login Button Div*/}
        <div className={styles.LoginButtonBox}>
            <button className={styles.LoginButton}>Login</button>
        </div>
    </div>
    </>)
}