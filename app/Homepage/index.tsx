import CTASection from '@/components/CTASection';
import Hero from '@/components/Hero';

const Homepage = () => {
  return (
    <>
      <div className="bg-gray-01">
        <div className="container mx-auto pt-6 pb-8">
          <Hero />
          <CTASection />
        </div>
      </div>
    </>
  )
}

export default Homepage;
