# Session Notes

Use this file to preserve learning progress between agent chats.

## Current position

- Stage: 1 — Foundations
- Block 1 — JavaScript fundamentals: complete
- Block 2 — TypeScript: in progress
- Covered: inference and annotations, unions, type aliases, interfaces, optional properties, and basic type narrowing
- Next: Optional chaining and its result type
- Status: Continue from the question at the end of this file

## Completed exercises

Completed prediction:

```javascript
const user = {
    name: "Illia",
    age: 25
};

const anotherUser = user;

anotherUser.age = 26;

console.log(user.age);
```

Learner predicted that `user.age` would be `26`, and explained that the two bindings reference the same object. Correct.

Follow-up completed prediction:

```javascript
const original = { age: 25 };
const copy = { ...original };

copy.age = 26;

console.log(original.age);
```

Learner predicted that `original.age` would remain `25`, correctly recognizing object spread as creating a separate top-level object.

The learner also correctly reasoned through nested object sharing, arrays and array spread, primitive assignment, object reassignment, and `const` property mutation versus rebinding. There is no outstanding exercise.

## Notes and misconceptions

Spread copies object properties into a new object, so changing a copied top-level property does not change the original.

This concept is often familiar from Dart but is not a framework-specific rule: JavaScript object identity and reference behavior remain the same.

Object spread is shallow: nested objects are copied by reference, not cloned.

Learner correctly predicted that mutating `b.details.score` also changes `a.details.score` because both bindings share the nested `details` object.

Learner correctly predicted that `[...names]` creates a separate top-level array and that `push` mutates only `copiedNames`.

Learner correctly predicted that copying an array of objects with spread creates a separate array but leaves the objects themselves shared.

Learner correctly predicted primitive reassignment behavior: incrementing `anotherScore` does not change `score`.

Learner initially predicted that reassigning `b` also rebinds `a`. The misconception was corrected conceptually: each variable has its own binding, while it may initially reference the same object.

Learner stated that mutating an object through a `const` binding is prohibited. It was clarified that mutation is allowed; rebinding the `const` variable is prohibited.

Learner correctly predicted that assigning `account.balance = 80` mutates the object referenced by a `const` binding.

Learner correctly identified that rebinding `second` is the line that errors. Before that line, `first` has been rebound to `{ value: 3 }`, so its `value` is `3`.

Learner correctly explained block scope and shadowing with `let` and `const`: an inner declaration is a separate binding, and a block-local binding cannot be accessed outside its block.

Learner correctly identified that redeclaring `let` in the same scope is an error, while redeclaring it in a nested block is allowed.

Learner correctly reasoned that function parameters and local variables are scoped to the function: `addTax(100)` returns `110`, while `taxRate` cannot be accessed outside `addTax`.

Learner correctly distinguished a function reference (`showTotal`) from a function call (`showTotal(100)`). They initially expected a function with no `return` to provide its logged value, then correctly predicted that the call logs `110` and evaluates to `undefined`. They correctly identified that `return price * 1.1` provides `110` to the caller.

Learner correctly rewrote a block-bodied arrow function as an expression-bodied arrow function. They predicted that a block-bodied arrow function without an explicit `return` evaluates to `undefined` and that assigning the function to another variable does not change that result when called.

Learner identified `formatName` as the callback passed to `runWithName` and predicted that passing `formatName("Illia")` instead would cause an error. The distinction is that `formatName` passes the function, while `formatName("Illia")` calls it immediately and passes its string result.

Learner correctly predicted the output of a `map` transformation and, after initially thinking it might mutate the original array, correctly predicted that `names` remains `["Ada", "Lin"]`. Reinforce that `map` returns a new array and is for transforming each element.

Learner correctly predicted that filtering `[1, 2, 3, 4]` for even numbers yields `[2, 4]`.

Learner correctly identified that `find` returns the first matching value (`3` for the first number greater than `2`), rather than an array.

Learner correctly predicted that `find` returns `undefined` when no item matches.

Learner correctly identified `0` as the initial accumulator for summation with `reduce`, followed the accumulation to `6`, and chose `1` as the initial value for multiplication.

Learner predicted the counter closure sequence (`1`, then `2`), identified that a separately created counter starts at `1`, and correctly predicted that the original counter's next call returns `3`. This demonstrates that each created counter has its own captured `count`, while repeated calls to the same counter update that state.

Learner correctly predicted that importing the named `double` function as `twice` via `import { double as twice }` still produces `8`. They understand that `twice` is a local alias for the existing named export, not another export that must exist in the source module.

Learner correctly predicted that a default export imported as `multiplyByTwo` produces `8`. Clarify that default imports omit braces and can use a chosen local name, unlike named imports, which use braces and match an exported name (unless aliased).

Learner correctly identified that an `async` function returns a Promise and that awaiting the Promise from `getNumber()` yields the value `42`.

Learner correctly predicted synchronous logs run before the `.then()` callback in the example, yielding `A`, `B`, then `42`.

Learner correctly predicted that the zero-delay timer callback runs after the Promise callback in the example. Explain the complete order as synchronous logs first, then Promise microtasks, then timer callbacks.

Completed the in-memory task-manager exercise. The learner implemented a `TaskManager` with private task and ID state, immutable replacement when completing a task, and copy-returning methods. During review, they recognized that copying an array alone does not copy its task objects. The final implementation returns copies from `addTask`, `findTask`, `completeTask`, and `getCompletedTasks`, and returns `undefined` when completing an unknown ID. The learner reports that the supplied `app.js` assertions all passed.

Started TypeScript fundamentals. Learner correctly reasoned that `let completed = false` infers `boolean` and assigning `"yes"` is rejected by TypeScript. They understand that annotations constrain assignments, function parameters are checked at call sites, and function return types can be inferred or explicitly checked.

Learner correctly identified unions with `|`, and learned that TypeScript's `number` type covers both integers and decimals. A function's inferred return type comes from its return expressions, not simply its input type; for example, both `toUpperCase()` and `toFixed()` return strings.

Learner practiced type aliases for unions and object shapes, and interface syntax for object shapes. An interface's required properties must be present; `extends` adds inherited properties. An optional property (`description?: string`) may be absent and reads as `string | undefined` under strict null checking. It does not get a default value. `null` is only possible if explicitly included in the type.

Clarify literal types when needed: `completed: false` in an interface restricts the property to the literal `false`; `completed: boolean` allows either boolean value. Initializing an object with `completed: false` sets a value; it does not change the property's declared type.

Learner used `typeof` and explicit null/undefined checks to narrow unions. They correctly identified that inside a guard checking an optional string property against `undefined`, the property is a `string`.

Teaching preference reinforced: only assign tasks when the learner likely knows the necessary concepts and syntax; introduce or scaffold unfamiliar syntax first. Do not run code the learner provides unless they explicitly ask.

Lesson stopped after optional chaining and nullability discussion.

Learner correctly narrowed the values of `upper` to `string | undefined` after initially considering `null` as a possible result. They learned that optional chaining short-circuits for both `null` and `undefined` and that this expression does not preserve `null` in `upper`.

Learner also learned the practical narrowing example:

```typescript
const upper = item.description?.toUpperCase();

if (upper !== undefined) {
  console.log(upper.length);
}
```

Inside the guard, TypeScript narrows `upper` to `string`.

They understood the general distinction between `null` and `undefined`: `null` can represent an intentional empty API value, while `undefined` commonly represents absence or lack of assignment. They chose `description: string | null` for an API contract where the property is always present and may be explicitly empty. This is a reasonable choice; the exact distinction should follow the API's actual contract rather than an assumed convention.

## Next step

Optional chaining and nullability are complete for now. On return, continue from the last successful understanding rather than replaying completed content. JavaScript fundamentals and the in-memory task-manager exercise are complete.
