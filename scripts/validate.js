#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

// Check basic HTML structure
const checks = [
  { name: 'DOCTYPE', test: () => html.startsWith('<!DOCTYPE html>') },
  { name: '<title>', test: () => html.includes('<title>') },
  { name: '<script>', test: () => html.includes('<script>') },
  { name: '<style>', test: () => html.includes('<style>') },
];

let passed = 0;
let failed = 0;

for (const check of checks) {
  if (check.test()) {
    console.log(`  PASS: ${check.name}`);
    passed++;
  } else {
    console.error(`  FAIL: ${check.name}`);
    failed++;
  }
}

// Try to parse JS
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
  try {
    new Function(scriptMatch[1]);
    console.log('  PASS: JavaScript syntax');
    passed++;
  } catch (e) {
    console.error(`  FAIL: JavaScript syntax - ${e.message}`);
    failed++;
  }
} else {
  console.error('  FAIL: No <script> block found');
  failed++;
}

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
