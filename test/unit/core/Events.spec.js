const Events = require("../../../src/core/Events");

describe('Events.on', () => {
	it('should be able to add callback to object under event name', () => {
		// Arrange
		let object = {};
        let eventNames = 'testEvent';
        let callback = () => { return true; };

		// Act
		Events.on(object, eventNames, callback);
		
		// Assert
		expect(object.events[eventNames][0]).toEqual(callback);
	});

	it('returned callback should be the same ass passed callback', () => {
		// Arrange
		let object = {};
        let eventNames = 'testEvent';
        let callback = () => { return true; };

		// Act
		let result = Events.on(object, eventNames, callback);
		
		// Assert
		expect(result).toEqual(callback);
	});

	it('should be able to add callback to object with existing events under event name', () => {
		// Arrange
		let object = {};
        let eventNames = 'testEvent';
		object.events = {};
		object.events[eventNames] = [ () => { return false;  } ]; 
		let callback = () => { return true; };

		// Act
		Events.on(object, eventNames, callback);

		// Assert
		expect(object.events[eventNames][1]).toEqual(callback);
	});

	it('should be able to add an undefinded callback to object under event name', () => {
		// Arrange
		let object = {};
        let eventNames = 'testEvent';
        let callback = undefined;

		// Act
		Events.on(object, eventNames, callback);
		
		// Assert
		expect(object.events[eventNames][0]).toEqual(callback);
	});

	it('should not be able to add callback to object under undefined event name', () => {
		// Arrange
		let object = {};
        let eventNames = undefined;
        let callback = () => { return true; };

		// Act
		let result = () => Events.on(object, eventNames, callback);
		
		// Assert
		expect(result).toThrow(/^Cannot .* properties of undefined \(.* '.*'\)$/);
	});

	it('should be not able to add callback to undefined object under event name', () => {
		// Arrange
		let object = undefined;
        let eventNames = 'testEvent';
        let callback = () => { return true; };

		// Act
		let result = () => Events.on(object, eventNames, callback);
		
		// Assert
		expect(result).toThrow(/^Cannot .* properties of undefined \(.* '.*'\)$/);
	});
});

describe('Events.off', () => {
	it('should be able to remove callback from object with event name', () => {
		// Arrange
		let object = {};
		let eventNames = 'testEvent';
		let callback = () => { return true; };
		Events.on(object, eventNames, callback);

		// Act
		Events.off(object, eventNames, callback);
		
		// Assert
		expect(object.events[eventNames].length).toEqual(0);
	});

	it('should be able to remove callback from object with existing events under same event name', () => {
		// Arrange
		let object = {};
		let eventNames = 'testEvent';
		let callback1 = () => { return false; };
		let callback2 = () => { return true; };
		Events.on(object, eventNames, callback1);
		Events.on(object, eventNames, callback2);

		// Act
		Events.off(object, eventNames, callback1);

		// Assert
		expect(object.events[eventNames][0]).toEqual(callback2);
	});

	it('should be able to remove undefinded callback from object under event name', () => {
		// Arrange
		let object = {};
		let eventNames = 'testEvent';
		let callback = undefined;
		Events.on(object, eventNames, callback);

		// Act
		Events.off(object, eventNames, callback);
		
		// Assert
		expect(object.events[eventNames].length).toEqual(0);
	});

	it('should be able to remove all callbacks from object with undefined event name', () => {
		// Arrange
		let object = {};
		let eventNames = 'testEvent';
		let callback1 = () => { return false; };
		let callback2 = () => { return true; };
		Events.on(object, eventNames, callback1);
		Events.on(object, eventNames, callback2);
		let newEventNames = undefined;

		// Act
		Events.off(object, newEventNames, callback2);
		
		// Assert
		expect(object.events).toEqual({});
	});

	it('should be able to remove callback from object with callback as eventNames', () => {
		// Arrange
		let object = {};
		let eventNames = 'testEvent';
		let callback = () => { return true; };
		Events.on(object, eventNames, callback);

		callback = eventNames.slice(0);
		eventNames = 'function';
		
		// Act
		Events.off(object, eventNames, callback);
		
		// Assert
		expect(object.events[eventNames].length).toEqual(0);
	});

	it('should be able to remove single callback from object with multiple eventNames even when eventNames to remove match multiple events.', () => {
		// Arrange
		let object = {};
		let eventNames1 = 'testEvent1';
		let callback1 = () => { return true; };
		let eventNames2 = 'testEvent2';
		let callback2 = () => { return true; };
		Events.on(object, eventNames1, callback1);
		Events.on(object, eventNames2, callback2);
		let eventNamesToRemove = 'testEvent1 testEvent2';
		
		// Act
		Events.off(object, eventNamesToRemove, callback1);
		
		// Assert
		expect(object.events[eventNames1].length).toEqual(0);
		expect(object.events[eventNames2].length).toEqual(1);
	});

	it('should be able to remove multiple callbacks from object with multiple eventNames.', () => {
		// Arrange
		let object = {};
		let eventNames1 = 'testEvent1';
		let callback1 = () => { return true; };
		let eventNames2 = 'testEvent2';
		Events.on(object, eventNames1, callback1);
		Events.on(object, eventNames2, callback1);
		let eventNamesToRemove = 'testEvent1 testEvent2';
		
		// Act
		Events.off(object, eventNamesToRemove, callback1);
		
		// Assert
		expect(object.events[eventNames1].length).toEqual(0);
		expect(object.events[eventNames2].length).toEqual(0);
	});

	it('should not be able to remove any callbacks from object with multiple eventNames when callback to remove was not set.', () => {
		// Arrange
		let object = {};
		let eventNames1 = 'testEvent1';
		let callback1 = () => { return true; };
		let eventNames2 = 'testEvent2';
		Events.on(object, eventNames1, callback1);
		Events.on(object, eventNames2, callback1);
		let eventNamesToRemove = 'testEvent1 testEvent2';
		let callbackToRemove = () => { return false; }
		
		// Act
		Events.off(object, eventNamesToRemove, callbackToRemove);
		
		// Assert
		expect(object.events[eventNames1].length).toEqual(1);
		expect(object.events[eventNames2].length).toEqual(1);
	});

	it('should throw an error when removing any callbacks when no events were set.', () => {
		// Arrange
		let object = {};
		let eventNamesToRemove = 'testEvent1 testEvent2';
		let callbackToRemove = () => { return false; }
		
		// Act
		let result = () => Events.off(object, eventNamesToRemove, callbackToRemove);
		
		// Assert
		expect(result).toThrow(/^Cannot .* properties of undefined \(.* '.*'\)$/);
	});

	it('should throw an error when removing any callbacks when no events were set.', () => {
		// Arrange
		let object = undefined;
		let eventNamesToRemove = 'testEvent1 testEvent2';
		let callbackToRemove = () => { return false; }
		
		// Act
		let result = () => Events.off(object, eventNamesToRemove, callbackToRemove);
		
		// Assert
		expect(result).toThrow(/^Cannot .* properties of undefined \(.* '.*'\)$/);
	});
});