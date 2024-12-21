import React from 'react';
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

const Footer = () => {
    return (
        <footer className={styles.container} id="footer">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel Free to reach out!</p>
            </div>

            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="" />
                    <a href="mailto:pintuyadav4071@gmail.com">pintuyadav4071@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="" />
                    <a href="https://github.com/PintuYadav95">GitHub</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
                    <a href="https://www.linkedin.com/in/pintu-kumar-yadav-22a268219/">LinkedIn</a>
                </li>
                <li className={styles.link}>
                    <img width={45} src={getImageUrl("contact/leetcode.png")}  alt="" />
                    <a href="https://leetcode.com/u/PintuYadav95/">Leetcode</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
