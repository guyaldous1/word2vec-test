var w2v = require( 'word2vec' );

let word = 'muggle'

w2v.loadModel("vectors.txt", (error, model) => {
    console.log("SIZE: ", model.size);
    console.log("WORDS: ", model.words);
    console.log(model.mostSimilar(word, 10));
});