const fs = require('fs');

const part1 = JSON.parse(fs.readFileSync('phases_part1.json', 'utf8'));
const part2 = JSON.parse(fs.readFileSync('phases_part2.json', 'utf8'));
const part3 = JSON.parse(fs.readFileSync('phases_part3.json', 'utf8'));
const part4 = JSON.parse(fs.readFileSync('phases_part4.json', 'utf8'));

const allPhases = [...part1, ...part2, ...part3, ...part4];

const constantsPath = './src/constants.ts';
const constantsContent = fs.readFileSync(constantsPath, 'utf8');

const phasesRegex = /export const PHASES: Phase\[\] = \[[\s\S]*?\];/;

const newPhasesString = `export const PHASES: Phase[] = ${JSON.stringify(allPhases, null, 2)};`;

const updatedContent = constantsContent.replace(phasesRegex, newPhasesString);

fs.writeFileSync(constantsPath, updatedContent);

console.log('Successfully updated PHASES in src/constants.ts');
