"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { LiaCertificateSolid } from "react-icons/lia";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    href: "/",
    title: "Business Operations & Financial Management",
    description:
      "Extensive experience in overseeing business operations, analyzing corporate finances, and conducting in-depth financial assessments to evaluate partner viability.",
  },
  {
    num: "02",
    href: "/",
    title: "Strategic Planning & Project Management",
    description:
      "Demonstrated success in strategic sales planning, brand positioning, and alliance-building to secure multimillion-euro contracts and partnerships.",
  },
  {
    num: "03",
    href: "/",
    title: "Risk Analysis & Mitigation",
    description:
      "Proven expertise in identifying, assessing, and mitigating financial and operational risks, with a focus on expenditure control and sustainability.",
  },
  {
    num: "04",
    href: "/",
    title: "Leadership & Team Building",
    description:
      "Effective and motivational leader with a collaborative approach, consistently driving teams to surpass performance goals.",
  },
  {
    num: "05",
    href: "/",
    title: "Automotive Distribution & Sales Channels",
    description:
      "Skilled in managing end-to-end automotive distribution models, including sales network development, customer financing, and channel optimization.",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto mt-12 md:mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <div className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-[#b629dc] flex justify-center items-center transition-all duration-500">
                  <LiaCertificateSolid className="text-primary text-3xl" />
                </div>
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#b629dc] transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
