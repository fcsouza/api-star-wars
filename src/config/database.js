module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'api-star-wars',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
