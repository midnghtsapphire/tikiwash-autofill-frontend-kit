
import React from 'react';
import { Button } from '@/components/ui/button'; // Using shadcn button

const HeroSection = () => {
  return (
    <section className="bg-light-gray py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal-gray mb-6 font-poppins">
          Effortless & Safe Tiki Torch Refills
        </h1>
        <p className="text-lg sm:text-xl text-charcoal-gray/80 mb-10 max-w-2xl mx-auto">
          Introducing <span className="font-bold text-primary">TikiWash</span> – the revolutionary autofill kit that takes the mess and guesswork out of enjoying your outdoor ambiance.
        </p>
        <a
          href="#kickstarter-link" // Placeholder
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="bg-secondary hover:bg-orange-600 text-white text-lg px-8 py-6 font-poppins">
            Support us on Kickstarter!
          </Button>
        </a>
        <div className="mt-12">
          {/* Placeholder for product image/video */}
          {/* User, please upload your product image and let me know the filename! */}
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neSUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="TikiWash Product Showcase"
            className="mx-auto rounded-lg shadow-xl max-h-[400px] object-cover"
          />
           <p className="text-sm text-charcoal-gray/60 mt-2">Product image placeholder - Upload your TikiWash photo!</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
