var nodePandoc = require('node-pandoc');
var src, args, callback;
 
src = './dist/index.html';
 
// Arguments can be either a single string:
args = '-f html -t docx -o ./transformToDoc/test2.docx';
// Or in an array of strings -- careful no spaces are present:
// args = ['-f','html','-t','docx','-o','test2.docx'];
 
// Set your callback function
callback = function (err, result) {
 
  if (err) {
    console.error('Oh Nos: ',err);
  }
 
  // For output to files, the 'result' will be a boolean 'true'.
  // Otherwise, the converted value will be returned.
  console.log(result);
  return result;
};
 
// Call pandoc
nodePandoc(src, args, callback);