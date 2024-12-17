import React from 'react';
import {ChevronRight} from "lucide-react";

const Mbbs = () => {
    return (
        <div>
            <section className="page-heading-content mb-5 " data-cid="714">
                <img className="bg-image object-top" src="/medical-education-stethoscope-book-graduate-hat-medical-concept-blue-background-graduate.jpg" alt=""/>
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1>MBBS Program </h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li className="sideNav-link">
                                    <a className="nav-link" href="/">Home<ChevronRight size="16"/></a>
                                </li>
                                <li className="sideNav-link">
                                                                    <span className="nav-link">
                                Admissions
                                                                                   <ChevronRight size="16"/>
                                                                    </span>
                                </li>
                                <li className="sideNav-link">
                                                                    <span className="nav-link">
                                Find Programs
                                                                                   <ChevronRight size="16"/>
                                                                    </span>
                                </li>
                                <li className="sideNav-link">
                                    <a className="nav-link" href="/admissions/mbbs">
                                        MBBS
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto text-gray-800 space-y-10">
                <section className="space-y-6">
                    <p className="text-lg font-semibold">
                        Embark on a rewarding journey to become a medical professional with the MBBS program at Asia
                        International University (AIU). Our program is designed to provide you with a solid foundation
                        in medical science, clinical skills, and patient care, equipping you to meet the challenges of
                        modern healthcare.
                    </p>
                </section>

                <section className="space-y-8">
                    <h2 className="text-3xl font-bold text-[#012c6e] border-b pb-3">Why Choose AIU for Your MBBS?</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Comprehensive Curriculum</h3>
                            <p className="text-base">
                                Our MBBS program offers a well-rounded education that covers all essential aspects of
                                medical science, from basic sciences to clinical practice. We ensure that our curriculum
                                is aligned with international standards, preparing you for a successful career in
                                medicine anywhere in the world.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Expert Faculty</h3>
                            <p className="text-base">
                                Learn from a team of accomplished and experienced faculty members who are dedicated to
                                your academic and professional growth. Our professors are active practitioners and
                                researchers who bring real-world experience into the classroom, ensuring you receive
                                practical and up-to-date medical training.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Modern Facilities</h3>
                            <p className="text-base">
                                AIU boasts state-of-the-art facilities, including advanced laboratories, simulation
                                centers, and research facilities. These resources allow you to gain hands-on experience
                                and apply your knowledge in a controlled and supportive environment, bridging the gap
                                between theory and practice.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Clinical Exposure</h3>
                            <p className="text-base">
                                We believe that early and extensive clinical exposure is key to developing competent
                                medical professionals. Our MBBS program includes clinical rotations at top hospitals and
                                healthcare centers, where you will work with patients under the supervision of
                                experienced clinicians, gaining valuable practical experience.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">International Perspective</h3>
                            <p className="text-base">
                                As a globally oriented university, AIU offers numerous opportunities for international
                                exposure. Engage in student exchange programs, participate in international medical
                                conferences, and collaborate with peers from around the world, broadening your medical
                                education and understanding of global healthcare challenges.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">Supportive Academic Environment</h3>
                            <p className="text-base">
                                At AIU, your success is our priority. We offer a nurturing academic environment with
                                personalized support services, academic advising, and mentorship programs to help you
                                thrive in your studies and develop into a confident medical professional.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#012c6e] border-b pb-3">Program Structure</h2>
                    <p className="text-base">
                        The MBBS program at AIU is structured over five years, followed by a one-year compulsory
                        internship. The first two years focus on preclinical subjects, such as anatomy, physiology, and
                        biochemistry, laying the foundation for your medical education. The next three years are
                        dedicated to clinical subjects, including pathology, pharmacology, microbiology, and community
                        medicine, as well as clinical rotations in various specialties. The final year of internship
                        provides hands-on experience in hospitals, where you will apply your knowledge and skills in
                        real patient care settings.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#012c6e] border-b pb-3">Admission Requirements</h2>
                    <p className="text-base">
                        We seek dedicated and academically talented students who are passionate about pursuing a career
                        in medicine. Admission to the MBBS program is competitive, and we consider applicants who
                        demonstrate:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Strong academic performance, particularly in the sciences</li>
                        <li>A deep commitment to the field of medicine</li>
                        <li>Involvement in extracurricular activities, such as volunteer work, research, or leadership
                            roles
                        </li>
                        <li>Proficiency in English, with a required minimum score on language proficiency tests</li>
                    </ul>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#012c6e] border-b pb-3">How to Apply</h2>
                    <p className="text-base">
                        If you’re ready to take the first step toward a fulfilling career in medicine, we invite you to
                        apply to the MBBS program at AIU. Our admissions team is here to support you throughout the
                        application process and answer any questions you may have. Visit our admissions page for
                        detailed information on the application requirements, deadlines, and how to submit your
                        application.
                    </p>
                </section>
            </div>

        </div>
    );
};

export default Mbbs;
