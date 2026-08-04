const fs = require('fs');

const data = fs.readFileSync('src/constants.ts', 'utf8');

// The file exports PROMPTS and PHASES. It's a TS file, so we can't easily require it.
// Wait, we can use regex to inject the videos into the arrays, or parse it using an AST, or just convert it temporarily.
// Since it's TS but mostly JSON, let's just do targeted replacements.
