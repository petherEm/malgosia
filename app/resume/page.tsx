"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const about = {
  title: "About me",
  description:
    "With extensive experience in the automotive industry, I effectively apply strategic planning, financial expertise, and leadership capabilities to drive success in the commercial truck rental sector. My strengths in identifying growth opportunities, optimizing operations, and cultivating a high-performance culture make me an ideal candidate for the role of General Manager.",
  info: [
    { fieldName: "Name", fieldValue: "Małgorzata Szynkarczuk" },
    {
      fieldName: "LinkedIn",
      fieldValue: "malgorzataszynkarczuk",
    },
    { fieldName: "Email", fieldValue: "malgosz74@gmail.com" },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Leveraging a strong foundation in the automotive industry, I excel in applying strategic planning, financial expertise, and leadership skills to drive success within the commercial truck rental sector. My proven ability to optimize operations, foster growth, and deliver measurable results ensures consistent business performance and market competitiveness.",
  items: [
    {
      company: "IVECO Group - Turin, Italy",
      position: "Corporate FP&A Senior Manager",
      duration: "2022 - Present",
      desc: "Provided financial support to executive management and the Board, delivering key analyses, reporting, and forecasts for corporate functions and business units. Led corporate consolidation and budgeting processes, implemented critical BI dashboards for enhanced financial visibility, and drove initiatives to streamline financial processes and improve business agility.",
    },
    {
      company: "CNH Industrial SpA - Turin, Italy",
      position: "Global Strategy, PMO Spin-off Global",
      duration: "2021 - 2022",
      desc: "Supported the Chief Separation Officer in the spin-off of CNH Industrial’s On-Highway business, focusing on optimizing cost structures and aligning investment priorities for CNH Industrial and Iveco Group. Conducted market intelligence, M&A assessments, and executed strategic transactions, including divestitures and joint ventures, to drive growth in commercial vehicles, special vehicles, and powertrain sectors.",
    },
    {
      company: "CNH Industrial SpA IVECO Brand, Turin (IT), Lyon (FR)",
      position: "Global Bus Business & Network Development Director",
      duration: "2019 - 2021",
      desc: "Directed project teams to optimize resource management and distribution models, strengthening the network chain for timely project delivery. Managed global bus business operations, including network development, product innovation, and talent recruitment to drive growth and market share. Led dealer and sales teams, fostering a customer-centric approach and ensuring business success through strategic consultation and team development.",
    },
    {
      company: "CNH Industrial SpA - IVECO Poland, Warsaw",
      position: "Business Network Development Director, Poland & Ukraine",
      duration: "2012 - 2019",
      desc: "Gained a competitive edge by analyzing market trends and competitors, while ensuring adherence to BER guidelines and IVECO’s principles. Led the transformation of the distribution network, surpassing sales expectations, and successfully acquired 12 new partners in Poland and Ukraine. Developed a high-performing workforce by recruiting top talent and executing motivational programs within the dealer network.",
    },
    {
      company: "CNH Industrial SpA - IVECO Poland, Warsaw",
      position: "Treasury & Credit Control Manager, Head of Commercial Lending",
      duration: "2008 - 2012",
      desc: "Achieved financial objectives by managing cash flow, forecasting, credit operations, and debt recovery. Successfully navigated the 2008-2009 financial crisis by renegotiating loans, restructuring assets, and collaborating with banks and legal offices. Implemented dealer stock financing through the 'Floor Plan' with CNH Capital, enhancing operations, and overseeing retail financing and sales initiatives.",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Master of Business Administration from University of Denver and Warsaw University of Management & Law, complemented by a Master’s Degree in Business Administration and a Master’s in International Finance from Warsaw School of Economics (SGH).",
  items: [
    {
      institution:
        "University of Denver & University of Management and Law in Warsaw",
      degree: "Master of Business Administration",
      duration: "2010",
    },
    {
      institution:
        "University of Denver & University of Management and Law in Warsaw",
      degree: "Master Degree in Business Management",
      duration: "2008",
    },
    {
      institution: "Warsaw School of Economics",
      degree: "Master Degree in International Finance",
      duration: "2000",
    },
  ],
};

const skills = {
  title: "My Expertise",
  description:
    "With extensive experience in the automotive industry, I effectively apply strategic planning, financial expertise, and leadership capabilities to drive success in the commercial truck rental sector. My strengths in identifying growth opportunities, optimizing operations, and cultivating a high-performance culture make me an ideal candidate for the role of General Manager.",
  skillSet: [
    { num: 1, desc: "Business Development & Driving Growth" },
    { num: 2, desc: "Network & Relationship Building" },

    { num: 4, desc: "Process & Performance Improvements" },
    { num: 7, desc: "Finance Operations Mangement" },
    { num: 8, desc: "Sales Strategic Planning Execution" },
    { num: 9, desc: "Strong Communication & Commercial Abilities" },
    { num: 3, desc: "Cross-functional Team Building & Leadership" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Expertise</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[580px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col items-center lg:items-start gap-1"
                        >
                          <span className="text-[#b629dc]">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#b629dc]"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <p className="text-white/60">{item.desc}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[440px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col items-center lg:items-start gap-1"
                        >
                          <span className="text-[#b629dc]">
                            {item.duration}
                          </span>

                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#b629dc]"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 xl:gap-[30px]">
                  {skills.skillSet.map((skill, index) => {
                    return (
                      <li className="" key={index}>
                        <div className="flex items-center justify-start gap-[10px]">
                          <span className="bg-[#b629dc] min-h-3 min-w-3 rounded-full text-3xl"></span>
                          {/* <BsArrowDownRight className="text-[#b629dc] -rotate-45 text-3xl" /> */}
                          <p>{skill.desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  <li className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">English:</span>
                    <span className="text-lg">C2, Proficient</span>
                  </li>
                  <li className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">Italian:</span>
                    <span className="text-lg">B2</span>
                  </li>
                  <li className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">Russian:</span>
                    <span className="text-lg">B2</span>
                  </li>
                  <li className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">Polish:</span>
                    <span className="text-lg">Native</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
