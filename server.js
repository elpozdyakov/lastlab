const express = require('express');
const app = express();
app.use(express.static('www'));
const atest = {'Done': {status: 'Сдашь сессию !!!', pic: 'https://lh3.googleusercontent.com/proxy/RrbiyycYt32It2IRxrh8h89nZXub6-2EkYas4XsOiyxs8qUwgR5BMuoaejztq7pxoyLwXPcc9txYLnyBqsnL4wdgdoI'}, 'Nedone':  {status: 'Отчислят',   pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmqNdhiEMmaNU-b8zjensZGN9R4Kv-aCdFV3AtdyHcpYo0XgB'}};

app.get('/www/:id', (req, res) => {
  const nameToLookup = req.params.id; 
  const val = atest[nameToLookup];
  if (val) { res.send(val) } 
  else { res.send({}) }
});
app.listen(3000, () => {console.log('Тут мой сайт http://localhost:3000/index.html');});
