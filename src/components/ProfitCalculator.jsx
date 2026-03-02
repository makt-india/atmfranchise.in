import React, { useState, useMemo, useEffect, memo } from "react";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";


/* =========================
   LOCATION PRESETS
========================= */
const locationPresets = {
  rural: { tx: 40, expenses: 6000 },
  semi: { tx: 70, expenses: 9000 },
  urban: { tx: 110, expenses: 13000 },
  metro: { tx: 160, expenses: 18000 },
};

/* =========================
   PARTNER COMMISSIONS
========================= */
const partners = {
  EPS: 9,
  HITACHI: 10,
  FINDI: 11,
  INDIA1: 12,
};

/* =========================
   Animated Counter Hook
========================= */
const useCountUp = (end, duration = 800) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setValue(end);
        clearInterval(counter);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return value;
};

const ProfitCalculator = () => {
  const [location, setLocation] = useState("semi");
  const [dailyTx, setDailyTx] = useState(locationPresets.semi.tx);
  const [expenses, setExpenses] = useState(locationPresets.semi.expenses);
  const [investment, setInvestment] = useState(500000);
  const [selectedPartner, setSelectedPartner] = useState("HITACHI");

  const handleLocationChange = (type) => {
    setLocation(type);
    setDailyTx(locationPresets[type].tx);
    setExpenses(locationPresets[type].expenses);
  };

  /* =========================
     CALCULATIONS
  ========================= */
  const calculations = useMemo(() => {
    const monthlyTx = dailyTx * 30;
    const result = {};

    Object.keys(partners).forEach((partner) => {
      const commission = partners[partner];
      const gross = monthlyTx * commission;
      const net = gross - expenses;
      const annual = net * 12;
      const roi =
        investment > 0 ? ((annual / investment) * 100).toFixed(1) : 0;
      const breakEven =
        net > 0 ? (investment / net).toFixed(1) : "N/A";

      result[partner] = {
        net,
        annual,
        roi,
        breakEven,
      };
    });

    return result;
  }, [dailyTx, expenses, investment]);

  const activeData = calculations[selectedPartner];

  const animatedNet = useCountUp(activeData.net);
  const animatedAnnual = useCountUp(activeData.annual);

  return (
    <section className="py-16 bg-slate-50 border-y border-gray-200" >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            ATM Partner Earnings Estimator
          </h2>
          <p className="text-slate-600">
            Earnings are location dependent and based on projected transaction volume.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">

          {/* INPUT SIDE */}
          <div className="space-y-8">

            {/* Location */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3">
                Location Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {Object.keys(locationPresets).map((type) => (
                  <button
                    key={type}
                    onClick={() => handleLocationChange(type)}
                    className={`p-3 rounded-xl border text-sm font-semibold transition ${
                      location === type
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-slate-50 border-gray-200"
                    }`}
                  >
                    {type.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Daily Transactions */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 flex justify-between">
                Daily Transactions <span>{dailyTx}</span>
              </label>
              <input
                type="range"
                min="20"
                max="250"
                step="5"
                value={dailyTx}
                onChange={(e) => setDailyTx(Number(e.target.value))}
                className="w-full accent-emerald-600"
              />
            </div>

            {/* Expenses */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 flex justify-between">
                Monthly Expenses (₹)
                <span>{expenses.toLocaleString("en-IN")}</span>
              </label>
              <input
                type="range"
                min="3000"
                max="25000"
                step="1000"
                value={expenses}
                onChange={(e) => setExpenses(Number(e.target.value))}
                className="w-full accent-emerald-600"
              />
            </div>

            {/* Investment */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 flex justify-between">
                Total Investment (₹)
                <span>{investment.toLocaleString("en-IN")}</span>
              </label>
              <input
                type="range"
                min="200000"
                max="1000000"
                step="50000"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full accent-emerald-600"
              />
            </div>

            {/* Disclaimer */}
            <div className="p-4 bg-blue-50 rounded-xl flex gap-3 items-start">
              <Info className="text-blue-600 shrink-0" size={18} />
              <p className="text-xs text-blue-700 leading-relaxed">
                This estimator is based on projected transaction volume.
                Actual income depends on ATM location quality, uptime,
                rental agreement, and operational efficiency.
              </p>
            </div>
          </div>

          {/* RESULT SIDE */}
          <div className="space-y-6">

            {/* Partner Buttons */}
            <div className="grid grid-cols-2 gap-3">
              {Object.keys(partners).map((partner) => (
                <button
                  key={partner}
                  onClick={() => setSelectedPartner(partner)}
                  className={`p-3 rounded-xl font-semibold transition border ${
                    selectedPartner === partner
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-slate-100 border-gray-200"
                  }`}
                >
                  {partner}
                </button>
              ))}
            </div>

            {/* Active Partner Result */}
            <div className="bg-slate-900 text-white rounded-2xl p-8">

              <h4 className="text-xl font-bold mb-6">
                {selectedPartner} Projection
              </h4>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-slate-400">Net / Month</p>
                  <p className="text-emerald-400 font-bold text-2xl">
                    ₹{animatedNet.toLocaleString("en-IN")}
                  </p>
                </div>

                <div>
                  <p className="text-slate-400">Annual Profit</p>
                  <p className="font-bold text-xl">
                    ₹{animatedAnnual.toLocaleString("en-IN")}
                  </p>
                </div>

                <div>
                  <p className="text-slate-400">ROI</p>
                  <p className="font-bold">{activeData.roi}%</p>
                </div>

                <div>
                  <p className="text-slate-400">Break-even</p>
                  <p className="font-bold">{activeData.breakEven} months</p>
                </div>
              </div>
            </div>

<Link
  to="/Contact"
  className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 transition p-4 rounded-xl font-bold text-white"
>
  Check ATM Availability in My Area →
</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ProfitCalculator);
