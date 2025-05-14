
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToActionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
          Ready to Revolutionize Your Outdoor Lighting?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Be one of the first to experience the TikiWash difference. Support our Kickstarter campaign and help bring this innovation to life!
        </p>
        <a
          href="#kickstarter-link" // Placeholder
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="bg-secondary hover:bg-orange-600 text-white text-lg px-10 py-6 font-poppins">
            Back TikiWash on Kickstarter Now!
          </Button>
        </a>
        {/* Optional: Kickstarter Video Embed Placeholder */}
        {/* <div className="mt-12 aspect-video max-w-3xl mx-auto bg-charcoal-gray/50 rounded-lg flex items-center justify-center">
          <p className="text-white/70">Kickstarter Video Coming Soon!</p>
        </div> */}
      </div>
    </section>
  );
};

export default CallToActionSection;
