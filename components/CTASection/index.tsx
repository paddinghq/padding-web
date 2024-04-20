import Image from "next/image";
import { Button } from "../ui/button";

const CTASection = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <div>
          <div>
            <p className="text-5xl-medium">
              Ready to take your startup to the <br /> next level?
            </p>
          </div>
          <div className="mt-10">
            <Button>Contact Us</Button>
          </div>
        </div>

        <div>
          <Image
            src="/CTA-padding.png"
            width={300}
            height={300}
            className="w-full h-full"
            alt="CTA-logo"
          />
        </div>
      </div>
    </section>
  )
}

export default CTASection
