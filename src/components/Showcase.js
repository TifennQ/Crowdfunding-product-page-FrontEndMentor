import React from 'react'
import mobileHero from '../images/image-hero-mobile.jpg'
import desktopHero from '../images/image-hero-desktop.jpg'

export const Showcase = ({isDesktop}) => {
    return (
        <>
            <section>
                <img src={`${isDesktop ? desktopHero : mobileHero}`} alt="Mobile Hero"/>
            </section>
        </>
    )
}
