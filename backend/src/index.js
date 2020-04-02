const express = require('express'); //importando o modulo express para variavel express
const cors = require('cors');
const app = express();  //variavel q vai armazenar a aplicacao

const routes = require('./routes'); //importando as rotas

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);   //aplicacao vai ouvir a porta  3333 -> localhost:3333

/*
Metodos http
get -> buscar informacaoes do back-end
post -> criar uma irformacao no back-end
put -> alterar uma informacao no back-end
delete -> deletar uma informacao no back-end
*/

/*
tipos de parametros
query params -> parametros enviados na rota apos "?" (filtros, paginacao)
routs params -> parametros utilizados para identificar recursos
request body -> corpo da requisicao, utilizado para criar ou alterar recursos
*/

/**
 * SQL -> MySQL, sqlite, postgresql, oracel, microsoft sql server
 * noSQL -> MongoDB, CouchDB, etc
 */

/** 
 * Driver ->  SELECT * FROM users
 * Query Builder -> table('users').select('*').where()
*/

/*adicionar rota principal, passando uma funcao como segundo paramentro,
sendo o primeiro a requisicao e o segundo a resposta*/

