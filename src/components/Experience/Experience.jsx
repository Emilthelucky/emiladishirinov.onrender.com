import './Experience.css'

export const Experience = () => {
    const Fronttechnologies = [
        { name: 'React', level: 'Intermediate' },
        { name: 'Redux/Toolkit', level: 'Basic' },
        { name: 'Context API', level: 'Experienced' },
        { name: 'Vue.js', level: 'Intermediate' },
        { name: 'Vuex/Pinia', level: 'Intermediate' },
        { name: 'Next.js', level: 'Basic' },
        { name: 'Typescript', level: 'Basic' },
        { name: 'Tailwind CSS', level: 'Basic' },
        { name: 'Chakra UI', level: 'Intermediate' },
        { name: 'Material UI', level: 'Intermediate' },
        { name: 'Responsive', level: 'Intermediate' },
        { name: 'Figma', level: 'Basic' },
    ]

    const Backtechnologies = [
        { name: 'Node.js', level: 'Experienced' },
        { name: 'Express.js', level: 'Experienced' },
        { name: 'MongoDB', level: 'Experienced' },
        { name: 'MYSql', level: 'Basic' },
        { name: 'PostgreSql', level: 'Basic' },
        { name: 'Redis', level: 'Basic' },
        { name: 'Docker', level: 'Enthusiast' },
        { name: 'Git/GitHub', level: 'Basic' },
        { name: 'CI/CD GitHub', level: 'Basic' },
        { name: 'Typescript', level: 'Intermediate' },
        { name: 'AWS', level: 'Enthusiast' },
    ]

    return (
        <div className="my-experience-main">
            <div className="about-me-title">
                <p className="p-about">Explore My</p>
                <h1 className="h1-about">Experience</h1>
            </div>
            <div className="my-experience-front-back">
                <div className="front">
                    <p className="front-title">Frontend Development</p>
                    <div className="front-technologies">
                        {Fronttechnologies.map((tech, index) => (
                            <div className="technology" key={index}>
                                <div className="checkmark-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        width={25}
                                        height={25}
                                    >
                                        <path
                                            className="checkmark-path"
                                            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                        />
                                    </svg>
                                </div>
                                <div className="tech-main">
                                    <p className="tech-name">{tech.name}</p>
                                    <p className="tech-level">{tech.level}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="back">
                    <p className="front-title">Backend Development</p>
                    <div className="front-technologies">
                        {Backtechnologies.map((tech, index) => (
                            <div className="technology" key={index}>
                                <div className="checkmark-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        width={25}
                                        height={25}
                                    >
                                        <path
                                            className="checkmark-path"
                                            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                        />
                                    </svg>
                                </div>
                                <div className="tech-main">
                                    <p className="tech-name">{tech.name}</p>
                                    <p className="tech-level">{tech.level}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
