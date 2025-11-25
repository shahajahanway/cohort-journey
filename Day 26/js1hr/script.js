// CHAPTER 1 — Variables & Declarations
undefined

console.log("1. What are  Variables ?");
console.info(`
    Image your room with boxes. 
    Each box has a label ( var box, let box , const box).
    And ander koi cheez rakhi hain ( value )

    JavaScript mein bhi aisa hi hota hain:
    variable = Named box
    . you can put a valye 
    . you can use it later 
    . you can change it ( depends on var,let,const)

    `);

let score = 50; // score box contains: 50

console.log("2. The  Types of Boxes in JavaScript ");

console.info = (`
    VLC >>  ( live the VLC  Player!)
    .V >> var ( very Old, very risky )
    .L >> let (Let me change it )
    .C >> const (Constant box, cannot change the box)
    `);

console.log(`
    var → The Old Grandpa
    Imagine a leaky box.
    You put something inside, but it can leak into any room (scope).
    Also you can put another box with same name — because Grandpa doesn’t care 😅

    Properties:
	•	❌ Block scope ko ignore karta hai
	•	❌ Redeclare allowed
	•	✔ Reassign allowed
	•	❗ Hoisted with undefined

    `);
var nscore = 10;
var  nscore = 20; // Allowed


console.log("let → Modern & Safe Box");
console.info(`
    This is a strong box.
	•	It can be reopened and the item inside changed
	•	But you cannot bring another box with the same name inside the same room
    Properties:
	•	✔ Block scoped { }
	•	❌ Cannot redeclare
	•	✔ Can reassign
	•	❗ Hoisted but inside TDZ (Temporal Dead Zone)

    `);
let age = 25;
age= 30; // ok 
// let age = 40; // Error

console.log(" const → The Locked Box");
console.info(`
    You buy a box, put something inside, and lock it permanently.
    You cannot:
	•	❌ Change the value
	•	❌ Redeclare it
	•	❌ Leave it empty (must assign value immediately)

    BUT if the value is object/array,
    you can still change inside the box (modify properties) — the box is locked, not the items.
    `);

const PI = 3.14; // cannot reassign 
const student = { name: "riya"};
student.name = "shaha"; // allowed
student = {}; // Box cannot be replaced



console.log("Hoisting =");

console.info(`
    JavaScript is lie a teacher perparing register before class begins. 
    Teacher writes all student names ( variabls names ) at the top Before attendance start.

    But var teacher writes:
    . Name: yes 
    . Value: undefined

    let & const  teacher writes: 
    . name: yes 
    value: ❌ not given (student is in corridor = TDZ
    until declared , you cannot talk to them >> ReferenceError)

    `);


console.log("Scope — Where are Boxes Visible?");

console.info(`
    There are 2 rooms:
    1. Block Scope { }
    •	let ❗
	•	const ❗
	•	var ❌ (doesn’t care about rooms)
    2. Function Scope
	•	var ✔
	•	let/const ✔ (but block-based too)
    `);

{
    var x = 6;
    let y = 10;
    const z = 20;
}
console.log(x); // 6
console.log(y); // ❌ Error
console.log(z); // ❌ Error

