import './Projects.css'
import imdb from '../../assets/imdb.png'
import amu from '../../assets/amu-main.png'
import restapi from '../../assets/rest-api.png'
import finance from '../../assets/finance.png'
import blog from '../../assets/blog.png'
import chat from '../../assets/chat.png'

export const Projects = () => {
    const projects = [
        {
            title: 'AMU Imtahan',
            image: amu,
            githubLink: 'https://github.com/Emilthelucky/amu-pdfimtahani',
            // liveDemoLink: 'https://amu-pdfimtahani.onrender.com',
        },
        {
            title: 'Simple RESTful API',
            image: restapi,
            githubLink: 'https://github.com/Emilthelucky/Simple-RestAPI',
            // liveDemoLink: 'https://your-live-demo/project-2',
        },
        {
            title: 'IMDB',
            image: imdb,
            githubLink:
                'https://github.com/Emilthelucky/imdb-pagination-search',
            // liveDemoLink: 'https://your-live-demo/project-3',
        },
        {
            title: 'Finance System',
            image: finance,
            githubLink: 'https://github.com/Emilthelucky/finance-client-int2',
            // liveDemoLink: 'https://your-live-demo/project-3',
        },
        {
            title: 'Tech Blog',
            image: blog,
            githubLink: 'https://github.com/Emilthelucky/blog_client',
            // liveDemoLink: 'https://your-live-demo/project-3',
        },
        {
            title: 'Socket.io ChatApp',
            image: chat,
            githubLink: 'https://github.com/Emilthelucky/chat-app-socketio-api',
            // liveDemoLink: 'https://your-live-demo/project-3',
        },
    ]

    return (
        <div className="projects-main">
            <div className="about-me-title">
                <p className="p-about">Browse My Recent</p>
                <h1 className="h1-about">Projects</h1>
            </div>
            <div className="projects">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <div className="project-image-container">
                            <img
                                src={project.image}
                                className="project-image"
                                alt={project.title}
                            />
                        </div>
                        <p className="project-title">{project.title}</p>
                        <div className="project-buttons">
                            <a href={project.githubLink} className="github-btn">
                                GitHub
                            </a>
                            {project.liveDemoLink ? (
                                <a
                                    href={project.liveDemoLink}
                                    className="live-demo"
                                >
                                    Live Demo
                                </a>
                            ) : (
                                <p className="live-demo">No Live</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
