import './index.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()

    useEffect(() => {
        const animateLetter = () => {
            setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 4000);
        };

        animateLetter();

    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o63h8lj', 'template_zye859t', refForm.current, 'ytWqG3EksPu8j11Ws')
            .then(() => {
                alert('Email sent successfully!');
                window.location.reload(false)
            }, () => {
                alert('There was an error sending the email!');
            });
    };
    return (
        <div>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            index={15}
                        />
                    </h1>
                    <p >
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        placeholder="Name"
                                        type="text"
                                        name="name"
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Anas Alnajjar,
                    <br />
                    Saudi Arabia,
                    <br />
                    um almomeneen sawda, 5641
                    <br />
                    jeddah alnaseem
                    <span>a02baset@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[21.513327, 39.233469]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[21.513327, 39.233469]}>
                            <Popup>
                                Anas lives Here <br /> come over to have a cup of tea.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </div>
    );
}

export default Contact;
