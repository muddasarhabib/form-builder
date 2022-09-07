module.exports = {
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: "",
    DB: "form_builder",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};