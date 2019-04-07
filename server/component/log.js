/**
 * This file is meant for Logging in server console
 *   - type of logs
 @messsge - content
 */
exports.dedug = function(message) {
  console.log("DEBUG "+ message);
}
exports.info = function(message) {
  console.log(message);
}
exports.error = function(message) {
  console.log(message);
}