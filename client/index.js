var request = require('request');
var Log = require('./random-words');
var logLevel = require('./log-levels');

const sendLogs = () => {
    const data = {
        message: Log({ exactly: 5, join: ' ' }),
        logLevel: logLevel({ exactly: 1, join: ' ' })
    };

    console.log('posting', data);
    request.post(
        'http://localhost:3000/logger',
        {
            json: data
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }
    );

}

// send a log every 2 seconds
setInterval(sendLogs, 2000);

