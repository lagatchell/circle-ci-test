const FTPClient = require('ftp');
const ENV = process.env;
const USERNAME = ENV.FTP_USERNAME;
const PASSWORD = ENV.FTP_PASSWORD;
const HOST = ENV.FTP_HOST;
const PORT = ENV.FTP_SERVER_PORT || 21;

const client = new FTPClient();
client.on('greeting', (msg) => {
  console.log(`Greeting: ${msg}`);
});

client.on('ready', () => {
  console.log("CONNECTED");
  client.end();
});

client.on('error', (err) => {
  console.log(err);
});

client.connect({
  host: HOST,
  user: USERNAME,
  password: PASSWORD,
});
