const w2v = require('word2vec')

w2v.word2vec('./cleared_text.txt', "vectors.txt", { size: 300 }, () => {
  console.log("DONE")
})