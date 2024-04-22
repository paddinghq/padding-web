import { Button } from "../ui/button";
import Image from "next/image";
import { ReactNode } from 'react';

interface HeroProps {
  title: ReactNode;
  text: ReactNode;
  src: string;
}

const Hero: React.FC<HeroProps> = ({ title, text, src }) => {
  return (
    <section>
      <div className="flex justify-between items-center gap-8 my-20 ">
        <div className="w-[45%]">
          <h1 className="text-6xl-medium">
            {title}
          </h1>
          <p className="mt-4 mb-8">
            {text}
          </p>
          <Button>Talk to Us</Button>
        </div>

        <div className="w-[45%]">
          <Image
            src={src}
            width={700}
            height={300}
            className="w-full h-full"
            alt="Hero"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero;
