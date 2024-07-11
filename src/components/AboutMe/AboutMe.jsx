import './AboutMe.css'
import me from '../../assets/photo2.jpg'

export const AboutMe = () => {
    return (
        <>
            <div className="about-me-main">
                <div className="about-me-title">
                    <p className="p-about">Get More Information</p>
                    <h1 className="h1-about">About Me</h1>
                </div>
                <div className="about-me-main-container">
                    <div className="about-me-image-container">
                        <img className="about-me-img" src={me} />
                    </div>
                    <div className="about-me-exp-educ-passage">
                        <div className="about-me-exp-educ">
                            <div className="about-me-exp">
                                <div className="exp-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        height="25"
                                        width="25"
                                    >
                                        <path
                                            className="path-exp"
                                            d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"
                                        />
                                    </svg>
                                </div>
                                <p className="experience-p">Experience</p>
                                <p className="experience-paragraph">
                                    Full Stack Web Developer for more than 1.5
                                    years
                                </p>
                            </div>
                            <div className="about-me-educ">
                                <div className="exp-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                        height="25"
                                        width="25"
                                    >
                                        <path
                                            className="path-educ"
                                            d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H256V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z"
                                        />
                                    </svg>
                                </div>
                                <p className="education-p">Education</p>
                                <p className="education-paragraph">
                                    B.Sc. Azerbaijan State University of
                                    Economics
                                </p>
                            </div>
                        </div>
                        <div className="about-me-passage">
                            <p className="about-me-p">
                                Hi, I'm Emil, an 18-year-old Full Stack
                                Developer. My programming journey began three
                                years ago with Python, and since then, I've
                                delved into web development. I have experience
                                with React, Vue.js, and backend technologies
                                like Node.js, TypeScript, Express.js, MongoDB,
                                and MySQL. I enjoy creating my own architecture,
                                often adhering to SOLID principles. Writing
                                clean and understandable code is my top
                                priority. Additionally, I have design skills and
                                experience with Figma.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
