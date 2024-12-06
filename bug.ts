function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!

// The bug is that if name is undefined instead of null, the code will throw an error.
// This is because the === null check only checks for null values, not undefined values.

console.log(greet(undefined)); // Error: TypeError: Cannot read properties of undefined (reading 'length')