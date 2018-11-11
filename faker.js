const Faker = require("faker/lib");

module.exports.getFaker = (seed = 0) => {
  const faker = new Faker({ locales: require("faker/lib/locales") });
  faker.locale = "fr";
  faker.seed(seed);
  return faker;
};
