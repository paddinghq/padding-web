import CTASection from '@/components/CTASection';
import Hero from '@/components/Hero';

const Homepage = () => {
  return (
    <>
      <div className="bg-gray-01">
        <div className="container mx-auto pt-6 pb-8">
        <Hero 
          title={(
              <div>
                  We Partner with <br />
                  SME’s to build great <br />
                  Brands
              </div>
          )}
          text={(
              <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ratione recusandae <br />
                  eum, expedita sit fugiat rerum consequuntur quae ad sed exercitationem. <br />
                  Ipsum, libero amet at totam ad voluptatum accusamus explicabo.
              </div>
          )}
          src="/hero-img.png"
        />
            
          <CTASection />
        </div>
      </div>
    </>
  )
}

export default Homepage;
