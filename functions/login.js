// exports.handler = async () => ({
//     statusCode: 200,
//     body: 'log in please',
// });

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

const qs = require("querystring");

exports.handler = async (event) => {
  if (!event.body) {
    return {
      statusCode: 400,
    };
  }
  const { login, password } = JSON.parse(event.body);

  const isLogged = login === "007" && password === "asd";

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ isLogged }),
  };
};
