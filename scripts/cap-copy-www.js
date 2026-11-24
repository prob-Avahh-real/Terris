const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const targets = [
  path.join(root, 'www'),
  path.join(root, 'android/app/src/main/assets/public'),
];

for (const dest of targets) {
  fs.mkdirSync(dest, { recursive: true });
  fs.copyFileSync(path.join(root, 'index.html'), path.join(dest, 'index.html'));
}
