import LogoTitle from "../../assets/images/logo-a.png"
import { Link } from "react-router-dom";
import './index.scss';
import AnimatedLetters from '../AnimatedLetters/index'
import { useEffect, useState } from "react";
import Logo from "../Home/Logo";
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['n', 'a', 's']
    const job = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        const animateLetter = () => {
            setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 4000);
        };

        animateLetter();
    }, []);


    return (
        <div>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray} index={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={job} index={22} />
                    </h1>
                    <h2>Full-Stack Developer / JavaScript / React Developer </h2>
                    <Link to='/contact' className="flat-button">CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </div>
    )
}
export default Home;