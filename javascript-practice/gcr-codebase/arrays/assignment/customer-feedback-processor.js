// Check for negative keywords and count the words in the feedback.
const feedback = "Great product! Fast delivery and amazing sound quality!";
const words = feedback.trim().split(/\s+/);
const normalizedFeedback = feedback.toLowerCase();
const containsNegativeFeedback = normalizedFeedback.includes("bad") || normalizedFeedback.includes("poor");
const feedbackResult = containsNegativeFeedback ? "Needs Improvement" : "Positive Feedback";

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${words.length}`);
console.log(`Result: ${feedbackResult}`);