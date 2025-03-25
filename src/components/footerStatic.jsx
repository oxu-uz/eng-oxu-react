import React from 'react';
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FooterStatic = () => {
    return (
        <div>
            <footer className="main-footer bg-gradient-to-r from-[#092076] to-[#0a37b3]">
                <div className="main-footer__group">
                    <ul className="main-footer__nav">
                        <li className="main-footer__item-heading uppercase">
                            <a className="main-footer__link main-footer__link_heading">
                                Useful Links
                            </a>
                        </li>
                        <li className="main-footer__item">
                            <a className="main-footer__link" href="https://uzbmb.uz/">
                                State Testing Center
                            </a>
                        </li>
                        <li className="main-footer__item">
                            <a className="main-footer__link" href="https://yoshlardaftari.uz/supports-2">
                                Youth Notebook
                            </a>
                        </li>
                        <li className="main-footer__item">
                            <a className="main-footer__link" href="https://id.egov.uz/oz">
                                Unified Identification System
                            </a>
                        </li>
                        <li className="main-footer__item">
                            <a className="main-footer__link" href="https://gov.uz/uz/">
                                Government Portal
                            </a>
                        </li>
                        <li className="main-footer__item">
                            <a className="main-footer__link" href="https://president.uz/oz">
                                Press Service of the President
                            </a>
                        </li>
                        <li className="main-footer__item">
                            <a className="main-footer__link" href="https://my.gov.uz/oz">
                                Interactive State Services Portal
                            </a>
                        </li>
                    </ul>
                    <ul className="main-footer__nav lg:h-full h-min">
                        <li className="main-footer__item-heading uppercase">
                            <a className="main-footer__link main-footer__link_heading">
                                Address Information
                            </a>
                        </li>
                        <li className="main-footer__item">
                            <a className="main-footer__link" href="tel:+998553050009">
                                Tel: +998 55 305 00 09
                            </a>
                        </li>
                        <li className="main-footer__item">
                            <a className="main-footer__link" href="mailto:info@oxu.uz">
                                Email: info@oxu.uz
                            </a>
                        </li>
                        <iframe
                            className="mt-5 hidden lg:block"
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa3b3dd30225dbbddcf4d316ebb3aca449175fc9737f4a723239a2ad2ce925ec9&amp;source=constructor"
                            width="400"
                            height="200"
                            frameBorder="0"
                        ></iframe>
                    </ul>
                    <ul className="main-footer__nav lg:h-full h-min">
                        <li className="main-footer__item-heading uppercase">
                            <a className="main-footer__link main-footer__link_heading">
                                Social Media
                            </a>
                        </li>
                        <li className="main-footer__item">
                            <a className="main-footer__link flex items-center gap-3" href="https://t.me/Oxu_uz">
                                <FaTelegram size="25" />
                                <span>Telegram</span>
                            </a>
                        </li>
                        <li className="main-footer__item">
                            <a className="main-footer__link flex items-center gap-3" href="https://www.instagram.com/oxu_uz/">
                                <PiInstagramLogoFill size="25" />
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li className="main-footer__item">
                            <a className="main-footer__link flex items-center gap-3" href="https://www.facebook.com/people/Osiyo-Xalqaro-Universiteti/100088012691808/?sk=about">
                                <FaFacebook size="25" />
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li className="main-footer__item">
                            <a className="main-footer__link flex items-center gap-3" href="https://www.youtube.com/@Osiyo.Xalqaro.Universiteti.">
                                <FaYoutube size="25" />
                                <span>YouTube</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="main-footer__bottom items-center flex justify-between">
                    <Link
                        className="flex justify-center lg:justify-start w-full items-center space-x-3 rtl:space-x-reverse"
                        to="/"
                    >
                        <motion.img
                            src="/logo.svg"
                            alt="Logo"
                            className="logo"
                            initial={{ filter: 'drop-shadow(0 0 0 rgba(255, 255, 255, 0))' }}
                            animate={{
                                filter: [
                                    'drop-shadow(0 0 0 rgba(255, 255, 255, 0))',
                                    'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))',
                                    'drop-shadow(0 0 0 rgba(255, 255, 255, 0))',
                                ],
                            }}
                            transition={{
                                duration: 2,
                                times: [0, 0.5, 1],
                                ease: 'easeOut',
                            }}
                        />
                    </Link>
                    <div className="main-footer__copy lg:block hidden">
                        <p className="main-footer__info">© 2025. Copyright All Rights Reserved, AIU</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterStatic;
