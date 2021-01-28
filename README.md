# Contract Shark Error Utilities

> Test Utils Package

## Classes

<dl>
<dt><a href="#ApplicationError">ApplicationError</a></dt>
<dd><p>Base class for errors thrown by the application.
If a <code>nestedError</code> is given, it customizes the stacktrace in order to also
show the full stack trace of the originating error.</p>
</dd>
<dt><a href="#UnreachableCaseError">UnreachableCaseError</a></dt>
<dd><p>Thrown when code that is not supposed to be reached was actually reached. It can be used to make sure that a series of if-then-else or
cases in a switch statement over an enum or union types is exhaustive, in a type-safe way.
Errors of this kind represent a bug.</p>
</dd>
<dt><a href="#ConfigurationError">ConfigurationError</a></dt>
<dd><p>Thrown when startup configuration is incorrect.</p>
</dd>
<dt><a href="#TimeoutError">TimeoutError</a></dt>
<dd><p>Thrown when an event times out.</p>
</dd>
<dt><a href="#BlockFetchingError">BlockFetchingError</a></dt>
<dd><p>Thrown when an attempt to fetch a block fails.</p>
</dd>
<dt><a href="#PublicDataValidationError">PublicDataValidationError</a></dt>
<dd><p>Thrown when data does not match a specified format
Error messages must be safe to expose publicly</p>
</dd>
<dt><a href="#PublicInspectionError">PublicInspectionError</a></dt>
<dd><p>Thrown when an appointment fails inspection
Error messages must be safe to expose publicly</p>
</dd>
<dt><a href="#ArgumentError">ArgumentError</a></dt>
<dd><p>Thrown when incorrect arguments are supploed to a function</p>
</dd>
<dt><a href="#QueueConsistencyError">QueueConsistencyError</a></dt>
<dd><p>Thrown when an inconsistency in a queue is observed.</p>
</dd>
</dl>

<a name="ApplicationError"></a>

## ApplicationError

Base class for errors thrown by the application.
If a `nestedError` is given, it customizes the stacktrace in order to also
show the full stack trace of the originating error.

**Kind**: global class  
<a name="UnreachableCaseError"></a>

## UnreachableCaseError

Thrown when code that is not supposed to be reached was actually reached. It can be used to make sure that a series of if-then-else or
cases in a switch statement over an enum or union types is exhaustive, in a type-safe way.
Errors of this kind represent a bug.

**Kind**: global class  
<a name="ConfigurationError"></a>

## ConfigurationError

Thrown when startup configuration is incorrect.

**Kind**: global class  
<a name="TimeoutError"></a>

## TimeoutError

Thrown when an event times out.

**Kind**: global class  
<a name="BlockFetchingError"></a>

## BlockFetchingError

Thrown when an attempt to fetch a block fails.

**Kind**: global class  
<a name="PublicDataValidationError"></a>

## PublicDataValidationError

Thrown when data does not match a specified format
Error messages must be safe to expose publicly

**Kind**: global class  
<a name="PublicInspectionError"></a>

## PublicInspectionError

Thrown when an appointment fails inspection
Error messages must be safe to expose publicly

**Kind**: global class  
<a name="ArgumentError"></a>

## ArgumentError

Thrown when incorrect arguments are supploed to a function

**Kind**: global class  
<a name="QueueConsistencyError"></a>

## QueueConsistencyError

Thrown when an inconsistency in a queue is observed.

**Kind**: global class
