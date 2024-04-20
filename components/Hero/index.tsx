import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="flex justify-between items-center gap-8 my-20 ">
        <div className="w-[45%]">
          <h1 className="text-6xl-medium">
            We Partner with <br /> SME’s to build great <br /> Brands
          </h1>
          <p className="mt-2 mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ratione recusandae <br />  eum, 
            expedita sit fugiat rerum consequuntur quae ad sed exercitationem. <br />
            Ipsum, libero amet at totam ad voluptatum accusamus explicabo.
          </p>
          <Button>Talk to Us</Button>
        </div>

        <div className="w-[45%]">
          <Image
            src="/hero-img.png"
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
