const globalEventPool = require('../hub');
const Chance = require('chance');

const chance = new Chance();

function simulatePickup(store) {
  const payload = {
    store,
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };

  globalEventPool.emit('pickup', payload);
}

module.exports = {
  simulatePickup,
};
