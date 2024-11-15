// const fetch = require('node-fetch');
import fetch from 'node-fetch';
fetch('https://jsonplaceholder.typicode.com/comments/postId=1')
.then(response => response.json())
.then(userId => userId.forEach(userId=> console.log(userId.id)));
