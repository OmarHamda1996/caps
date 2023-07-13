const globalEventPool = require('../hub');

const handleOrder = (payload) => {
  console.log(`VENDOR: received order ${payload.orderId}`);
  globalEventPool.emit('pickup', payload);
};

module.exports = { handleOrder };
