export const getAnswerKey = (question:string) => {
  return (question || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]+/g, "").trim()
    .replace(/\s+/g, "-");
};
