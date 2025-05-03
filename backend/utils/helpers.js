/**
 * Convert a string to a URL-friendly slug
 * @param {string} text - The text to convert to a slug
 * @returns {string} - The slugified text
 */
export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

/**
 * Format a date to a readable string
 * @param {Date} date - The date to format
 * @returns {string} - The formatted date string
 */
export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

/**
 * Truncate a string to a specified length
 * @param {string} str - The string to truncate
 * @param {number} length - The maximum length
 * @returns {string} - The truncated string
 */
export const truncateString = (str, length = 100) => {
  if (!str || str.length <= length) return str;
  return str.slice(0, length) + '...';
};

/**
 * Create directory upload paths
 * @param {string} dir - The directory to create
 * @returns {Object} - Object with destination and filename functions
 */
export const createUploadPath = (dir) => {
  return {
    destination: (req, file, cb) => {
      cb(null, `uploads/${dir}`);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const extension = file.originalname.split('.').pop();
      cb(null, `${uniqueSuffix}.${extension}`);
    },
  };
};
