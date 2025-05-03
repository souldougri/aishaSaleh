/**
 * Simple middleware for handling exceptions inside of async express routes
 * and passing them to your express error handlers.
 *
 * @param {Function} fn - The async function to handle exceptions for
 * @returns {Function} - The middleware function
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
