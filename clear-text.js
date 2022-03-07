// var w2v = require( 'word2vec' );
const fs = require("fs-extra");

function clearText(text) {
    return text
      .toLowerCase()
      .replace(/[^A-Za-zА-Яа-яЁёЇїІіҐґЄє0-9\-]|\s]/g, " ")
      .replace(/\s{2,}/g, " ");
  }

async function clear(filePath) {
  const contentRaw = await fs.readFile(filePath);
  const content = clearText(contentRaw.toString());
  return fs.writeFile('./cleared_text.txt', content);
}

clear('text.txt')