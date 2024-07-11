import './Footer.css'

export const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-tabs">
                    <button>About</button>
                    <button>Experience</button>
                    <button>Projects</button>
                    <button>Contact</button>
                </div>
                <p className="footer-paragraph">
                    Copyright © 2024 Emil. All Rights Reserved.
                </p>
            </div>
        </>
    )
}
