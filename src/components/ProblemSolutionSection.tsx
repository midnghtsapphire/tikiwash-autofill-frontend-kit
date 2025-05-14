
import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const ProblemSolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-charcoal-gray mb-6 font-poppins">The Old Way vs. The TikiWash Way</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-red-500 mb-2 flex items-center font-poppins">
                  <XCircle className="h-6 w-6 mr-2 text-red-500" /> Manual Refills: Messy & Risky
                </h3>
                <ul className="list-disc list-inside text-charcoal-gray/80 space-y-1 pl-8">
                  <li>Spills and stains on your deck or patio.</li>
                  <li>Overfilling leads to wasted fuel and fire hazards.</li>
                  <li>Underfilling means your torches burn out too quickly.</li>
                  <li>Time-consuming and frustrating.</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-light-gray p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-2 flex items-center font-poppins">
                <CheckCircle2 className="h-6 w-6 mr-2 text-primary" /> TikiWash: Smart & Simple
              </h3>
              <ul className="list-disc list-inside text-charcoal-gray/80 space-y-1 pl-8">
                <li>Automated filling stops spills before they happen.</li>
                <li>Precise sensor ensures the perfect fuel level every time.</li>
                <li>Safe, clean, and incredibly easy to use.</li>
                <li>More time enjoying, less time fumbling with fuel!</li>
              </ul>
            </div>
             {/* User, please upload an image showing the problem (e.g. messy refill) and let me know the filename! */}
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwb24lMjBkZXNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
              alt="Clean TikiWash setup"
              className="mt-8 mx-auto rounded-lg shadow-xl max-h-[300px] object-cover"
            />
            <p className="text-sm text-charcoal-gray/60 mt-2 text-center">Image placeholder: TikiWash making refills easy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
