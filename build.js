const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const FS_DELAY = 10;

const content = fs.readFileSync(path.join(__dirname, 'jsmpeg.min.js'), 'utf8');
const wrapped = `${content}module.exports=JSMpeg;`;

exec('mkdir -p ./lib', () => {
  fs.writeFileSync(path.join(__dirname, 'lib', 'index.js'), wrapped);
});



