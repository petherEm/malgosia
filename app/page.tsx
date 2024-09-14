import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="w-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-left order-2 xl:order-none">
            <span className="text-xl">General Manager | Automotive</span>
            <h1 className="text-[40px] md:h1">
              Hi, I am <br />
              <span className="text-[#b629dc]">Małgorzata</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Automotive Industry Leader with 20+ Years of Proven Success in
              International Markets. Results-oriented professional with an
              extensive track record of driving business growth, cultivating
              strategic partnerships, and increasing revenue through effective
              business development and sales channel optimization.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="ml-2" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-[#b629dc] rounded-full flex justify-center items-center text-[#b629dc] text-base hover:bg-[#b629dc] hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
