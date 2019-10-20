const FTPClient = require('ftp');
const ENV = process.env;
const USERNAME = ENV.FTP_USERNAME;
const PASSWORD = ENV.FTP_PASSWORD;
const HOST = ENV.FTP_HOST;
const PORT = ENV.FTP_SERVER_PORT || 21;

const client = new FTPClient();
client.on('ready', function () {
  console.log("CONNECTED");
  client.end();
});


client.connect({
  host: HOST,
  port: PORT,
  user: USERNAME,
  password: PASSWORD,
});
