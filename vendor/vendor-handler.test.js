const globalEventPool = require('../hub');
const { handleOrder } = require('./handler');

describe('Vendor Event Handler', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation();
    jest.spyOn(globalEventPool, 'emit');
  });

  afterEach(() => {
    console.log.mockRestore();
    globalEventPool.removeAllListeners();
    globalEventPool.emit.mockRestore();
  });

  test('should handle an order event and log the expected message', () => {
    const payload = {
      orderId: 'mock-order-id',
    };

    handleOrder(payload);

    expect(console.log).toHaveBeenCalledWith(`VENDOR: received order ${payload.orderId}`);
    expect(globalEventPool.emit).toHaveBeenCalledWith('pickup', payload);
  });
});
