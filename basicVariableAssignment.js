// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

// Before
/*
var a == "code";
var b == "wa.rs";
var name == a + b;
*/

// After. My Solution:
const a = 'code';
const b = 'wa.rs';
const name = `${a}${b}`;
