# cap 1

This repository contains the code for Phase 1 of the CAPS system, an event-driven package delivery management system implemented in Node.js. The goal of Phase 1 is to set up a pool of events and handler functions, allowing vendors to alert the system when they have packages to be picked up and drivers to be notified when there are packages to be delivered.

## Functionality

The implemented features in Phase 1 are as follows:

1. **Global Event Pool (HUB)**
   - Manages a pool of events using an EventEmitter.
   - Logs a timestamp and payload for every event.

2. **Vendor Client Application**
   - Alerts the system when a vendor has a package to be picked up.
   - Emits a "pickup" event to the Global Event Pool with the vendor order payload.
   - Listens for a "delivered" event and logs a message thanking the customer.

3. **Driver Client Application**
   - Notifies the driver when there is a package to be delivered.
   - Logs a message when the driver picks up an order and emits an "in-transit" event to the Global Event Pool.
   - Logs a confirmation message when the driver delivers the order and emits a "delivered" event to the Global Event Pool.

## Testing

The code includes unit tests for each event handler function using the Jest testing framework. The tests ensure that the handlers are called and run as expected, and they also verify if console.log() and .emit() were called with the expected arguments.

Please see the [Pull Request](https://github.com/OmarHamda1996/caps/pull/1) for more details on the implementation.

