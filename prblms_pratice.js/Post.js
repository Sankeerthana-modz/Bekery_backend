const url = 'https://jsonplaceholder.typicode.com/posts'; 
const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };
  fetch(url, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
      .then(response => response.json());
       .then(data => console.log(data));
//   .catch(error => console.error('Error':,error))