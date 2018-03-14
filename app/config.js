/* All constant useful beetween environnement - prod vs local */
export const config = {
  secret: 'secretwesport2017',
  db: 'mongodb://wesport:devwesport@ds117935.mlab.com:17935/wesport', // test
  dbDev: 'mongodb://localhost:27017/socleMongo',
  dbTest: 'mongodb://localhost:27017/testSocleMongo',
  apiLocal: 'http://localhost:3000',
  apiProd: 'https://afternoon-dawn-41835.herokuapp.com',
};

// Mail Wesport
export const mailConfig = {
  mail: 'mettreUneAdresseMail.com',
  password: 'mdr',
};
