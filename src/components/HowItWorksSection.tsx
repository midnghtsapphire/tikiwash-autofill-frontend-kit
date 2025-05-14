
import React from 'react';
import { Settings, Fuel, Zap } from 'lucide-react'; // Example icons

const steps = [
  {
    icon: Settings,
    title: "1. Easy Setup",
    description: "Quickly install the TikiWash sensor and valve system onto your Tiki torch and fuel container. No special tools required!",
  },
  {
    icon: Fuel,
    title: "2. Connect & Start",
    description: "Attach the fuel line and press the start button. TikiWash begins to fill your torch safely and automatically.",
  },
  {
    icon: Zap,
    title: "3. Perfect Fill, Auto Stop",
    description: "The smart sensor detects the optimal fuel level and automatically shuts off the flow, preventing overfills and spills. Enjoy perfectly filled torches every time!",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-charcoal-gray text-center mb-12 font-poppins">
          How TikiWash Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary text-white rounded-full p-3">
                  <step.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-charcoal-gray mb-2 font-poppins">{step.title}</h3>
              <p className="text-charcoal-gray/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
