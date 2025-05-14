import React, {useState, useEffect} from 'react';
import CampusSection from "../components/home/CampusSection.jsx";
import NewsAndEvents from "../components/home/NewsAndEvents.jsx";
import FadeIn, {FadeInStagger} from "../components/FadeIn.jsx";
import InfiniteLogoSlider from "../components/home/InfiniteLogoSlider.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import Section1 from "../components/home/Section1.jsx";
import ChooseUs from "../components/home/ChooseUs.jsx";
import EmbarkJourneySec from "../components/home/EmbarkJourneySec.jsx";
import CountUpSec from "../components/home/CountUpSec.jsx";


const HomePage = () => {
    const [isCarouselVisible, setCarouselVisible] = useState(false);

    useEffect(() => {
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

    return (
        <div style={{backgroundImage: "url(/header1.png)"}}>
            <Section1/>

            <FadeInStagger>
                <FadeIn>
                    <NewsAndEvents/>
                </FadeIn>
            </FadeInStagger>

            <FadeInStagger>
                <FadeIn>
                    <ChooseUs/>
                </FadeIn>
            </FadeInStagger>

            <FadeInStagger>
                <FadeIn>
                    <EmbarkJourneySec/>
                </FadeIn>
            </FadeInStagger>

            <FadeInStagger>
                <FadeIn>
                    <Testimonials/>
                </FadeIn>
            </FadeInStagger>

            <FadeInStagger>
                <FadeIn>
                    <CampusSection/>
                </FadeIn>
            </FadeInStagger>

            <FadeInStagger>
                <FadeIn>
                    <CountUpSec/>
                </FadeIn>
            </FadeInStagger>

            <FadeInStagger>
                <FadeIn>
                    <InfiniteLogoSlider/>
                </FadeIn>
            </FadeInStagger>
        </div>
    );
};

export default HomePage;
