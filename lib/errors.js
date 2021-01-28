"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
exports.QueueConsistencyError = exports.ArgumentError = exports.PublicInspectionError = exports.PublicDataValidationError = exports.BlockFetchingError = exports.TimeoutError = exports.ConfigurationError = exports.UnreachableCaseError = exports.ApplicationError = void 0;
/**
 * Base class for errors thrown by the application.
 * If a `nestedError` is given, it customizes the stacktrace in order to also
 * show the full stack trace of the originating error.
 */
var ApplicationError = /** @class */ (function (_super) {
  __extends(ApplicationError, _super);
  function ApplicationError(message, nestedError, name) {
    if (name === void 0) {
      name = "ApplicationError";
    }
    var _this = _super.call(this, message) || this;
    _this.name = name;
    if (nestedError) {
      // As the stack property is not standard (and browsers might differ in behavior compared to Node's implementation),
      // we guard for its existence and keep the behavior simple.
      if (nestedError.stack != undefined && _this.stack != undefined) {
        // Concatenate the stack traces
        _this.stack += "\nCaused by: " + nestedError.stack;
      }
    }
    return _this;
  }
  return ApplicationError;
})(Error);
exports.ApplicationError = ApplicationError;
/**
 * Thrown when code that is not supposed to be reached was actually reached. It can be used to make sure that a series of if-then-else or
 * cases in a switch statement over an enum or union types is exhaustive, in a type-safe way.
 * Errors of this kind represent a bug.
 */
var UnreachableCaseError = /** @class */ (function (_super) {
  __extends(UnreachableCaseError, _super);
  function UnreachableCaseError(val, message) {
    var _this = this;
    var msg = "Unreachable code: " + val;
    _this =
      _super.call(this, message ? message + " " + msg : msg, undefined, "UnreachableCaseError") ||
      this;
    return _this;
  }
  return UnreachableCaseError;
})(ApplicationError);
exports.UnreachableCaseError = UnreachableCaseError;
/**
 * Thrown when startup configuration is incorrect.
 */
var ConfigurationError = /** @class */ (function (_super) {
  __extends(ConfigurationError, _super);
  function ConfigurationError(message) {
    return _super.call(this, message, undefined, "ConfigurationError") || this;
  }
  return ConfigurationError;
})(ApplicationError);
exports.ConfigurationError = ConfigurationError;
/**
 * Thrown when an event times out.
 **/
var TimeoutError = /** @class */ (function (_super) {
  __extends(TimeoutError, _super);
  function TimeoutError(message) {
    return _super.call(this, message, undefined, "TimeoutError") || this;
  }
  return TimeoutError;
})(ApplicationError);
exports.TimeoutError = TimeoutError;
/**
 * Thrown when an attempt to fetch a block fails.
 */
var BlockFetchingError = /** @class */ (function (_super) {
  __extends(BlockFetchingError, _super);
  function BlockFetchingError(message, nestedError) {
    return _super.call(this, message, nestedError, "BlockFetchingError") || this;
  }
  return BlockFetchingError;
})(ApplicationError);
exports.BlockFetchingError = BlockFetchingError;
/**
 * Thrown when data does not match a specified format
 * Error messages must be safe to expose publicly
 */
var PublicDataValidationError = /** @class */ (function (_super) {
  __extends(PublicDataValidationError, _super);
  function PublicDataValidationError(message) {
    return _super.call(this, message, undefined, "PublicDataValidationError") || this;
  }
  return PublicDataValidationError;
})(ApplicationError);
exports.PublicDataValidationError = PublicDataValidationError;
/**
 * Thrown when an appointment fails inspection
 * Error messages must be safe to expose publicly
 */
var PublicInspectionError = /** @class */ (function (_super) {
  __extends(PublicInspectionError, _super);
  function PublicInspectionError(message, nestedError) {
    return _super.call(this, message, nestedError, "PublicInspectionError") || this;
  }
  return PublicInspectionError;
})(ApplicationError);
exports.PublicInspectionError = PublicInspectionError;
/**
 * Thrown when incorrect arguments are supploed to a function
 */
var ArgumentError = /** @class */ (function (_super) {
  __extends(ArgumentError, _super);
  function ArgumentError(message) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    var _this = _super.call(this, message, undefined, "ArgumentError") || this;
    _this.args = args;
    return _this;
  }
  return ArgumentError;
})(ApplicationError);
exports.ArgumentError = ArgumentError;
/**
 * Thrown when an inconsistency in a queue is observed.
 */
var QueueConsistencyError = /** @class */ (function (_super) {
  __extends(QueueConsistencyError, _super);
  function QueueConsistencyError(message) {
    return _super.call(this, message, undefined, "QueueConsistencyError") || this;
  }
  return QueueConsistencyError;
})(ApplicationError);
exports.QueueConsistencyError = QueueConsistencyError;
