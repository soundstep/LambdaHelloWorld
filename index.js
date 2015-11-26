var soma = require('soma.js');
exports.handler = function (event, context) {

    var LambdaApp = soma.Application.extend({
        info: function() {
            return 'Successful lambda function ran with soma.js!';
        }
    });

    var app = new LambdaApp();

    context.succeed({
        info: app.info()
    });
};
