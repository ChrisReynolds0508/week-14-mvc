// utils/helpers.js
module.exports = {
    format_date: (date) => {
      // Check if date is valid
      if (!date) {
        return 'Invalid date'; // Or an empty string, or some other default value
      }
  
      // Ensure date is a Date object
      const dateObj = new Date(date);
      if (isNaN(dateObj.getTime())) {
        return 'Invalid date';
      }
  
      // Return formatted date
      return dateObj.toLocaleDateString();
    },
  };
  