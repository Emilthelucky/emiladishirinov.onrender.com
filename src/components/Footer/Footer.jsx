import React from 'react'
import './Footer.css'

export const Footer = () => {
    const scrollToSection = (section) => {
        let scrollPosition
        switch (section) {
            case 'about':
                scrollPosition = window.innerWidth < 768 ? 780 : 750
                break
            case 'experience':
                scrollPosition = window.innerWidth < 768 ? 2080 : 1450
                break
            case 'projects':
                scrollPosition = window.innerWidth < 768 ? 4500 : 2370
                break
            case 'contact':
                scrollPosition = document.body.scrollHeight
                break
            default:
                scrollPosition = 0
        }
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
    }

    return (
        <div className="footer-container">
            <div className="footer-tabs">
                <button
                    onClick={() => scrollToSection('about')}
                    className="pointer"
                >
                    About
                </button>
                <button
                    onClick={() => scrollToSection('experience')}
                    className="pointer"
                >
                    Experience
                </button>
                <button
                    onClick={() => scrollToSection('projects')}
                    className="pointer"
                >
                    Projects
                </button>
                <button
                    onClick={() => scrollToSection('contact')}
                    className="pointer"
                >
                    Contact
                </button>
            </div>
            <p className="footer-paragraph">
                Copyright © 2024 Emil. All Rights Reserved.
            </p>
        </div>
    )
}
