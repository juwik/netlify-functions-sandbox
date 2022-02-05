// exports.handler = async () => ({
//     statusCode: 200,
//     body: 'log in please',
// });

const qs = require('querystring');

exports.handler = async (event) => {
    const { login, password } = qs.parse(event.body);

    const isLogged = login === 'a' && password === 'a'
    return {
        statusCode: 200,
        body: JSON.stringify({ isLogged, login, password }),
    };
};