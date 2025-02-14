// Example email validation function (you can use a library for this)
export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// SQL Injection Check (Basic Example - Improve this!)
export const isSQLInjection = (value: string): boolean => {
  if (!value) return false; // Handle null or undefined values

  // Very basic and INCOMPLETE check.  DO NOT rely on this for serious security.
  const dangerousKeywords = [
    "SELECT",
    "INSERT",
    "UPDATE",
    "DELETE",
    "DROP",
    "WHERE",
    ";",
    "--",
    "/*",
    "*/",
  ]; // Expand as needed

  const lowerCaseValue = value.toUpperCase();

  for (const keyword of dangerousKeywords) {
    if (lowerCaseValue.includes(keyword)) {
      return true; // Potential SQL injection
    }
  }

  // Check for encoded characters that might be used in SQL injection
  const encodedCharacters = ["'", '"', "=", "<", ">"];
  for (const char of encodedCharacters) {
    if (value.includes(char)) {
      return true;
    }
  }

  return false; // No SQL injection detected (basic check)
};

export const isValidDate = (dateString: string) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(dateString);
};

export const isFutureDate = (dateString: string) => {
  const today = new Date();
  const inputDate = new Date(dateString);
  return inputDate > today;
};

export const calculateAge = (dateString: string) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};
