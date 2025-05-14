
import React from 'react';
import { ShieldCheck, Smile, Clock, Droplets } from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    title: "Enhanced Safety",
    description: "Eliminates dangerous spills and overfills, reducing fire hazards associated with manual refilling.",
  },
  {
    icon: Smile,
    title: "Ultimate Convenience",
    description: "Refill your Tiki torches with the press of a button. No more mess, no more hassle.",
  },
  {
    icon: Droplets,
    title: "No More Mess",
    description: "Keep your deck, patio, and hands clean. TikiWash's automated system is spill-proof.",
  },
  {
    icon: Clock,
    title: "Save Time & Fuel",
    description: "Perfectly filled torches mean optimal burn time and no wasted fuel. Get back to enjoying your evening faster.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-charcoal-gray text-center mb-12 font-poppins">
          Why You'll Love TikiWash
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-light-gray p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-secondary text-white rounded-full p-3">
                  <benefit.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-charcoal-gray mb-2 font-poppins">{benefit.title}</h3>
              <p className="text-charcoal-gray/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
