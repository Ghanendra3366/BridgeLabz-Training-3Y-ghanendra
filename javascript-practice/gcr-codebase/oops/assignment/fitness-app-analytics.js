"use strict";

class FitnessAnalytics {
    constructor(workoutData) {
        if (!Array.isArray(workoutData) || workoutData.length === 0) {
            throw new Error("Workout dataset must contain at least one user.");
        }
        this.workoutData = workoutData;
    }

    getActiveUsers() {
        return this.workoutData.filter((record) => record.steps > 7000);
    }

    getAverageCalories() {
        const calorieTotal = this.workoutData.reduce((total, record) => total + record.calories, 0);
        return calorieTotal / this.workoutData.length;
    }

    getUserSummary() {
        return this.workoutData.map((record) => `${record.user}: ${record.steps} steps, ${record.calories} calories`);
    }
}

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

const analytics = new FitnessAnalytics(workoutData);
console.log("Active users:", analytics.getActiveUsers().map((record) => record.user));
console.log(`Average calories: ${analytics.getAverageCalories().toFixed(2)}`);
console.log("User summaries:", analytics.getUserSummary());

try {
    new FitnessAnalytics([]);
} catch (error) {
    console.log(`Empty dataset rejected: ${error.message}`);
}