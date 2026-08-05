import React, {useRef} from 'react';
import {motion, useInView} from "framer-motion";
import CountUp from "react-countup";

const stats = [
    { end: 6, label: "Campuses" },
    { end: 25000, label: "Students", separator: "," },
    { end: 88, label: "Faculty" },
    { end: 470, label: "Professors" },
    { end: 30, label: "Partner Universities" },
    { end: 82, label: "Alumni Employment", suffix: "%" },
];

function CountUpSec() {
    const ref4 = useRef(null);
    const isInView4 = useInView(ref4, { once: true, amount: 0.3 });

    return (
        <section className="relative h-auto sm:h-[360px] w-full flex items-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/IMG_7687.JPG')" }}
                aria-hidden="true"
            />
            <div ref={ref4} className="relative z-10 w-full h-full flex items-center bg-[#012152]/70">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-16">
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                className="stat flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6"
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="flex items-center justify-center gap-4 sm:gap-6 border-b border-white pb-4 sm:pb-6">
                                    <span className="text-white text-5xl sm:text-7xl font-extrabold">
                                        {isInView4 ? (
                                            <CountUp
                                                start={0}
                                                end={stat.end}
                                                duration={2.5}
                                                separator={stat.separator}
                                                suffix={stat.suffix || ""}
                                            />
                                        ) : (
                                            0
                                        )}
                                    </span>
                                </div>
                                <span className="text-white uppercase font-semibold text-lg sm:text-xl tracking-wider">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountUpSec;
