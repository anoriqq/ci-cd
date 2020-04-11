/* eslint-disable no-console */
import http from 'http';

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Updated at 2020-04-11 21:37');
  })
  .listen(8080, () => console.log('Server http://localhost:8080'));
