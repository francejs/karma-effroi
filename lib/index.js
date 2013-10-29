var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var initEffroi = function(files) {
  files.unshift(createPattern(__dirname + '/effroi.js'));
};

initEffroi.$inject = ['config.files'];

module.exports = {
  'framework:effroi': ['factory', initEffroi]
};
