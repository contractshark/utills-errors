"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueConsistencyError = exports.ArgumentError = exports.PublicInspectionError = exports.PublicDataValidationError = exports.BlockFetchingError = exports.TimeoutError = exports.ConfigurationError = exports.UnreachableCaseError = exports.ApplicationError = void 0;
/**
 * Base class for errors thrown by the application.
 * If a `nestedError` is given, it customizes the stacktrace in order to also
 * show the full stack trace of the originating error.
 */
class ApplicationError extends Error {
  constructor(message, nestedError, name = "ApplicationError") {
    super(message);
    this.name = name;
    if (nestedError) {
      // As the stack property is not standard (and browsers might differ in behavior compared to Node's implementation),
      // we guard for its existence and keep the behavior simple.
      if (nestedError.stack != undefined && this.stack != undefined) {
        // Concatenate the stack traces
        this.stack += "\nCaused by: " + nestedError.stack;
      }
    }
  }
}
exports.ApplicationError = ApplicationError;
/**
 * Thrown when code that is not supposed to be reached was actually reached. It can be used to make sure that a series of if-then-else or
 * cases in a switch statement over an enum or union types is exhaustive, in a type-safe way.
 * Errors of this kind represent a bug.
 */
class UnreachableCaseError extends ApplicationError {
  constructor(val, message) {
    const msg = `Unreachable code: ${val}`;
    super(message ? `${message} ${msg}` : msg, undefined, "UnreachableCaseError");
  }
}
exports.UnreachableCaseError = UnreachableCaseError;
/**
 * Thrown when startup configuration is incorrect.
 */
class ConfigurationError extends ApplicationError {
  constructor(message) {
    super(message, undefined, "ConfigurationError");
  }
}
exports.ConfigurationError = ConfigurationError;
/**
 * Thrown when an event times out.
 **/
class TimeoutError extends ApplicationError {
  constructor(message) {
    super(message, undefined, "TimeoutError");
  }
}
exports.TimeoutError = TimeoutError;
/**
 * Thrown when an attempt to fetch a block fails.
 */
class BlockFetchingError extends ApplicationError {
  constructor(message, nestedError) {
    super(message, nestedError, "BlockFetchingError");
  }
}
exports.BlockFetchingError = BlockFetchingError;
/**
 * Thrown when data does not match a specified format
 * Error messages must be safe to expose publicly
 */
class PublicDataValidationError extends ApplicationError {
  constructor(message) {
    super(message, undefined, "PublicDataValidationError");
  }
}
exports.PublicDataValidationError = PublicDataValidationError;
/**
 * Thrown when an appointment fails inspection
 * Error messages must be safe to expose publicly
 */
class PublicInspectionError extends ApplicationError {
  constructor(message, nestedError) {
    super(message, nestedError, "PublicInspectionError");
  }
}
exports.PublicInspectionError = PublicInspectionError;
/**
 * Thrown when incorrect arguments are supploed to a function
 */
class ArgumentError extends ApplicationError {
  constructor(message, ...args) {
    super(message, undefined, "ArgumentError");
    this.args = args;
  }
}
exports.ArgumentError = ArgumentError;
/**
 * Thrown when an inconsistency in a queue is observed.
 */
class QueueConsistencyError extends ApplicationError {
  constructor(message) {
    super(message, undefined, "QueueConsistencyError");
  }
}
exports.QueueConsistencyError = QueueConsistencyError;
//# sourceMappingURL=errors.js.map
