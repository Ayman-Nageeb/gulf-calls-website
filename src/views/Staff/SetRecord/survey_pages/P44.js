import { createDateQuestion } from "./functions";

export default {
  id: "post-index-page-44",
  title: "Post Index Data",
  questions: [
    createDateQuestion({
      text: "postindex Date (day/month/year)",
      placeholder: "day/month/year",
    }),
  ],
  next: "post-index-page-45",
};
