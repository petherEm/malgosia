"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 20,
    text: "Years of Experience",
  },
  {
    num: 12,
    text: "Strategic Projects completed",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-start md:justify-center"
            >
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-[#b629dc] text-4xl font-bold xl:text-6xl"
              />
              <p
                className={`${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[200px]"
                } leading-snug text-white/80 `}
              >
                {stat.text}
              </p>
            </div>
          ))}
          <div>
            <p className="text-[#b629dc] text-4xl font-bold xl:text-6xl">
              IVECO &
            </p>
          </div>
          <div>
            <p className="text-[#b629dc] text-4xl font-bold xl:text-6xl">CNH</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
