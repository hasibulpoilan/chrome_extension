module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "092003",
  DB: "flags",
  dialect: "postgres",
  PORT: 3000,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
