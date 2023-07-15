const globalEventPool = require('../../hub');
const { handlePickup, handleDelivery } = require('./handler');

describe('Driver Event Handler', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation();
    jest.spyOn(globalEventPool, 'emit');
  });

  afterEach(() => {
    console.log.mockRestore();
    globalEventPool.removeAllListeners();
    globalEventPool.emit.mockRestore();
  });

  test('should handle a pickup event and log the expected message', () => {
    const payload = {
      orderId: 'mock-order-id',
    };

    handlePickup(payload);

    expect(console.log).toHaveBeenCalledWith(`DRIVER: Pickup event received for order ${payload.orderId}`);
    expect(globalEventPool.emit).toHaveBeenCalledWith('in-transit', payload);
  });

  test('should handle a delivery event and log the expected message', () => {
    const payload = {
      orderId: 'mock-order-id',
    };

    handleDelivery(payload);

    expect(console.log).toHaveBeenCalledWith(`DRIVER: Delivery event received for order ${payload.orderId}`);
    expect(globalEventPool.emit).toHaveBeenCalledWith('delivered', payload);
  });
});