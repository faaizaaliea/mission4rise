import React from "react";
const steps = ["Pilih Metode", "Bayar", "Selesai"];

export default function Stepper({ currentStep }) {
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div
            className={`step ${
              index + 1 < currentStep
                ? "done"
                : index + 1 === currentStep
                  ? "active"
                  : ""
            }`}
          >
            <div className="circle"></div>
            <span>{step}</span>
          </div>

          {index < steps.length - 1 && (
            <div
              className={`line ${index + 1 < currentStep ? "done" : ""}`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
