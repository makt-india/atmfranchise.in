import React, { memo } from "react";
import { timelineStepsData } from "../Data";
import { TimelineStepModern } from "./TimelineStepModern";

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#94a3b8 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          opacity: 0.2,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">
            Onboarding Process
          </h2>

          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            From Application to <span className="text-blue-600">Cash Flow</span>
          </h3>

          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            We simplified the franchise setup into 4 streamlined steps.  
            Your ATM becomes operational in just{" "}
            <span className="font-bold text-slate-900">2–3 weeks</span>.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-0">
            {timelineStepsData.map((step, index) => (
              <TimelineStepModern
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                position={index % 2 === 0 ? "left" : "right"}
                isLast={index === timelineStepsData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HowItWorksSection);
