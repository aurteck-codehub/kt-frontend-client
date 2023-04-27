const { Client } = require('pg');

const client = new Client({
  host: 'karobar-2.cwvnw6sdb3et.eu-west-3.rds.amazonaws.com',
  port: 5432, // default Postgres port
  user: 'postgres',
  password: 'pakistan',
  database: 'postgres'
});

client.connect();

client.query('SELECT * FROM users', (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows);
  }
  client.end();
});
