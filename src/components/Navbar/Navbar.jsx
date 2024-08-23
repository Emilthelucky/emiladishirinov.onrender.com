import React, { useState } from 'react'
import './Navbar.css'

export const Navbar = () => {
    const [showTabs, setShowTabs] = useState(false)

    const scrollToContactInfo = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        })
    }

    const scrollToAbout = () => {
        const isMobile = window.innerWidth < 768
        const scrollPosition = isMobile ? 780 : 750
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
    }

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <div className="creator">
                    <p className="creator-p">
                        <span className="code-by">© Coded by Emil</span>
                        <span className="name">Adishirinov</span>
                    </p>
                </div>
            </div>
            <div className="tabs">
                <button className="tab pointer">Home</button>
                <button
                    className="tab pointer"
                    onClick={() => scrollToContactInfo()}
                >
                    Contact
                </button>
                <button className="tab pointer" onClick={() => scrollToAbout()}>
                    About
                </button>
            </div>
            <button
                className="toggle-btn"
                onClick={() => setShowTabs(!showTabs)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width={25}
                    height={25}
                >
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            </button>
            <div className={`tabs-dropdown ${showTabs ? 'show' : ''}`}>
                <button className="tab-drop pointer">Home</button>
                <button
                    className="tab-drop pointer"
                    onClick={() => scrollToContactInfo()}
                >
                    Contact
                </button>
                <button
                    className="tab-drop pointer"
                    onClick={() => scrollToAbout()}
                >
                    About
                </button>
            </div>
        </nav>
    )
}
