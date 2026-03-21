const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '..', 'public', 'og-image.svg');
const pngPath = path.join(__dirname, '..', 'public', 'og-image.png');

const svgBuffer = fs.readFileSync(svgPath);

sharp(svgBuffer)
  .png()
  .toFile(pngPath)
  .then(() => {
    console.log('✅ OG image created:', pngPath);
  })
  .catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  });