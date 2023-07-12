const globalEventPool = require('../hub');

globalEventPool.on('delivered', payload => {
  console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
});
