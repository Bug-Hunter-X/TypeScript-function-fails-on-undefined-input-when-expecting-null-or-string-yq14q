# TypeScript Undefined Handling Bug

This repository demonstrates a common error in TypeScript where a function designed to handle `null` values fails when encountering `undefined`.

The `greet` function attempts to handle both string and null inputs.  However, it lacks proper error handling for undefined inputs, resulting in a runtime `TypeError`.

The solution demonstrates how to correctly check for both `null` and `undefined` to prevent this error.

## Bug Report

The original `greet` function only checks for `null`. When called with `undefined`, it attempts to access the length property of undefined, leading to the runtime error.

## Solution

The solution modifies the `if` condition to check for both `null` and `undefined` using the `== null` check.