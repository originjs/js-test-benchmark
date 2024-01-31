const fs = require('fs');
const path = require('path');

const times = process.env.COPY_DIR_TIMES ? process.env.COPY_DIR_TIMES : 10;
const ROOT_DIR = process.cwd();
const TEST_DIR = path.join(ROOT_DIR, 'packages');

function copyMulitDirWithTimes(times) {
  fs.readdir(TEST_DIR, (err, files) => {
    if (err) {
      return console.error('Unable to scan directory: ' + err);
    }

    for (let index = 0; index < times; index++) {
      files
        .filter((el) => el != 'js-common')
        .forEach((file) => {
          const filePath = path.join(TEST_DIR, file, 'tests/functions');
          const destPath = path.join(
            TEST_DIR,
            file,
            'tests/functions' + index + 'temp'
          );

          const stats = fs.statSync(filePath);
          if (stats.isDirectory()) {
            copyDir(filePath, destPath);
          }
        });
    }
  });
}

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }

  let entries = fs.readdirSync(src, {
    withFileTypes: true
  });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    let entryType = entry.isDirectory() ? 'directory' : 'file';

    if (entryType === 'directory') {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyMulitDirWithTimes(times);
