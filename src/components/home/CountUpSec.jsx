import React, {useRef} from 'react';
import {motion, useInView} from "framer-motion";
import CountUp from "react-countup";

function CountUpSec(props) {

    const ref4 = useRef(null);
    const isInView4 = useInView(ref4, {once: false});

    return (
        <section className="h-auto sm:h-[360px] bg-cover w-full flex items-center bg-fixed"
                 style={{backgroundImage: "url('/IMG_7687.JPG')"}}>
            <div className="w-full h-full flex items-center bg-[#012152]/70">
                <div className="container mx-auto px-4 sm:px-8">
                    {/* Statistics Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-16">
                        {/* Statistic Item */}
                        <motion.div
                            ref={ref4}
                            className="stat flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6"
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                        >
                            <div
                                className="flex items-center justify-center gap-4 sm:gap-6 border-b border-white pb-4 sm:pb-6">
            <span className="text-white text-5xl sm:text-7xl font-extrabold">
              <CountUp
                  start={0}
                  end={25000}
                  duration={2.5}
                  separator=","
                  scrollSpy={true}
                  scrollSpyOnce={true}
              />
            </span>
                            </div>
                            <span className="text-white uppercase font-semibold text-lg sm:text-xl tracking-wider">
            Students
          </span>
                        </motion.div>

                        {/* Faculty Statistic */}
                        <motion.div
                            ref={ref4}
                            className="stat flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6"
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                        >
                            <div
                                className="flex items-center justify-center gap-4 sm:gap-6 border-b border-white pb-4 sm:pb-6">
            <span className="text-white text-5xl sm:text-7xl font-extrabold">
              <CountUp
                  start={0}
                  end={62}
                  duration={2.5}
                  scrollSpy={true}
                  scrollSpyOnce={true}
              />
            </span>
                            </div>
                            <span className="text-white uppercase font-semibold text-lg sm:text-xl tracking-wider">
            Faculty
          </span>
                        </motion.div>

                        {/* Partner Universities Statistic */}
                        <motion.div
                            ref={ref4}
                            className="stat flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6"
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                        >
                            <div
                                className="flex items-center justify-center gap-4 sm:gap-6 border-b border-white pb-4 sm:pb-6">
            <span className="text-white text-5xl sm:text-7xl font-extrabold">
              <CountUp
                  start={0}
                  end={30}
                  duration={2.5}
                  scrollSpy={true}
                  scrollSpyOnce={true}
              />
            </span>
                            </div>
                            <span className="text-white uppercase font-semibold text-lg sm:text-xl tracking-wider">
            Partner Universities
          </span>
                        </motion.div>

                        {/* Alumni Employment Statistic */}
                        <motion.div
                            ref={ref4}
                            className="stat flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6"
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                        >
                            <div
                                className="flex items-center justify-center gap-4 sm:gap-6 border-b border-white pb-4 sm:pb-6">
            <span className="text-white text-5xl sm:text-7xl font-extrabold">
              <CountUp
                  start={0}
                  end={82}
                  duration={2.5}
                  suffix="%"
                  scrollSpy={true}
                  scrollSpyOnce={true}
              />
            </span>
                            </div>
                            <span className="text-white uppercase font-semibold text-lg sm:text-xl tracking-wider">
            Alumni Employment
          </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountUpSec;