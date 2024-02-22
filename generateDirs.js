import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const slidesDir = path.join(__dirname, 'dist');
const dirs = fs.readdirSync(slidesDir)
  .filter(f => fs.statSync(path.join(slidesDir, f)).isDirectory());
const linksHtml = dirs.map(dir => {
  const mdFile = path.join('slides', dir, dir+'.md');
  if (mdFile) {
    const mdContent = fs.readFileSync(mdFile, 'utf-8');
    const match = mdContent.match(/^title:\s*(.+)$/m);
    const title = match?.[1]?.trim() ;
    return `<li><a href="${dir}">${title}</a></li>`;
  }
  return `<li><a href="${dir}">${dir}</a></li>`;
}).join('\n');
const linksBlock = `<ul>\n${linksHtml}\n</ul>`;
const distIndex = path.join(__dirname, 'slides/index.html');

if (fs.existsSync(distIndex)) {
  let html = fs.readFileSync(distIndex, 'utf-8');
  html = html.replace('</body>', `${linksBlock}\n</body>`);
  const destIndex = path.join(__dirname, 'dist', 'index.html');
  fs.writeFileSync(destIndex, html, 'utf-8');
}

