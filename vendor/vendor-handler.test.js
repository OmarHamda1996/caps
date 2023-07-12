const globalEventPool = require('../hub');
const { handleOrder } = require('./handler');

jest.mock('events', () => {
  const EventEmitter = jest.requireActual('events');
  return {
    __esModule: true,
    default: class extends EventEmitter {
      emit(event, payload) {
        console.log(`EVENT: ${event}\n${JSON.stringify(payload, null, 2)}`);
        super.emit(event, payload);
      }
    },
  };
});

describe('Vendor Event Handler', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    console.log.mockRestore();
    globalEventPool.removeAllListeners();
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
