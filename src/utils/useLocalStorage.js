import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  try {
    // Getting stored value
    const saved = localStorage.getItem(key);

    // Parse the JSON only if the stored value is not undefined
    return saved ? JSON.parse(saved) : defaultValue;
  } catch (error) {
    // Handle the error (e.g., set a default value or log the error)
    console.error("Error parsing JSON:", error);
    return defaultValue;
  }
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

  useEffect(() => {
    try {
      // Storing input name
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Handle the error (e.g., log the error)
      console.error("Error storing data in localStorage:", error);
    }
  }, [key, value]);

  return [value, setValue];
};
