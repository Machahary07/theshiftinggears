import CarLoanEMICalculator from "../components/CarLoanEMICalculator";
import FinanceLogos from "../components/FinanceLogos";

export default function EmiCalculator() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <CarLoanEMICalculator />
      <FinanceLogos />
    </div>
  );
}
