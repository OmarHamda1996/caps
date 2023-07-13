const { EventEmitter } = require('events');

const globalEventPool = new EventEmitter();

globalEventPool.on('pickup', payload => {
  const timestamp = new Date().toISOString();
  console.log(`EVENT: ${timestamp}\n${JSON.stringify(payload, null, 2)}`);
});

module.exports = globalEventPool;
