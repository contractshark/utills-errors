/**
 * Base class for errors thrown by the application.
 * If a `nestedError` is given, it customizes the stacktrace in order to also
 * show the full stack trace of the originating error.
 */
export declare class ApplicationError extends Error {
  /**
   *
   * @param message The error message.
   * @param nestedError Optionally, the `Error` instance of the originating error.
   * @param name The name of the error shown in the stack trace; the `name` property is set to this value.
   *             Subclasses of `ApplicationError` should always pass their name.
   *             If not provided, the default value `"ApplicationError"` will be used.
   */
  constructor(message: string);
  constructor(message: string, nestedError: Error);
  constructor(message: string, nestedError: Error | undefined, name: string);
}
/**
 * Thrown when code that is not supposed to be reached was actually reached. It can be used to make sure that a series of if-then-else or
 * cases in a switch statement over an enum or union types is exhaustive, in a type-safe way.
 * Errors of this kind represent a bug.
 */
export declare class UnreachableCaseError extends ApplicationError {
  constructor(val: never, message?: string);
}
/**
 * Thrown when startup configuration is incorrect.
 */
export declare class ConfigurationError extends ApplicationError {
  constructor(message: string);
}
/**
 * Thrown when an event times out.
 **/
export declare class TimeoutError extends ApplicationError {
  constructor(message: string);
}
/**
 * Thrown when an attempt to fetch a block fails.
 */
export declare class BlockFetchingError extends ApplicationError {
  constructor(message: string);
  constructor(message: string, nestedError: Error);
}
/**
 * Thrown when data does not match a specified format
 * Error messages must be safe to expose publicly
 */
export declare class PublicDataValidationError extends ApplicationError {
  constructor(message: string);
}
/**
 * Thrown when an appointment fails inspection
 * Error messages must be safe to expose publicly
 */
export declare class PublicInspectionError extends ApplicationError {
  constructor(message: string, nestedError?: Error);
}
/**
 * Thrown when incorrect arguments are supploed to a function
 */
export declare class ArgumentError extends ApplicationError {
  readonly args: any[];
  constructor(message: string);
  constructor(message: string, ...args: any[]);
}
/**
 * Thrown when an inconsistency in a queue is observed.
 */
export declare class QueueConsistencyError extends ApplicationError {
  constructor(message: string);
}
