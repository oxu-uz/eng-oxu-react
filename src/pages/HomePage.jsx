import React, {useState, useEffect, useRef} from 'react';
import CampusSection from "../components/home/CampusSection.jsx";
import NewsAndEvents from "../components/home/NewsAndEvents.jsx";
import FadeIn, {FadeInStagger} from "../components/FadeIn.jsx";
import InfiniteLogoSlider from "../components/home/InfiniteLogoSlider.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import Section1 from "../components/home/Section1.jsx";
import ChooseUs from "../components/home/ChooseUs.jsx";
import EmbarkJourneySec from "../components/home/EmbarkJourneySec.jsx";
import CountUpSec from "../components/home/CountUpSec.jsx";
import ContactUs from "../components/home/ContactUs.jsx";
import ProgramHighlights from "../components/home/ProgramHighlights.jsx";
import StudentLife from "../components/home/StudentLife.jsx";

const HomePage = () => {
    const [isCarouselVisible, setCarouselVisible] = useState(false);
    const [isBackgroundLoaded, setBackgroundLoaded] = useState(false);
    const homeRef = useRef(null);

    useEffect(() => {
        // Handle scroll for carousel visibility
        const handleScroll = () => {
            const scrollThreshold = window.innerHeight * 0.2;
            if (window.scrollY > scrollThreshold) {
                setCarouselVisible(true);
            } else {
                setCarouselVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Lazy load background image using IntersectionObserver
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setBackgroundLoaded(true);
                    observer.disconnect(); // Stop observing once loaded
                }
            },
            {rootMargin: '100px'} // Load slightly before the element is in view
        );

        if (homeRef.current) {
            observer.observe(homeRef.current);
        }

        return () => {
            if (homeRef.current) {
                observer.unobserve(homeRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={homeRef}
            style={{
                // backgroundImage: isBackgroundLoaded ? "url(/header1.png)" : 'none',
                minHeight: '100vh', // Ensure the div has enough height
            }}
            className="bg-white"
        >
            <Section1/>

            <FadeInStagger>
                <FadeIn>
                    <ProgramHighlights/>
                </FadeIn>
            </FadeInStagger>

            <FadeInStagger>
                <FadeIn>
                    <ChooseUs/>
                </FadeIn>
            </FadeInStagger>

            <div className="flex items-center justify-center w-full h-[100px]"/>

            <FadeInStagger>
                <FadeIn>
                    <NewsAndEvents/>
                </FadeIn>
            </FadeInStagger>

            <FadeInStagger>
                <FadeIn>
                    <EmbarkJourneySec/>
                </FadeIn>
            </FadeInStagger>

            <FadeInStagger>
                <FadeIn>
                    <CampusSection/>
                </FadeIn>
            </FadeInStagger>

            <FadeInStagger>
                <FadeIn>
                    <Testimonials/>
                </FadeIn>
            </FadeInStagger>

            <FadeInStagger>
                <FadeIn>
                    <StudentLife/>
                </FadeIn>
            </FadeInStagger>

            <FadeInStagger>
                <FadeIn>
                    <CountUpSec/>
                </FadeIn>
            </FadeInStagger>

            {/*<FadeInStagger>*/}
            {/*    <FadeIn>*/}
            {/*        <InfiniteLogoSlider />*/}
            {/*    </FadeIn>*/}
            {/*</FadeInStagger>*/}

            <FadeInStagger>
                <FadeIn>
                    <ContactUs/>
                </FadeIn>
            </FadeInStagger>
        </div>
    );
};

export default HomePage;