// prompt for page
exports.prompts = [
  {
    name: 'logic',
    type: 'confirm',
    message: 'use refast flux?'
  }
];

// answer for mod
exports.answers = function(answers, abc) {
  answers.name = answers.name.toLowerCase();
  answers.Name = answers.name.replace(/[\W_]+(.)/g, function(p, p1) {
    return p1.toUpperCase();
  }).replace(/^./, function(p) {
    return p.toUpperCase();
  });
  return answers;
};

// filter out files
exports.filter = function(source, data) {
  if (!data.logic) {
    return !/logic\.js$/.test(source);
  }
};
