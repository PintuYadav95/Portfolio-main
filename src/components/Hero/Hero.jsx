import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils"

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm Pintu Kumar Yadav
                </h1>
                <p className={styles.description}>
                    I'm a MERN Stack Developer with 6 months of experience using Reactjs, Nodejs, Expressjs, MongoDB, JavaScript, HTML, CSS . Reach out if you'd like to Know more!
                </p>
                <div className={styles.heroBtnSection}>
                    <a href="mailto:pintuyadav4071@gmail.com" className={styles.contactBtn}>
                        Contact Me
                    </a>
                    <a href="https://drive.google.com/file/d/1OmgPEbk91NLq01pNrdAwCvvPfVjUZF0J/view?usp=drive_link" target="_blank" className={styles.contactBtn}>
                        Download CV
                    </a>
                </div>

            </div>
            <img src={getImageUrl("hero/pintuyadav.png")}
                alt="Hero image of mine"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero
