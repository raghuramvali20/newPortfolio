import React from 'react';
import './contactSection.css';

const Contacme = () => {
    return (
        <section id="contactme" className="contact-section">
            <div className="contact-card">
                <h1>Let&apos;s connect</h1>
                <p>I’m interested in freelance work, internships, and meaningful web projects.</p>
                <ul>
                    <li>
                        <a href="mailto:raghuramramvali4@gmail.com">
                            <img src="/mail.svg" alt="Email" />
                            <span>Mail</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/vali-mohana-raghu-rami-reddy" target="_blank" rel="noreferrer">
                            <img src="/linkedin.svg" alt="LinkedIn" />
                            <span>LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/raghuramvali20" target="_blank" rel="noreferrer">
                            <img src="/github.svg" alt="GitHub" />
                            <span>GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/raghu_ram_reddy_20/" target="_blank" rel="noreferrer">
                            <img src="/instagram.svg" alt="Instagram" />
                            <span>Instagram</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Contacme;