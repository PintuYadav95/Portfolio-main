import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from "../../utils";

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h1 className={styles.title}>About</h1>

            <div className={styles.content}>
                <img
                    src={getImageUrl("about/linkedimg.png")}
                    className={styles.aboutimg}
                />

                <ul className={styles.aboutItems}>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor Icon" />
                        <div className={styles.aboutItemsText}>
                            <h3>FrontEnd Developer</h3>
                            <p>With a keen eye for design and usability, I ensure that every interface I create is intuitive, responsive, and visually appealing.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server Icon" />
                        <div className={styles.aboutItemsText}>
                            <h3>Backend Developer</h3>
                            <p>With expertise in database management, server configuration, and API development, I ensure that backend systems are scalable, efficient, and secure.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="ui Icon" />
                        <div className={styles.aboutItemsText}>
                            <h3>UI/UX Designer</h3>
                            <p>From wireframing to prototyping, I specialize in transforming ideas into visually stunning designs that enhance the overall user experience.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
