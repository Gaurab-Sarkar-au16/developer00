const Pool = require("pg").Pool;

const pool = new Pool({
  user: "gaurab",
  host: "cs-db-instance.caz3rblbkur8.ap-south-1.rds.amazonaws.com",
  database: "dsc_bpl",
  password: "gaurab123",
  port: 5432,
});

module.exports = pool;
