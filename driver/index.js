const globalEventPool = require('../hub');

function emitDeliveredEvent(orderId) {
  const payload = {
    orderId,
  };

  globalEventPool.emit('delivered', payload);
}

globalEventPool.on('pickup', payload => {
  console.log(`DRIVER: picked up ${payload.orderId}`);
  globalEventPool.emit('in-transit', payload);
});

globalEventPool.on('in-transit', payload => {
  console.log(`DRIVER: delivered ${payload.orderId}`);
  emitDeliveredEvent(payload.orderId);
});
