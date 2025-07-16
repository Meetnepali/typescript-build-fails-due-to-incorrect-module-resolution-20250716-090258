# TypeScript Discriminated Union Exhaustiveness Assessment

## Task Description
You maintain a shared TypeScript library that uses discriminated unions for different API response types. Recently, strict TypeScript safety guarantees for exhaustive handling of these types were lost after a configuration change. This has resulted in runtime errors when not all possible cases are handled in consumer code.

## Problem Statement
After a project configuration update, the TypeScript compiler no longer enforces exhaustive checking of all union types. As a result, missing a case in a switch statement does not yield a TypeScript compile-time error, and unhandled cases may now cause runtime failures. Your task is to restore compile-time safety so future missed cases are detected by TypeScript.

## Setup Instructions
1. Ensure Docker is installed and running on your system.
2. Clone or extract this repository locally.
3. Run `chmod +x install.sh run.sh` to make setup scripts executable.
4. Run `./run.sh` to build and execute the demonstration environment.

## What You Need To Do
- Investigate the current configuration and code to identify why TypeScript is not enforcing exhaustive handling of union types.
- Update the necessary configuration and/or code to restore compile-time errors for missed union cases in switch statements.

## Expected Outcomes
- After fixing the environment, removing or omitting a union case in a switch statement must cause a TypeScript compile-time error.
- Runtime errors for unhandled union member types must no longer occur.
- The TypeScript configuration enforces strict handling of all union types as intended.

## How To Verify Your Solution
- Attempt to build the project after your fix.
- Confirm that missing any case in the union in `handleApiResponse` causes a TypeScript compile-time error.
- Confirm that, with all cases handled, no runtime errors occur when processing any `ApiResponse` type.
