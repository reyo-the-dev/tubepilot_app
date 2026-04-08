import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { TelephoneFill, Facebook, Linkedin, Youtube, CaretRightFill } from 'react-bootstrap-icons';
import { PAGES, POPULAR_DESTINATIONS } from '@/constants/constants';
import { CONTACT_DETAILS } from '@/constants/conatct';

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
    </svg>
);

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <Row className={styles.footerRow}>
                    <Col lg={3} md={6} sm={12} className={styles.footerCol}>
                        <div className={styles.logoSection}>
                            <Image src="/logo/white logo.png" alt="TOURIZA Logo" className={styles.logoImage} />
                            <p className={styles.description}>
                                We take care of every detail you can travel with confidence ease.
                            </p>

                            <div className={styles.contactInfo}>
                                <div className={styles.iconWrapper}>
                                    <TelephoneFill />
                                </div>
                                <div className={styles.contactDetails}>
                                    <span className={styles.contactLabel}>Call Us 24/7</span>
                                    <a href={`tel:+${CONTACT_DETAILS.whatsapp1.number}`} className={styles.contactNumber}>
                                        {CONTACT_DETAILS.phone1.text}
                                    </a>
                                </div>
                            </div>

                            <div className={styles.socialFollow}>
                                <span className={styles.followText}>Follow Us -</span>
                                <div className={styles.socialIcons}>
                                    <a href="#"><Facebook /></a>
                                    <a href="#"><Linkedin /></a>
                                    <a href="#"><XIcon /></a>
                                    <a href="#"><Youtube /></a>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={12} className={styles.footerCol}>
                        <h4 className={styles.widgetTitle}>Quick Links</h4>
                        <ul className={styles.linkList}>
                            {
                                PAGES.map((page) => {
                                    return <li key={page.title}><Link href={page.href || "#"}><CaretRightFill className={styles.bulletIcon} /> {page.title}</Link></li>
                                })
                            }


                        </ul>
                    </Col>

                    <Col lg={3} md={6} sm={12} className={styles.footerCol}>
                        <h4 className={styles.widgetTitle}>Popular Location</h4>
                        <ul className={styles.linkList}>
                            {
                                POPULAR_DESTINATIONS.map((pd) => {
                                    return <li key={pd.name}><Link href={pd.href || "#"}><CaretRightFill className={styles.bulletIcon} /> {pd.name}</Link></li>
                                })
                            }
                        </ul>
                    </Col>

                    <Col lg={3} md={6} sm={12} className={styles.footerCol}>
                        <h4 className={styles.widgetTitle}>Newsletter</h4>
                        <p className={styles.newsletterText}>Subscribe to our newsletter</p>
                        <form className={styles.newsletterForm}>
                            <input type="email" placeholder="Email address.." required className={styles.emailInput} />
                            <button type="submit" className={styles.subscribeBtn}>Subscribe</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;