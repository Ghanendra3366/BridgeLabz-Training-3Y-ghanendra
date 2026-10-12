// Build sample records and report each value alongside its JavaScript type.
const userName = "Aarav";
const accountBalance = 2450.75;
const isMember = true;
const favoriteCategories = ["books", "travel"];
const profile = { city: "Bengaluru", plan: "standard" };
const middleName = null;
let referralCode;

// Arrays need Array.isArray(); typeof null is "object" in JavaScript.
const typeOfValue = (value) => {
    if (value === null) {
        return "null (typeof object)";
    }
    if (Array.isArray(value)) {
        return "array (typeof object)";
    }
    return typeof value;
};

const dataSummary = [
    { label: "User name", value: userName, type: typeOfValue(userName) },
    { label: "Account balance", value: accountBalance, type: typeOfValue(accountBalance) },
    { label: "Member", value: isMember, type: typeOfValue(isMember) },
    { label: "Favorite categories", value: JSON.stringify(favoriteCategories), type: typeOfValue(favoriteCategories) },
    { label: "Profile", value: JSON.stringify(profile), type: typeOfValue(profile) },
    { label: "Middle name", value: middleName, type: typeOfValue(middleName) },
    { label: "Referral code", value: String(referralCode), type: typeOfValue(referralCode) }
];

// One table keeps the label, readable value, and detected type together.
console.table(dataSummary);