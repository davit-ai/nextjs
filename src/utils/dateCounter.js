import nepalDate from './getNepalDate';

export default function dateUtils() {
  const startDate = '1999-08-21';
  // Parse the start date
  const start = new Date(startDate);
  const nepaliDate = nepalDate();

  // Calculate the difference in milliseconds
  const diff = nepaliDate - start;

  // Convert the difference to days
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

  console.log(diffDays); // Log the difference in days for debugging
  return diffDays;
}

const checkDate = dateUtils;
console.log(checkDate());
