const fs = require("fs-extra");
const stream = require('stream');
const Transform = stream.Transform || require('readable-stream').Transform;

function clearText(text) {
    return text
      .toLowerCase()
      .replace(/[^A-Za-zА-Яа-яЁёЇїІіҐґЄє0-9\-]|\s]/g, " ")
      .replace(/\s{2,}/g, " ");
  }

function read(filepath, output){

const readStream = fs.createReadStream(filepath);
const writeStream = fs.createWriteStream(output);


const reverseStream = new Transform({
  transform (data, encoding, callback) {
      const content = clearText(data.toString());
      this.push(content);
      callback();
  }
});

readStream.pipe(reverseStream).pipe(writeStream).on('finish', () => {
  console.log(`Finished reversing the contents of ${filepath} and saving the output to ${output}.`);
});

}

read('test.xml', './cleared_text.txt')