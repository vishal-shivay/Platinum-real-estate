"use client";
import { useState } from "react";

export default function MortgageCalculator() {
  const [propertyPrice, setPropertyPrice] = useState("Rs 50Lac");
  const [downPayment, setDownPayment] = useState("Rs 20Lac");
  const [interestRate, setInterestRate] = useState("3.5");
  const [loanTerm, setLoanTerm] = useState("30");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const price = parseFloat(propertyPrice.replace(/[^0-9.]/g, "")) * 100000;
    const down = parseFloat(downPayment.replace(/[^0-9.]/g, "")) * 100000;
    const principal = price - down;
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const months = parseFloat(loanTerm) * 12;
    const monthly = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    setResult(`₹${Math.round(monthly).toLocaleString("en-IN")}/month`);
  };

  return (
    <>
      <style>{`
        .mortgage-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 280px;
        }

        .mortgage-left {
          background-color: #c8102e;
          padding: 40px;
          color: #fff;
        }

        .mortgage-left h2 {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .mortgage-left p {
          font-size: 12px;
          margin-bottom: 24px;
          opacity: 0.9;
        }

        .mortgage-form-wrap {
          background-color: #fff;
          padding: 20px;
          margin-bottom: 16px;
        }

        .mortgage-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 0;
        }

        .mortgage-field label {
          font-size: 11px;
          display: block;
          margin-bottom: 4px;
          color: #555;
        }

        .mortgage-field input {
          width: 100%;
          padding: 6px 10px;
          font-size: 13px;
          border: none;
          border-bottom: 1px solid #ddd;
          color: #333;
          background-color: #fff;
          outline: none;
          box-sizing: border-box;
        }

        .mortgage-btn {
          background-color: #c8102e;
          color: #fff;
          border: none;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          width: 100%;
          justify-content: center;
          margin-top: 0;
        }

        .mortgage-btn:hover {
          background-color: #a50d26;
        }

        .mortgage-result {
          margin-top: 12px;
          font-size: 16px;
          font-weight: 700;
        }

        .mortgage-right {
          position: relative;
          overflow: hidden;
        }

        .mortgage-right-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(to bottom-right, #1a2535 50%, transparent 50%);
          z-index: 1;
        }

        .mortgage-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 768px) {
          .mortgage-section {
            grid-template-columns: 1fr;
          }
          .mortgage-right {
            height: 260px;
          }
        }

        @media (max-width: 480px) {
          .mortgage-left {
            padding: 28px 20px;
          }
          .mortgage-grid {
            grid-template-columns: 1fr;
          }
          .mortgage-right {
            height: 200px;
          }
        }
      `}</style>

      <section className="mortgage-section">
        <div className="mortgage-left">
          <h2>Mortage Calculator</h2>
          <p>Estimate your monthly payments and plan your budget</p>

          <div className="mortgage-form-wrap">
            <div className="mortgage-grid">
              <div className="mortgage-field">
                <label>Property Price</label>
                <input
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(e.target.value)}
                />
              </div>
              <div className="mortgage-field">
                <label>Down Payment</label>
                <input
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                />
              </div>
              <div className="mortgage-field">
                <label>Interest Rate (%)</label>
                <input
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </div>
              <div className="mortgage-field">
                <label>Loan Term (Years)</label>
                <input
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                />
              </div>
            </div>
            <button className="mortgage-btn" onClick={calculate}>
              🗓 Calculate Monthly Payment
            </button>
          </div>

          {result && (
            <p className="mortgage-result">Result: {result}</p>
          )}
        </div>

        <div className="mortgage-right">
          <div className="mortgage-right-overlay" />
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
            alt="Building"
          />
        </div>
      </section>
    </>
  );
}