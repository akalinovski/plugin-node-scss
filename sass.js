import sass from 'node-sass';

exports.translate = function(load) {
    var style = sass.renderSync({data: load.source});
    if (this.builder && this.transpiler) {
        load.metadata.format = 'esm';
        return 'export default ' + JSON.stringify(style) + ';';
    }

    load.metadata.format = 'amd';
    return 'def' + 'ine(function() {\nreturn ' + JSON.stringify(style) + ';\n});';
};