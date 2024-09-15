function calculateTax(income, expenses) {
  if (
    income < 0 ||
    expenses < 0 ||
    income < expenses ||
    typeof income !== "number" ||
    typeof expenses !== "number"
  ) {
    return "Invalid Input";
  }
  return (income - expenses) * 0.2;
}

function sendNotification(email) {
  if (typeof email !== "string" || email.indexOf("@") === -1)
    return "Invalid Email";

  const strings = email.split("@");
  return `${strings[0]} sent you an email from ${strings[1]}`;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") return "Invalid Input";
  for (let char of name) {
    if (char === " ") continue;
    if (char - "0" >= 0 && char - "0" <= 9) return true;
  }
  return false;
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object" || Array.isArray(obj) === true)
    return "Invalid Input";

  let total = 0;

  total += obj.testScore + obj.schoolGrade + (obj.isFFamily === true ? 20 : 0);

  return total >= 80 ? true : false;
}

function waitingTime(waitingTimes, serialNumber) {
  if (Array.isArray(waitingTimes) === false || typeof serialNumber !== "number")
    return "Invalid Input";

  let total = 0;
  for (let num of waitingTimes) total += num;
  let avg = Math.round(total / waitingTimes.length);
  return (serialNumber - 1 - waitingTimes.length) * avg;
}
