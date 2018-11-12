/**
 * Module dependencies.
 */
const Faker = require("./faker");
const dateFns = require("date-fns");
const uniqBy = require("lodash").uniqBy;
const sortBy = require("lodash").sortBy;

function getPlayer(playerId) {
  const faker = Faker.getFaker(playerId);
  const gender = faker.random.number(1);

  return {
    id: playerId,
    first_name: faker.name.firstName(gender),
    last_name: faker.name.lastName(gender),
    company: faker.company.companyName(),
    city_name: faker.address.city(),
    last_seen: faker.date.past(),
    picture: faker.image.avatar(),
    total_events: faker.random.number(500),
    total_friends: getPlayerTotalFriends(playerId)
  };
}

function getPlayerTotalFriends(playerId) {
  const faker = Faker.getFaker(playerId);
  return faker.random.number(200);
}

function getFriends(playerId) {
  const faker = Faker.getFaker(playerId);

  const numberOfFriends = getPlayerTotalFriends(playerId);
  const friends = [];

  for (let i = 0; i < numberOfFriends; i++) {
    friends.push(getPlayer(faker.random.number()));
  }

  return uniqBy(friends, "id");
}

const EVENT_NAMES = [
  "Running",
  "Foot 5",
  "Bowling",
  "Tennis",
  "Squash",
  "Chistera",
  "Padel",
  "Canyoning",
  "Golf",
  "Paintball",
  "Slackline",
  "Taekwondo"
];

function getEvent(eventId) {
  const faker = Faker.getFaker(eventId);

  const numberOfParticipants = faker.random.number(20);
  const participants = [];
  for (let i = 0; i < numberOfParticipants; i++) {
    participants.push(getPlayer(faker.random.number()));
  }

  return {
    id: eventId,
    name: EVENT_NAMES[faker.random.number() % EVENT_NAMES.length],
    date: faker.date.future(),
    participants: uniqBy(participants, "id")
  };
}

function getLastEvents(playerId) {
  const faker = Faker.getFaker(playerId);

  const numberOfEvents = faker.random.number(20);
  const events = [];
  for (let i = 0; i < numberOfEvents; i++) {
    events.push(getEvent(faker.random.number()));
  }

  return sortBy(uniqBy(events, "id"), "date", dateFns.compareAsc);
}

module.exports = {
  getPlayer,
  getFriends,
  getEvent,
  getLastEvents
};
