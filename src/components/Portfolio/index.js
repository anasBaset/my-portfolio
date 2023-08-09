import React from 'react';
import './index.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import portfolioData from '../../Data/portfolio.json'

const Portfolio = () => {
    const [letterClass, setLetterClass] = React.useState('text-animate')
    const portfolio = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']




    React.useEffect(() => {
        const animateLetter = () => {
            setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 4000);
        };

        animateLetter();
    }, []);

    const renderPortfolio = (portfolio) => {
        return (
            <div className='images-container'>
                {
                    portfolio.map((item, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img
                                    src={item.cover}
                                    alt='image'
                                    className='portfolio-image'
                                />
                                <div className='content'>
                                    <p className='title'>{item.title}</p>
                                    <h4 className='description'>{item.description}</h4>
                                    <button className='btn' onClick={() => window.open(item.url)}>View</button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        )
    }
    return (
        <div className='container portfolio-page'>
            <h1 className='page-title'>
                <AnimatedLetters
                    letterClass={letterClass}
                    index={15}
                    strArray={portfolio}
                />
            </h1>
            <div>
                {renderPortfolio(portfolioData.portfolio)}
            </div>
            <Loader type='pacman' />
        </div>
    )
}

export default Portfolio;