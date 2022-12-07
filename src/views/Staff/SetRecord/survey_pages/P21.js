import { createSelectQuestion } from "./functions";

export default {
  id: "pre-index-page-21",
  title: "Pre Index Data",
  questions: [
    createSelectQuestion({
      text: "pre_index Anticoagulant treatment type",
      validValues: [
        "Aspirin",
        "Clopidogrel",
        "Glycoprotein IIb/IIIa inhibitors",
        "Warfarin",
      ],
      hasCustom: true,
      radioView: true,  
    }),
  ],
  next: "index-page-22",
};
