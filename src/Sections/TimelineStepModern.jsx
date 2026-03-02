import React, { memo } from "react";

export const TimelineStepModern = memo(({ number, title, description, position, isLast }) => {
  const isLeft = position === "left";

  return (
    <div
      className={`relative flex flex-row md:flex-row items-stretch md:items-center w-full mb-0 md:mb-24 ${
        isLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Mobile Number */}
      <div className="flex flex-col items-center mr-6 md:hidden">
        <div
          className="
            flex items-center justify-center w-12 h-12 rounded-full z-20
            bg-gradient-to-br from-blue-600 to-emerald-600 
            text-white font-bold text-lg shadow-lg shadow-blue-500/30
            ring-4 ring-white
          "
        >
          {number}
        </div>

        {!isLast && <div className="w-0.5 flex-grow bg-slate-200 my-2"></div>}
      </div>

      {/* Desktop Number */}
      <div
        className="
          hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
          items-center justify-center w-14 h-14 rounded-full z-20
          bg-gradient-to-br from-blue-600 to-emerald-600 text-white font-bold text-xl
          shadow-xl shadow-emerald-500/20 ring-8 ring-white
        "
      >
        {number}
      </div>

      {/* Card */}
      <div
        className={`
          w-full md:w-5/12 pb-12 md:pb-0
          ${isLeft ? "md:mr-auto md:text-right md:pr-12" : "md:ml-auto md:text-left md:pl-12"}
        `}
      >
        <div
          className={`
            relative p-6 md:p-8 bg-white rounded-2xl 
            border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]
            hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.15)] hover:border-emerald-100
            transition-all duration-300 hover:-translate-y-1 group
            ${isLeft ? "md:border-r-4 md:border-r-emerald-500" : "border-l-4 border-l-emerald-500"}
          `}
        >
          {/* Mobile arrow */}
          <div
            className={`md:hidden absolute top-6 -left-2 w-4 h-4 bg-white transform rotate-45 border-l border-b border-emerald-500`}
          ></div>

          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
            {title}
          </h3>

          <p
            className="text-slate-600 text-sm leading-relaxed font-medium"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {/* Connector Line (Desktop) */}
        <div
          className={`
            hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-0.5 bg-slate-200
            ${isLeft ? "right-0" : "left-0"}
          `}
        ></div>
      </div>
    </div>
  );
});
