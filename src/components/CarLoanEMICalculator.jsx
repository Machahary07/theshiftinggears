import { useState, useMemo } from "react";
import { Calculator, TrendingUp, Percent, Calendar } from "lucide-react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function CarLoanEMICalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(9);
  const [loanTenure, setLoanTenure] = useState(5); // in years

  // EMI Formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
  const { emi, totalInterest, totalAmount, principalPercentage, interestPercentage } = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / (12 * 100);
    const totalMonths = loanTenure * 12;

    const emiCalc =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const totalAmountCalc = emiCalc * totalMonths;
    const interest = totalAmountCalc - principal;

    return {
      emi: Math.round(emiCalc),
      totalInterest: Math.round(interest),
      totalAmount: Math.round(totalAmountCalc),
      principalPercentage: ((principal / totalAmountCalc) * 100).toFixed(1),
      interestPercentage: ((interest / totalAmountCalc) * 100).toFixed(1),
    };
  }, [loanAmount, interestRate, loanTenure]);

  // Pie chart data
  const pieChartData = {
    labels: ['Principal Amount', 'Total Interest'],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',  // green
          'rgba(220, 38, 38, 0.8)',  // red
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(220, 38, 38, 1)',
        ],
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#ffffff',
          font: {
            size: 12,
            family: 'var(--font-sans)',
          },
          padding: 15,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#dc2626',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed || 0;
            const percentage = ((value / totalAmount) * 100).toFixed(1);
            return `${label}: ₹${value.toLocaleString()} (${percentage}%)`;
          }
        }
      },
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Car Loan EMI Calculator
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Calculate your monthly car loan payments instantly with our professional EMI calculator
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Inputs */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-red-600" />
              Loan Details
            </h2>

            {/* Loan Amount */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Loan Amount</label>
                <span className="text-2xl font-bold text-red-600">₹{loanAmount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="50000"
                max="4000000"
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                style={{
                  background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${((loanAmount - 50000) / (4000000 - 50000)) * 100}%, #374151 ${((loanAmount - 50000) / (4000000 - 50000)) * 100}%, #374151 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>₹50K</span>
                <span>₹40L</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wide flex items-center gap-2">
                  <Percent className="w-4 h-4" />
                  Interest Rate
                </label>
                <span className="text-2xl font-bold text-red-600">{interestRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                style={{
                  background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${((interestRate - 5) / (20 - 5)) * 100}%, #374151 ${((interestRate - 5) / (20 - 5)) * 100}%, #374151 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>5%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Loan Tenure */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wide flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Loan Tenure
                </label>
                <span className="text-2xl font-bold text-red-600">{loanTenure} {loanTenure === 1 ? 'Year' : 'Years'}</span>
              </div>
              <input
                type="range"
                min="1"
                max="7"
                step="1"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                style={{
                  background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${((loanTenure - 1) / (7 - 1)) * 100}%, #374151 ${((loanTenure - 1) / (7 - 1)) * 100}%, #374151 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>1 Year</span>
                <span>7 Years</span>
              </div>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-xl font-bold mb-6">Loan Composition</h2>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Left side - Stats boxes */}
              <div className="flex flex-col gap-3 w-full sm:w-auto sm:flex-1">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-xs">Principal</span>
                  </div>
                  <p className="text-xl font-bold">₹{loanAmount.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">{principalPercentage}%</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                    <span className="text-gray-400 text-xs">Interest</span>
                  </div>
                  <p className="text-xl font-bold text-red-600">₹{totalInterest.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">{interestPercentage}%</p>
                </div>
              </div>
              {/* Right side - Pie chart */}
              <div className="w-48 h-48 sm:w-52 sm:h-52 flex-shrink-0">
                <Pie data={pieChartData} options={pieChartOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Results */}
        <div className="space-y-6">
          {/* EMI Card */}
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 md:p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <p className="text-red-100 text-sm font-semibold uppercase tracking-wide mb-2">Monthly EMI</p>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">₹{emi.toLocaleString()}</h3>
              <p className="text-red-100 text-sm">per month for {loanTenure * 12} months</p>
            </div>
          </div>

          {/* Breakdown Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 shadow-xl">
              <p className="text-gray-400 text-sm mb-1">Principal Amount</p>
              <p className="text-2xl font-bold text-white mb-1">₹{loanAmount.toLocaleString()}</p>
              <p className="text-xs text-gray-500">{principalPercentage}% of total</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 shadow-xl">
              <p className="text-gray-400 text-sm mb-1">Total Interest</p>
              <p className="text-2xl font-bold text-red-600 mb-1">₹{totalInterest.toLocaleString()}</p>
              <p className="text-xs text-gray-500">{interestPercentage}% of total</p>
            </div>
          </div>

          {/* Total Amount */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-400 text-sm font-semibold">Total Amount Payable</p>
              <p className="text-3xl font-bold text-white">₹{totalAmount.toLocaleString()}</p>
            </div>
            
            {/* Progress Bar Chart */}
            <div className="relative h-8 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-500 flex items-center justify-center"
                style={{ width: `${principalPercentage}%` }}
              >
                {principalPercentage > 15 && <span className="text-xs font-bold text-white">{principalPercentage}%</span>}
              </div>
              <div 
                className="absolute top-0 h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500 flex items-center justify-center"
                style={{ left: `${principalPercentage}%`, width: `${interestPercentage}%` }}
              >
                {interestPercentage > 15 && <span className="text-xs font-bold text-white">{interestPercentage}%</span>}
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex justify-center gap-6 mt-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                <span className="text-gray-400">Principal</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                <span className="text-gray-400">Interest</span>
              </div>
            </div>
          </div>

          {/* Payment Schedule Preview */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 shadow-xl">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-red-600" />
              Payment Summary
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Loan Period</span>
                <span className="font-semibold">{loanTenure} Years ({loanTenure * 12} Months)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Interest Rate (p.a.)</span>
                <span className="font-semibold">{interestRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Payments</span>
                <span className="font-semibold">{loanTenure * 12} EMIs</span>
              </div>
              <div className="border-t border-gray-700 pt-3 flex justify-between">
                <span className="text-gray-400">First EMI</span>
                <span className="font-bold text-red-600">₹{emi.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Footer */}
      <div className="mt-12 text-center text-sm text-gray-500 max-w-3xl mx-auto">
        <p className="mb-2">
          * This calculator provides an estimate of your EMI. Actual EMI may vary based on the lender's terms and conditions.
        </p>
        <p>
          * Interest rates and processing fees may differ across banks and financial institutions.
        </p>
      </div>
    </div>
  );
}
