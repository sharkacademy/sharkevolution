// Task 2.4
let dialogue = "Alice said, \"I need your help.\"\nBob replied, \"What do you need, Alice?\"\nAlice: \"I need to solve this puzzle.\"\nBob: \"I think I can help. Let's start!\"";
alert(`Original string: ${dialogue}`);

let updatedDialogue = dialogue.replace(/\n/g, "");
alert(`Updated string: ${updatedDialogue}`);

let singleQuoteDialogue = dialogue.replace(/\"/g, "'");
alert(`Single Quote string: ${singleQuoteDialogue}`);
