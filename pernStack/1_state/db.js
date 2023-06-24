const Pool = require("pg").Pool;

const pool = new Pool({
  user: "gaurab",
  host: "",
  database: "dsc_bpl",
  password: "",
  port: 5432,
});

module.exports = pool;
