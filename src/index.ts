/* eslint-disable no-console */
import http from 'http';

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Updated!');
  })
  .listen(8080, () => console.log('Server http://localhost:8080'));
