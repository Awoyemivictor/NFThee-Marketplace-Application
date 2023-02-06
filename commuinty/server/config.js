module.exports = {
  port: process.env.PORT || 8080,
  db: {
    prod:
      process.env.DATABASE_URL || 'mongodb+srv://mongodb:dev%40LN41@cluster0.gsaojbq.mongodb.net',
    test: 'mongodb+srv://mongodb:dev%40LN41@cluster0.gsaojbq.mongodb.net',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
