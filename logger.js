var bunyan = require('bunyan')
var bformat = require('bunyan-format')

module.exports.default = function() {
    return bunyan.createLogger({
        name: 'chess-app',
        stream: bformat({
            outputMode: 'short',
            color: true
        })
    })
}
