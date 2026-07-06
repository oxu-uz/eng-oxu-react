import React from 'react';
import CampusSection from "../components/home/CampusSection.jsx";
import NewsAndEvents from "../components/home/NewsAndEvents.jsx";
import FadeIn, {FadeInStagger} from "../components/FadeIn.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import Section1 from "../components/home/Section1.jsx";
import ChooseUs from "../components/home/ChooseUs.jsx";
import EmbarkJourneySec from "../components/home/EmbarkJourneySec.jsx";
import CountUpSec from "../components/home/CountUpSec.jsx";
import ContactUs from "../components/home/ContactUs.jsx";
import ProgramHighlights from "../components/home/ProgramHighlights.jsx";
import StudentLife from "../components/home/StudentLife.jsx";

const HomePage = () => {
    return (
        <div className="bg-white home-page">
            <Section1/>

            <FadeInStagger>
                <FadeIn>
                    <NewsAndEvents/>
                </FadeIn>
            </FadeInStagger>

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
                    <StudentLife/>
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
                    <ContactUs/>
                </FadeIn>
            </FadeInStagger>
        </div>
    );
};

export default HomePage;
