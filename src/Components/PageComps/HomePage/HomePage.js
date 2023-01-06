import React from 'react';
import Header from '../../SharedComps/Header/Header'
import Footer from '../../SharedComps/Footer/Footer'
import WeHelpYou from './WeHelpYou';
import LookingFor from './LookingFor';


export default function HomePage() {
    return(
    <div>
        <Header />
        <WeHelpYou />
        <LookingFor />
        <Footer />
    </div>
    )
}