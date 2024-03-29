import { createNumericalQuestion } from "./functions";

export default {
  id: "mmol_l-index-data-page-23",
  title: "Index data (mmol/l)",
  questions: [
    createNumericalQuestion({
      text: "index Total Cholesterol (TC) (mmol/L)",
      range: { min: 0, max: 100, step: 0.1 },
      unit: "(TC) (mmol/L)",
    }),
    createNumericalQuestion({
      text: "index Low-Density Lipoprotein-C (LDL-C) (mmol/L)",
      range: { min: 0, max: 1.79, step: 0.1 },
      unit: "(LDL-C) (mmol/L)",
    }),
    createNumericalQuestion({
      text: "index High-Density Lipoprotein (HDL)(mmol/L)",
      range: { min: 0, max: 100, step: 0.1 },
      unit: "(HDL)(mmol/L)",
    }),
    createNumericalQuestion({
      text: "index Triglycide (TG) (mmol/L)",
      range: { min: 0, max: 4.6, step: 0.1 },
      unit: "(TG) (mmol/L)",
    }),
    createNumericalQuestion({
      text: "index Lipoprotein a (Lpa) (nmol/L)",
      range: { min: 7, max: 500, step: 0.1 },
      unit: "(Lpa) (nmol/L)",
    }),
    createNumericalQuestion({
      text: "index Creatinine (micro mol/L)",
      range: { min: 0, max: 1000, step: 0.1 },
      unit: "(micro mol/L)",
    }),
  ],
  next: "index-page-25",
};
