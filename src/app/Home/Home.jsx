import './Home.css'
import { AboutMe } from '../../components/AboutMe/AboutMe'
import { Experience } from '../../components/Experience/Experience'
import { Projects } from '../../components/Projects/Projects'
import { Contact } from '../../components/ContactMe/Contact'
import { Footer } from '../../components/Footer/Footer'
import { Profile } from '../../components/Profile/Profile'

export const Home = () => {
    return (
        <>
            <div className="home">
                <Profile />
                <AboutMe />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </>
    )
}
