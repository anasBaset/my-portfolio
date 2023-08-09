import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faBootstrap, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const animateLetter = () => {
            setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 3000);
        };

        animateLetter();
    }, []);
    return (
        <div>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            index={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>  I'm a very ambitious front-end developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.</p>
                    <p> I'm quiet confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.</p>
                    <p> If I need to define myself in one sentence that would be a family
                        person, father of a beautiful daughter, a sports fanatic,
                        photography enthusiast, and tech-obsessed!!!</p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color='#7cc5d9' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#E44D26' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#264de4' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faBootstrap} color='#563d7c' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJs} color='#f0db4f' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#f1502f' />
                        </div>
                    </div>

                </div>

            </div>
            <Loader type="pacman" />
        </div>
    )
}

export default About