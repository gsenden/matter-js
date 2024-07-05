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

	it('should be able to add un undefinded callback to object under event name', () => {
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