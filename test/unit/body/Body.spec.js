const { assertFloat, assertXY, assertBounds, assertVertex } = require("../TestUtil");
const {
	getTestBodyWithoutParts,
	getTestBodyPartsWithoutParent,
	getTestBodyWithPartsWithParent,
	getTestSquare,
} = require("../TestData");
const Body = require("../../../src/body/Body");
const Vector = require("../../../src/geometry/Vector");

describe('Body.create', () => {
	it('should create a body with the correct default properties not providing any options', () => {
		// Arrange
		let options = undefined;

		// Act
		const result = Body.create(options);

		// Assert
		assertFloat(result.angle, 0.);
		assertFloat(result.anglePrev, 0.);
		assertFloat(result.angularVelocity, 0.);
		assertFloat(result.area, 1600.);
		assertXY(result.axes[0], 0., 1.);
		assertXY(result.axes[1], -1., 0.);
		assertBounds(result.bounds, -20., -20., 20., 20.);
		expect(result.chamfer).toBeNull();
		assertFloat(result.circleRadius, 0.);
		expect(result.collisionFilter.category).toEqual(1);
		expect(result.collisionFilter.group).toEqual(0);
		expect(result.collisionFilter.mask).toEqual(4294967295);
		assertXY(result.constraintImpulse, 0., 0.);
		assertFloat(result.constraintImpulse.angle, 0.);
		assertFloat(result.deltaTime, 16.666666666666668);
		assertFloat(result.density, 0.001);
		expect(result.events).toBeNull();
		assertXY(result.force, 0., 0.);
		assertFloat(result.friction, 0.1);
		assertFloat(result.frictionAir, 0.01);
		assertFloat(result.frictionStatic, 0.5);
		expect(result.id).toEqual(0);
		assertFloat(result.inertia, 1706.6666666666667);
		assertFloat(result.inverseInertia, 0.0005859375);
		assertFloat(result.inverseMass, 0.625);
		expect(result.isSensor).toEqual(false);
		expect(result.isSleeping).toEqual(false);
		expect(result.isStatic).toEqual(false);
		expect(result.label).toEqual('Body');
		assertFloat(result.mass, 1.6);
		assertFloat(result.motion, 0.);
		expect(result.parent.id).toEqual(0);
		expect(result.parts.length).toEqual(1);
		expect(result.plugin).toEqual({});
		assertXY(result.position, 0., 0.);
		assertXY(result.positionImpulse, 0., 0.);
		assertXY(result.positionPrev, 0., 0.);
		expect(result.render.fillStyle).toEqual("#f5d259");
		expect(result.render.lineWidth).toEqual(0);
		assertFloat(result.render.lineWidth, 0.);
		assertFloat(result.render.opacity, 1.);
		assertFloat(result.render.sprite.xOffset, 0.5);
		assertFloat(result.render.sprite.xScale, 1.);
		assertFloat(result.render.sprite.yOffset, 0.5);
		assertFloat(result.render.sprite.yScale, 1.);
		expect(result.render.strokeStyle).toEqual("#ccc");
		expect(result.render.visible).toEqual(true);
		assertFloat(result.restitution, 0.);
		expect(result.sleepCounter).toEqual(0);
		assertFloat(result.sleepThreshold, 60.);
		assertFloat(result.slop, 0.05);
		assertFloat(result.speed, 0.);
		assertFloat(result.timeScale, 1.);
		assertFloat(result.torque, 0.);
		expect(result.totalContacts).toEqual(0);
		expect(result.type).toEqual('body');
		assertXY(result.velocity, 0., 0.);
		assertXY(result.vertices[0], -20., -20.);
		assertXY(result.vertices[1], 20., -20.);
		assertXY(result.vertices[2], 20., 20.);
		assertXY(result.vertices[3], -20., 20.);
	});

	it('should create a body with the correct properties providing valid options', () => {
		// Arrange
		let options = getTestBodyWithoutParts();
		options.parts = getTestBodyPartsWithoutParent();

		// Act
		const result = Body.create(options);

		// Assert
		assertFloat(result.angle, 101.);
		assertFloat(result.anglePrev, 102.);
		assertFloat(result.angularSpeed, 103.);
		assertFloat(result.angularVelocity, 104.);
		assertFloat(result.area, 105.);
		assertXY(result.axes[0], 106., 107.);
		assertXY(result.axes[1], 108., 109.);
		assertBounds(result.bounds, 340.9248627604002, 437.0721468056014, 546.1588065481358, 734.1632738161854);
		assertXY(result.chamfer[0], 114., 115.);
		assertXY(result.chamfer[1], 116., 117.);
		assertFloat(result.circleRadius, 118.);
		expect(result.collisionFilter.category).toEqual(119);
		expect(result.collisionFilter.group).toEqual(121);
		expect(result.collisionFilter.mask).toEqual(120);
		assertXY(result.constraintImpulse, 122., 123.);
		assertFloat(result.constraintImpulse.angle, 124.);
		assertFloat(result.deltaTime, 125.);
		assertFloat(result.density, 1.2952380952380953);
		expect(result.events).toBeNull();
		assertXY(result.force, 127., 128.);
		assertFloat(result.friction, 129.);
		assertFloat(result.frictionAir, 130.);
		assertFloat(result.frictionStatic, 131.);
		expect(result.id).toEqual(132);
		assertFloat(result.inertia, 133.);
		assertFloat(result.inverseInertia, 0.007518796992481203);
		assertFloat(result.inverseMass, 0.007352941176470588);
		expect(result.isSensor).toEqual(false);
		expect(result.isSleeping).toEqual(false);
		expect(result.isStatic).toEqual(false);
		expect(result.label).toEqual('Body');
		assertFloat(result.mass, 136.);
		assertFloat(result.motion, 137.);
		expect(result.parent.id).toEqual(132);
		expect(result.parts.length).toEqual(3);
		expect(result.plugin).toEqual({});
		assertXY(result.position, 297.7412587412587, 298.7412587412587);
		assertXY(result.positionImpulse, 141., 142.);
		assertXY(result.positionPrev, 297.7412587412587, 298.7412587412587);
		expect(result.render.fillStyle).toEqual("rgba(1,4,6,0.1)");
		expect(result.render.lineWidth).toEqual(147.);
		assertFloat(result.render.lineWidth, 147.);
		assertFloat(result.render.opacity, 145.);
		assertFloat(result.render.sprite.xOffset, 149.78958839253315);
		assertFloat(result.render.sprite.xScale, 148.);
		assertFloat(result.render.sprite.yOffset, 150.53438229725583);
		assertFloat(result.render.sprite.yScale, 149.);
		expect(result.render.strokeStyle).toEqual("#abc");
		expect(result.render.visible).toEqual(false);
		assertFloat(result.restitution, 152.);
		expect(result.sleepCounter).toEqual(0);
		assertFloat(result.sleepThreshold, 153.);
		assertFloat(result.slop, 154.);
		assertFloat(result.speed, 155.);
		assertFloat(result.timeScale, 156.);
		assertFloat(result.torque, 157.);
		expect(result.totalContacts).toEqual(158);
		expect(result.type).toEqual('body');
		assertXY(result.velocity, 159., 160.);
		assertXY(result.vertices[0], 387.15880654813583, 574.1632738161854);
		assertXY(result.vertices[1], 384.92277102138115, 574.1512271116169);
		assertXY(result.vertices[2], 340.9248627604002, 439.7481614149658);
		assertXY(result.vertices[3], 342.28094012193526, 437.0721468056014);
	});
});

describe('Body.nextGroup', () => {
	it('should calculate and set the valid next group id if colliding', () => {
		jest.isolateModules(() => {
			// Arrange
			const Body = require("../../../src/body/Body");
			const isNonColliding = false;

			// Act
			const result = Body.nextGroup(isNonColliding);

			// Assert
			expect(result).toEqual(1);
			expect(Body._nextCollidingGroupId).toEqual(2);
			expect(Body._nextNonCollidingGroupId).toEqual(-1);
		});
	});

	it('should calculate and set the valid next group id three times if colliding', () => {
		jest.isolateModules(() => {
			// Arrange
			const Body = require("../../../src/body/Body");
			const isNonColliding = false;

			// Act
			let result = Body.nextGroup(isNonColliding);
			result = Body.nextGroup(isNonColliding);
			result = Body.nextGroup(isNonColliding);

			// Assert
			expect(result).toEqual(3);
			expect(Body._nextCollidingGroupId).toEqual(4);
			expect(Body._nextNonCollidingGroupId).toEqual(-1);
		});
	});

	it('should calculate and set the valid next group id if colliding is undefined', () => {
		jest.isolateModules(() => {
			// Arrange
			const Body = require("../../../src/body/Body");
			const isNonColliding = undefined;

			// Act
			const result = Body.nextGroup(isNonColliding);

			// Assert
			expect(result).toEqual(1);
			expect(Body._nextCollidingGroupId).toEqual(2);
			expect(Body._nextNonCollidingGroupId).toEqual(-1);
		});
	});

	it('should calculate and set the valid next group id if non colliding', () => {
		jest.isolateModules(() => {
			// Arrange
			const Body = require("../../../src/body/Body");
			const isNonColliding = true;

			// Act
			const result = Body.nextGroup(isNonColliding);

			// Assert
			expect(result).toEqual(-1);
			expect(Body._nextCollidingGroupId).toEqual(1);
			expect(Body._nextNonCollidingGroupId).toEqual(-2);
		});
	});

	it('should calculate and set the valid next group id three times if colliding', () => {
		jest.isolateModules(() => {
			// Arrange
			const Body = require("../../../src/body/Body");
			const isNonColliding = true;

			// Act
			let result = Body.nextGroup(isNonColliding);
			result = Body.nextGroup(isNonColliding);
			result = Body.nextGroup(isNonColliding);

			// Assert
			expect(result).toEqual(-3);
			expect(Body._nextCollidingGroupId).toEqual(1);
			expect(Body._nextNonCollidingGroupId).toEqual(-4);
		});
	});
});

describe('Body.nextCategory', () => {
	it('should calculate and set the valid next category', () => {
		jest.isolateModules(() => {
			// Arrange
			const Body = require("../../../src/body/Body");

			// Act
			const result = Body.nextCategory();

			// Assert
			expect(result).toEqual(2);
			expect(Body._nextCategory).toEqual(2);
		});
	});

	it('should be able to calculate and set the valid next category maximum times', () => {
		jest.isolateModules(() => {
			// Arrange
			const Body = require("../../../src/body/Body");

			// Act
			let result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();

			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();

			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();

			result = Body.nextCategory();

			// Assert
			expect(result).toEqual(1073741824);
			expect(Body._nextCategory).toEqual(1073741824);
		});
	});

	it('should not be able to calculate and set the valid next category past maximum times', () => {
		jest.isolateModules(() => {
			// Arrange
			const Body = require("../../../src/body/Body");

			// Act
			let result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();

			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();

			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();
			result = Body.nextCategory();

			result = Body.nextCategory();

			result = Body.nextCategory();

			// Assert
			// TODO: This should probably result in an error.			
			expect(result).toEqual(-2147483648);
			expect(Body._nextCategory).toEqual(-2147483648);
		});
	});
});

describe('Body.setStatic', () => {
	it('should be able to set a default body to static when all parts are not static yet', () => {
		// Arrange
		let body = getTestBodyWithPartsWithParent();
		body.parts[0].isStatic = false;
		body.parts[1].isStatic = false;
		body.parts[2].isStatic = false;
		const isStatic = true;

		// Act 
		Body.setStatic(body, isStatic);

		// Assert
		let part = body.parts[0];
		assertFloat(part.restitution, 0.);
		assertFloat(part.friction, 1.);
		assertFloat(part.mass, Infinity);
		assertFloat(part.inertia, Infinity);
		assertFloat(part.density, Infinity);
		assertFloat(part.inverseMass, 0.);
		assertXY(part.position, 139., 140.);
		assertFloat(part.anglePrev, 101.);
		assertFloat(part.angularVelocity, 0.);
		assertFloat(part.speed, 0.);
		assertFloat(part.angularSpeed, 0.);
		assertFloat(part.motion, 0.);
		assertFloat(part._original.restitution, 152.);
		assertFloat(part._original.friction, 129.);
		assertFloat(part._original.mass, 136.);
		assertFloat(part._original.inertia, 133.);
		assertFloat(part._original.inverseInertia, 134.);
		assertFloat(part._original.inverseMass, 135.);
		assertFloat(part._original.density, 126);

		part = body.parts[1];
		assertFloat(part.restitution, 0.);
		assertFloat(part.friction, 1.);
		assertFloat(part.mass, Infinity);
		assertFloat(part.inertia, Infinity);
		assertFloat(part.density, Infinity);
		assertFloat(part.inverseMass, 0.);
		assertXY(part.position, 239., 240.);
		assertFloat(part.anglePrev, 201.);
		assertFloat(part.angularVelocity, 0.);
		assertFloat(part.speed, 0.);
		assertFloat(part.angularSpeed, 0.);
		assertFloat(part.motion, 0.);
		assertFloat(part._original.restitution, 252.);
		assertFloat(part._original.friction, 229.);
		assertFloat(part._original.mass, 236.);
		assertFloat(part._original.inertia, 233.);
		assertFloat(part._original.inverseInertia, 234.);
		assertFloat(part._original.inverseMass, 235.);
		assertFloat(part._original.density, 226);

		part = body.parts[2];
		assertFloat(part.restitution, 0.);
		assertFloat(part.friction, 1.);
		assertFloat(part.mass, Infinity);
		assertFloat(part.inertia, Infinity);
		assertFloat(part.density, Infinity);
		assertFloat(part.inverseMass, 0.);
		assertXY(part.position, 339., 340.);
		assertFloat(part.anglePrev, 301.);
		assertFloat(part.angularVelocity, 0.);
		assertFloat(part.speed, 0.);
		assertFloat(part.angularSpeed, 0.);
		assertFloat(part.motion, 0.);
		assertFloat(part._original.restitution, 352.);
		assertFloat(part._original.friction, 329.);
		assertFloat(part._original.mass, 336.);
		assertFloat(part._original.inertia, 333.);
		assertFloat(part._original.inverseInertia, 334.);
		assertFloat(part._original.inverseMass, 335.);
		assertFloat(part._original.density, 326);
	});

	it('should be able to set a default body back from static without an _original', () => {
		// Arrange
		let body = getTestBodyWithPartsWithParent();
		let body2 = getTestBodyWithPartsWithParent();
		body.parts[0].isStatic = true;
		body.parts[1].isStatic = true;
		body.parts[2].isStatic = true;

		const isStatic = false;

		// Act 
		Body.setStatic(body, isStatic);

		// Assert
		let part = body.parts[0];
		let part2 = body2.parts[0];
		assertFloat(part.restitution, part2.restitution);
		assertFloat(part.friction, part2.friction);
		assertFloat(part.mass, part2.mass);
		assertFloat(part.inertia, part2.inertia);
		assertFloat(part.density, part2.density);
		assertFloat(part.inverseMass, part2.inverseMass);
		assertXY(part.position, part2.position.x, part2.position.y);
		assertFloat(part.anglePrev, part2.anglePrev);
		assertFloat(part.angularVelocity, part2.angularVelocity);
		assertFloat(part.speed, part2.speed);
		assertFloat(part.angularSpeed, part2.angularSpeed);
		assertFloat(part.motion, part2.motion);
		expect(part.isStatic).toEqual(false);


		part = body.parts[1];
		part2 = body2.parts[1];
		assertFloat(part.restitution, part2.restitution);
		assertFloat(part.friction, part2.friction);
		assertFloat(part.mass, part2.mass);
		assertFloat(part.inertia, part2.inertia);
		assertFloat(part.density, part2.density);
		assertFloat(part.inverseMass, part2.inverseMass);
		assertXY(part.position, part2.position.x, part2.position.y);
		assertFloat(part.anglePrev, part2.anglePrev);
		assertFloat(part.angularVelocity, part2.angularVelocity);
		assertFloat(part.speed, part2.speed);
		assertFloat(part.angularSpeed, part2.angularSpeed);
		assertFloat(part.motion, part2.motion);
		expect(part.isStatic).toEqual(false);

		part = body.parts[2];
		part2 = body2.parts[2];
		assertFloat(part.restitution, part2.restitution);
		assertFloat(part.friction, part2.friction);
		assertFloat(part.mass, part2.mass);
		assertFloat(part.inertia, part2.inertia);
		assertFloat(part.density, part2.density);
		assertFloat(part.inverseMass, part2.inverseMass);
		assertXY(part.position, part2.position.x, part2.position.y);
		assertFloat(part.anglePrev, part2.anglePrev);
		assertFloat(part.angularVelocity, part2.angularVelocity);
		assertFloat(part.speed, part2.speed);
		assertFloat(part.angularSpeed, part2.angularSpeed);
		assertFloat(part.motion, part2.motion);
		expect(part.isStatic).toEqual(false);
	});

	it('should be able to set a default body back from static without an _original with undefined isStatic', () => {
		// Arrange
		let body = getTestBodyWithPartsWithParent();
		let body2 = getTestBodyWithPartsWithParent();
		body.parts[0].isStatic = true;
		body.parts[1].isStatic = true;
		body.parts[2].isStatic = true;

		const isStatic = undefined;

		// Act 
		Body.setStatic(body, isStatic);

		// Assert
		let part = body.parts[0];
		let part2 = body2.parts[0];
		assertFloat(part.restitution, part2.restitution);
		assertFloat(part.friction, part2.friction);
		assertFloat(part.mass, part2.mass);
		assertFloat(part.inertia, part2.inertia);
		assertFloat(part.density, part2.density);
		assertFloat(part.inverseMass, part2.inverseMass);
		assertXY(part.position, part2.position.x, part2.position.y);
		assertFloat(part.anglePrev, part2.anglePrev);
		assertFloat(part.angularVelocity, part2.angularVelocity);
		assertFloat(part.speed, part2.speed);
		assertFloat(part.angularSpeed, part2.angularSpeed);
		assertFloat(part.motion, part2.motion);
		expect(part.isStatic).toEqual(undefined);


		part = body.parts[1];
		part2 = body2.parts[1];
		assertFloat(part.restitution, part2.restitution);
		assertFloat(part.friction, part2.friction);
		assertFloat(part.mass, part2.mass);
		assertFloat(part.inertia, part2.inertia);
		assertFloat(part.density, part2.density);
		assertFloat(part.inverseMass, part2.inverseMass);
		assertXY(part.position, part2.position.x, part2.position.y);
		assertFloat(part.anglePrev, part2.anglePrev);
		assertFloat(part.angularVelocity, part2.angularVelocity);
		assertFloat(part.speed, part2.speed);
		assertFloat(part.angularSpeed, part2.angularSpeed);
		assertFloat(part.motion, part2.motion);
		expect(part.isStatic).toEqual(undefined);

		part = body.parts[2];
		part2 = body2.parts[2];
		assertFloat(part.restitution, part2.restitution);
		assertFloat(part.friction, part2.friction);
		assertFloat(part.mass, part2.mass);
		assertFloat(part.inertia, part2.inertia);
		assertFloat(part.density, part2.density);
		assertFloat(part.inverseMass, part2.inverseMass);
		assertXY(part.position, part2.position.x, part2.position.y);
		assertFloat(part.anglePrev, part2.anglePrev);
		assertFloat(part.angularVelocity, part2.angularVelocity);
		assertFloat(part.speed, part2.speed);
		assertFloat(part.angularSpeed, part2.angularSpeed);
		assertFloat(part.motion, part2.motion);
		expect(part.isStatic).toEqual(undefined);
	});


	it('should be able to set a default body back from static without an _original', () => {
		// Arrange
		let body = getTestBodyWithPartsWithParent();
		let body2 = getTestBodyWithPartsWithParent();
		body.parts[0].isStatic = true;
		body.parts[1].isStatic = true;
		body.parts[2].isStatic = true;

		const isStatic = false;

		// Act 
		Body.setStatic(body, isStatic);

		// Assert
		// TODO: body.isStatic becomes undefined this way. Maybe this is undesired?	
		let part = body.parts[0];
		let part2 = body2.parts[0];
		assertFloat(part.restitution, part2.restitution);
		assertFloat(part.friction, part2.friction);
		assertFloat(part.mass, part2.mass);
		assertFloat(part.inertia, part2.inertia);
		assertFloat(part.density, part2.density);
		assertFloat(part.inverseMass, part2.inverseMass);
		assertXY(part.position, part2.position.x, part2.position.y);
		assertFloat(part.anglePrev, part2.anglePrev);
		assertFloat(part.angularVelocity, part2.angularVelocity);
		assertFloat(part.speed, part2.speed);
		assertFloat(part.angularSpeed, part2.angularSpeed);
		assertFloat(part.motion, part2.motion);
		expect(part.isStatic).toEqual(false);


		part = body.parts[1];
		part2 = body2.parts[1];
		assertFloat(part.restitution, part2.restitution);
		assertFloat(part.friction, part2.friction);
		assertFloat(part.mass, part2.mass);
		assertFloat(part.inertia, part2.inertia);
		assertFloat(part.density, part2.density);
		assertFloat(part.inverseMass, part2.inverseMass);
		assertXY(part.position, part2.position.x, part2.position.y);
		assertFloat(part.anglePrev, part2.anglePrev);
		assertFloat(part.angularVelocity, part2.angularVelocity);
		assertFloat(part.speed, part2.speed);
		assertFloat(part.angularSpeed, part2.angularSpeed);
		assertFloat(part.motion, part2.motion);
		expect(part.isStatic).toEqual(false);

		part = body.parts[2];
		part2 = body2.parts[2];
		assertFloat(part.restitution, part2.restitution);
		assertFloat(part.friction, part2.friction);
		assertFloat(part.mass, part2.mass);
		assertFloat(part.inertia, part2.inertia);
		assertFloat(part.density, part2.density);
		assertFloat(part.inverseMass, part2.inverseMass);
		assertXY(part.position, part2.position.x, part2.position.y);
		assertFloat(part.anglePrev, part2.anglePrev);
		assertFloat(part.angularVelocity, part2.angularVelocity);
		assertFloat(part.speed, part2.speed);
		assertFloat(part.angularSpeed, part2.angularSpeed);
		assertFloat(part.motion, part2.motion);
		expect(part.isStatic).toEqual(false);
	});

	it('should be not able to set a undefined body', () => {
		// Arrange
		let body = undefined;
		const isStatic = true;

		// Act 
		let result = () => Body.setStatic(body, isStatic);

		// Assert
		// TODO: This causes a read from undefined. This should probably be fixed.
		expect(result).toThrow(/^Cannot read properties of undefined \(reading '.*'\)$/);
	});
});

describe('Body.setMass', () => {
	it('should be able to set the mass on a default body', () => {
		// Arrange
		const body = getTestBodyWithPartsWithParent();
		const mass = 42.1;

		// Act
		Body.setMass(body, mass);

		// Assert
		assertFloat(body.mass, 42.1);
		assertFloat(body.inverseMass, 0.023752969121140142);
		assertFloat(body.inertia, 41.17132352941176);
		assertFloat(body.inverseInertia, 0.02428875037951173);
		assertFloat(body.density, 0.40095238095238095);
	});

	it('should be not able to set an undefined mass on a default body', () => {
		// Arrange
		const body = getTestBodyWithPartsWithParent();
		const mass = undefined;

		// Act
		Body.setMass(body, mass);

		// Assert
		// TODO: This causes the result to have undefined and NaN properties. This should probably be fixed.
		expect(body.mass).toEqual(undefined);
		expect(body.inverseMass).toEqual(NaN);
		expect(body.inertia).toEqual(NaN);
		expect(body.inverseInertia).toEqual(NaN);
		expect(body.density).toEqual(NaN);
	});

	it('should be not able to set an mass on an undefined body', () => {
		// Arrange
		const body = undefined;
		const mass = 42.1;

		// Act
		let result = () => Body.setMass(body, mass);

		// Assert
		// TODO: This causes a read from undefined. This should probably be fixed.
		expect(result).toThrow(/^Cannot read properties of undefined \(reading '.*'\)$/);
	});
});

describe('Body.setDensity', () => {
	it('should be able to set the density on a default body', () => {
		// Arrange
		const body = getTestBodyWithPartsWithParent();
		const density = 42.1;

		// Act
		Body.setDensity(body, density);

		// Assert
		assertFloat(body.mass, 4420.5);
		assertFloat(body.inverseMass, 0.00022621875353466802);
		assertFloat(body.inertia, 4322.988970588235);
		assertFloat(body.inverseInertia, 0.00023132143218582596);
		assertFloat(body.density, 42.1);
	});

	it('should not be able to set the density on a default body with undefined density', () => {
		// Arrange
		const body = getTestBodyWithPartsWithParent();
		const density = undefined;

		// Act
		Body.setDensity(body, density);

		// Assert
		// TODO: This causes the result to have undefined and NaN properties. This should probably be fixed.
		expect(body.mass).toEqual(NaN);
		expect(body.inverseMass).toEqual(NaN);
		expect(body.inertia).toEqual(NaN);
		expect(body.inverseInertia).toEqual(NaN);
		expect(body.density).toEqual(undefined);
	});

	it('should not be able to set the density on an undefined body', () => {
		// Arrange
		const body = undefined;
		const density = 42.1;

		// Act
		let result = () => Body.setDensity(body, density);

		// Assert
		// TODO: This causes a read from undefined. This should probably be fixed.
		expect(result).toThrow(/^Cannot read properties of undefined \(reading '.*'\)$/);
	});
});

describe("Body.setInertia()", () => {
	it('should mutate value of inertia and inverse inertia to valid values', () => {
		// Arrange     
		const body = getTestBodyWithPartsWithParent();
		body.inertia = 0;
		body.inverseInertia = 0;
		const inertia = 12;

		// Act
		Body.setInertia(body, inertia)

		// Assert
		assertFloat(body.inertia, 12)
		assertFloat(body.inverseInertia, 0.08333333333333333)
	});

	it('should not be able mutate value of inertia and inverse inertia to valid values with undefined inertia', () => {
		// Arrange     
		const body = getTestBodyWithPartsWithParent();
		body.inertia = 0;
		body.inverseInertia = 0;
		const inertia = undefined;

		// Act
		Body.setInertia(body, inertia)

		// Assert
		// TODO: This causes the result to have undefined and NaN properties. This should probably be fixed.
		expect(body.inertia).toEqual(undefined);
		expect(body.inverseInertia).toEqual(NaN);
	});

	it('should not be mutate value of inertia and inverse inertia to valid values on undefined body', () => {
		// Arrange     
		const body = undefined;
		const inertia = 12;

		// Act
		let result = () => Body.setInertia(body, inertia);

		// Assert
		// TODO: This causes a read or set from undefined. This should probably be fixed.
		expect(result).toThrow(/^Cannot .* properties of undefined \(.* '.*'\)$/);
	});
});

describe('Body.setVertices', () => {
	it('should mutate the body to contain valid values', () => {
		// Arrange     
		const vertices = getTestSquare();
		const body = getTestBodyWithPartsWithParent();

		// Act
		Body.setVertices(body, vertices)

		// Assert
		assertFloat(body.area, 4.0);
		assertXY(body.axes[0], 0.0, 1.0);
		assertXY(body.axes[1], -1.0, 0.0);
		assertBounds(body.bounds, 138., 139., 299., 301.);
		assertFloat(body.density, 126.);
		assertFloat(body.inertia, 1344.);
		assertFloat(body.inverseInertia, 0.000744047619047619);
		assertFloat(body.inverseMass, 0.001984126984126984);
		assertFloat(body.mass, 504.);
		assertXY(body.position, 139., 140.);
		assertXY(body.velocity, 159., 160.);
		assertVertex(body.vertices[0], body.id, 138., 139., 0, false);
		assertVertex(body.vertices[1], body.id, 140., 139., 1, false);
		assertVertex(body.vertices[2], body.id, 140., 141., 2, false);
		assertVertex(body.vertices[3], body.id, 138., 141., 3, false);

	});

	it('should not be able mutate the body to contain valid values with undefined vertices', () => {
		// Arrange     
		const vertices = undefined;
		const body = getTestBodyWithPartsWithParent();

		// Act
		let result = () => Body.setVertices(body, vertices)

		// Assert
		// TODO: This causes a read or set from undefined. This should probably be fixed.
		expect(result).toThrow(/^Cannot .* properties of undefined \(.* '.*'\)$/);

	});

	it('should not be able mutate the body to contain valid values on undefined body', () => {
		// Arrange     
		const vertices = getTestSquare();
		const body = undefined;

		// Act
		let result = () => Body.setVertices(body, vertices)

		// Assert
		// TODO: This causes a read or set from undefined. This should probably be fixed.
		expect(result).toThrow(/^Cannot .* properties of undefined \(.* '.*'\)$/);

	});
});

describe('Body.setParts', () => {
	it('should update body with parts with setting autohull to false', () => {
		// Arrange
		const body = getTestBodyWithoutParts();
		const parts = getTestBodyPartsWithoutParent();

		const autoHull = false;

		// Act
		Body.setParts(body, parts, autoHull);

		// Assert
		let part = body.parts[0];
		expect(part.id).toEqual(body.id);
		assertFloat(part.area, 510.);
		assertBounds(part.bounds, 161., 162., 322., 325.);
		assertFloat(part.density, 1.1215686274509804);
		assertFloat(part.inertia, 566.);
		assertFloat(part.inverseInertia, 0.0017667844522968198);
		assertFloat(part.inverseMass, 0.0017482517482517483);
		assertFloat(part.mass, 572.);
		assertXY(part.position, 297.7412587412587, 298.7412587412587);
		assertXY(part.positionPrev, 297.7412587412587, 298.7412587412587);
		assertXY(part.vertices[0], 161., 162.);
		assertXY(part.vertices[1], 163., 164.);
		assertXY(part.vertices[2], 161., 165.);
		expect(part.parts.length).toEqual(3);
		expect(part.vertices.length).toEqual(3);

		part = body.parts[1];
		assertFloat(part.area, 205.);
		assertBounds(part.bounds, 261., 262., 422., 425.);
		assertFloat(part.density, 226.);
		assertFloat(part.inertia, 233.);
		assertFloat(part.inverseInertia, 234.);
		assertFloat(part.inverseMass, 235.);
		assertFloat(part.mass, 236.);
		assertXY(part.position, 239., 240.);
		assertXY(part.positionPrev, 243., 244.);
		assertXY(part.vertices[0], 261., 262.);
		assertXY(part.vertices[1], 263., 264.);
		assertXY(part.vertices[2], 261., 265.);
		expect(part.vertices.length).toEqual(3);

		part = body.parts[2];
		assertFloat(part.area, 305.);
		assertBounds(part.bounds, 361., 362., 522., 525.);
		assertFloat(part.density, 326.);
		assertFloat(part.inertia, 333.);
		assertFloat(part.inverseInertia, 334.);
		assertFloat(part.inverseMass, 335.);
		assertFloat(part.mass, 336.);
		assertXY(part.position, 339., 340.);
		assertXY(part.positionPrev, 343., 344.);
		assertXY(part.vertices[0], 361., 362.);
		assertXY(part.vertices[1], 363., 364.);
		assertXY(part.vertices[2], 361., 365.);
		expect(part.vertices.length).toEqual(3);
	});

	it('should update body with parts without setting autohull', () => {
		// Arrange
		const body = getTestBodyWithoutParts();
		const parts = getTestBodyPartsWithoutParent();

		const autoHull = undefined;

		// Act
		Body.setParts(body, parts, autoHull);

		// Assert
		let part = body.parts[0];
		expect(part.id).toEqual(body.id);
		assertFloat(part.area, 510.);
		assertBounds(part.bounds, 400., 402., 661., 665.);
		assertFloat(part.density, 1.1215686274509804);
		assertFloat(part.inertia, 566.);
		assertFloat(part.inverseInertia, 0.0017667844522968198);
		assertFloat(part.inverseMass, 0.0017482517482517483);
		assertFloat(part.mass, 572.);
		assertXY(part.position, 297.7412587412587, 298.7412587412587);
		assertXY(part.positionPrev, 297.7412587412587, 298.7412587412587);
		assertVertex(part.vertices[0], body.id, 502., 504., 0, false);
		assertVertex(part.vertices[1], body.id, 500., 505., 1, false);
		assertVertex(part.vertices[2], body.id, 400., 405., 2, false);
		assertVertex(part.vertices[3], body.id, 400., 402., 3, false);
		expect(part.parts.length).toEqual(3);
		expect(part.vertices.length).toEqual(4);

		part = body.parts[1];
		assertFloat(part.area, 205.);
		assertBounds(part.bounds, 261., 262., 422., 425.);
		assertFloat(part.density, 226.);
		assertFloat(part.inertia, 233.);
		assertFloat(part.inverseInertia, 234.);
		assertFloat(part.inverseMass, 235.);
		assertFloat(part.mass, 236.);
		assertXY(part.position, 239., 240.);
		assertXY(part.positionPrev, 243., 244.);
		assertXY(part.vertices[0], 261., 262.);
		assertXY(part.vertices[1], 263., 264.);
		assertXY(part.vertices[2], 261., 265.);
		expect(part.vertices.length).toEqual(3);

		part = body.parts[2];
		assertFloat(part.area, 305.);
		assertBounds(part.bounds, 361., 362., 522., 525.);
		assertFloat(part.density, 326.);
		assertFloat(part.inertia, 333.);
		assertFloat(part.inverseInertia, 334.);
		assertFloat(part.inverseMass, 335.);
		assertFloat(part.mass, 336.);
		assertXY(part.position, 339., 340.);
		assertXY(part.positionPrev, 343., 344.);
		assertXY(part.vertices[0], 361., 362.);
		assertXY(part.vertices[1], 363., 364.);
		assertXY(part.vertices[2], 361., 365.);
		expect(part.vertices.length).toEqual(3);
	});

	it('should update body with parts with setting autohull to true', () => {
		// Arrange
		const body = getTestBodyWithoutParts();
		const parts = getTestBodyPartsWithoutParent();

		const autoHull = true;

		// Act
		Body.setParts(body, parts, autoHull);

		// Assert
		let part = body.parts[0];
		expect(part.id).toEqual(body.id);
		assertFloat(part.area, 510.);
		assertBounds(part.bounds, 400., 402., 661., 665.);
		assertFloat(part.density, 1.1215686274509804);
		assertFloat(part.inertia, 566.);
		assertFloat(part.inverseInertia, 0.0017667844522968198);
		assertFloat(part.inverseMass, 0.0017482517482517483);
		assertFloat(part.mass, 572.);
		assertXY(part.position, 297.7412587412587, 298.7412587412587);
		assertXY(part.positionPrev, 297.7412587412587, 298.7412587412587);
		assertVertex(part.vertices[0], body.id, 502., 504., 0, false);
		assertVertex(part.vertices[1], body.id, 500., 505., 1, false);
		assertVertex(part.vertices[2], body.id, 400., 405., 2, false);
		assertVertex(part.vertices[3], body.id, 400., 402., 3, false);
		expect(part.parts.length).toEqual(3);
		expect(part.vertices.length).toEqual(4);

		part = body.parts[1];
		assertFloat(part.area, 205.);
		assertBounds(part.bounds, 261., 262., 422., 425.);
		assertFloat(part.density, 226.);
		assertFloat(part.inertia, 233.);
		assertFloat(part.inverseInertia, 234.);
		assertFloat(part.inverseMass, 235.);
		assertFloat(part.mass, 236.);
		assertXY(part.position, 239., 240.);
		assertXY(part.positionPrev, 243., 244.);
		assertXY(part.vertices[0], 261., 262.);
		assertXY(part.vertices[1], 263., 264.);
		assertXY(part.vertices[2], 261., 265.);
		expect(part.vertices.length).toEqual(3);

		part = body.parts[2];
		assertFloat(part.area, 305.);
		assertBounds(part.bounds, 361., 362., 522., 525.);
		assertFloat(part.density, 326.);
		assertFloat(part.inertia, 333.);
		assertFloat(part.inverseInertia, 334.);
		assertFloat(part.inverseMass, 335.);
		assertFloat(part.mass, 336.);
		assertXY(part.position, 339., 340.);
		assertXY(part.positionPrev, 343., 344.);
		assertXY(part.vertices[0], 361., 362.);
		assertXY(part.vertices[1], 363., 364.);
		assertXY(part.vertices[2], 361., 365.);
		expect(part.vertices.length).toEqual(3);
	});

	it('should not be able update an undefined body with parts with setting autohull to false', () => {
		// Arrange
		const body = undefined;
		const parts = getTestBodyPartsWithoutParent();

		const autoHull = false;

		// Act
		let result = () => Body.setParts(body, parts, autoHull);

		// Assert
		// TODO: This causes a read or set from undefined. This should probably be fixed.
		expect(result).toThrow(/^Cannot .* properties of undefined \(.* '.*'\)$/);
	});
});

describe('Body.setCentre', () => {
	it('should be able to set the centre on a default body, not relative', () => {
		// Arrange
		const body = getTestBodyWithPartsWithParent();
		const centre = { x: 42., y: 43. };
		const relative = false;

		// Act 
		Body.setCentre(body, centre, relative);

		// Assert
		assertXY(body.position, 42., 43.);
		assertXY(body.positionPrev, 46., 47.);
	});

	it('should be able to set the centre on a default body, with undefined relative', () => {
		// Arrange
		const body = getTestBodyWithPartsWithParent();
		const centre = { x: 42., y: 43. };
		const relative = undefined;

		// Act 
		Body.setCentre(body, centre, relative);

		// Assert
		assertXY(body.position, 42., 43.);
		assertXY(body.positionPrev, 46., 47.);
	});

	it('should be able to set the centre on a default body, relative', () => {
		// Arrange
		const body = getTestBodyWithPartsWithParent();
		const centre = { x: 42., y: 43. };
		const relative = true;

		// Act 
		Body.setCentre(body, centre, relative);

		// Assert
		assertXY(body.position, 181., 183.);
		assertXY(body.positionPrev, 185., 187.);
	});

	it('should not be able to set an undefined centre on a default body, not relative', () => {
		// Arrange
		const body = getTestBodyWithPartsWithParent();
		const centre = undefined;
		const relative = false;

		// Act 
		let result = () => Body.setCentre(body, centre, relative);

		// Assert
		// TODO: This causes a read or set from undefined. This should probably be fixed.
		expect(result).toThrow(/^Cannot .* properties of undefined \(.* '.*'\)$/);
	});

	it('should not be able to set the centre on an undefined body, not relative', () => {
		// Arrange
		const body = undefined;
		const centre = { x: 42., y: 43. };
		const relative = false;

		// Act 
		let result = () => Body.setCentre(body, centre, relative);

		// Assert
		// TODO: This causes a read or set from undefined. This should probably be fixed.
		expect(result).toThrow(/^Cannot .* properties of undefined \(.* '.*'\)$/);
	});
});

describe('Body.setPosition', () => {
	it('should update body with position without setting velocity', () => {
		// Arrange
		const body = getTestBodyWithPartsWithParent();
		const position = Vector.create(37., 37.); // true random
		const updateVelocity = false;

		// Act
		Body.setPosition(body, position, updateVelocity);

		// Assert
		let part = body.parts[0];
		expect(part.id).toEqual(body.id);
		assertXY(part.position, 37., 37.);
		assertXY(part.positionPrev, 41., 41.);
		assertXY(part.velocity, 159., 160.);
		assertBounds(part.bounds, 59., 59., 220., 222.);
		assertXY(part.position, 37., 37.);
		assertXY(part.velocity, 159., 160.);
		assertXY(part.vertices[0], 59., 59.);
		assertXY(part.vertices[1], 61., 61.);
		assertXY(part.vertices[2], 59., 62.);


		part = body.parts[1];
		assertXY(part.position, 137., 137.);
		assertXY(part.positionPrev, 243., 244.);
		assertXY(part.velocity, 259., 260.);
		assertBounds(part.bounds, 159., 159., 320., 322.);
		assertXY(part.position, 137., 137.);
		assertXY(part.velocity, 259., 260.);
		assertXY(part.vertices[0], 159., 159.);
		assertXY(part.vertices[1], 161., 161.);
		assertXY(part.vertices[2], 159., 162.);

		part = body.parts[2];
		assertXY(part.position, 237., 237.);
		assertXY(part.positionPrev, 343., 344.);
		assertXY(part.velocity, 359., 360.);
		assertBounds(part.bounds, 259., 259., 420., 422.);
		assertXY(part.position, 237., 237.);
		assertXY(part.velocity, 359., 360.);
		assertXY(part.vertices[0], 259., 259.);
		assertXY(part.vertices[1], 261., 261.);
		assertXY(part.vertices[2], 259., 262.);
	});

	it('should update body with position with setting undefined velocity', () => {
		// Arrange
		const body = getTestBodyWithPartsWithParent();
		const position = Vector.create(37., 37.); // true random
		const updateVelocity = undefined;

		// Act
		Body.setPosition(body, position, updateVelocity);

		// Assert
		let part = body.parts[0];
		expect(part.id).toEqual(body.id);
		assertXY(part.position, 37., 37.);
		assertXY(part.positionPrev, 41., 41.);
		assertXY(part.velocity, 159., 160.);
		assertBounds(part.bounds, 59., 59., 220., 222.);
		assertXY(part.position, 37., 37.);
		assertXY(part.velocity, 159., 160.);
		assertXY(part.vertices[0], 59., 59.);
		assertXY(part.vertices[1], 61., 61.);
		assertXY(part.vertices[2], 59., 62.);


		part = body.parts[1];
		assertXY(part.position, 137., 137.);
		assertXY(part.positionPrev, 243., 244.);
		assertXY(part.velocity, 259., 260.);
		assertBounds(part.bounds, 159., 159., 320., 322.);
		assertXY(part.position, 137., 137.);
		assertXY(part.velocity, 259., 260.);
		assertXY(part.vertices[0], 159., 159.);
		assertXY(part.vertices[1], 161., 161.);
		assertXY(part.vertices[2], 159., 162.);

		part = body.parts[2];
		assertXY(part.position, 237., 237.);
		assertXY(part.positionPrev, 343., 344.);
		assertXY(part.velocity, 359., 360.);
		assertBounds(part.bounds, 259., 259., 420., 422.);
		assertXY(part.position, 237., 237.);
		assertXY(part.velocity, 359., 360.);
		assertXY(part.vertices[0], 259., 259.);
		assertXY(part.vertices[1], 261., 261.);
		assertXY(part.vertices[2], 259., 262.);
	});

	it('should update body with position and setting velocity', () => {
		// Arrange
		const body = getTestBodyWithPartsWithParent();
		const position = Vector.create(37., 37.) // true random
		const updateVelocity = true

		// Act
		Body.setPosition(body, position, updateVelocity)

		// Assert
		let part = body.parts[0];
		expect(part.id).toEqual(body.id);
		assertXY(part.position, 37., 37.)
		assertXY(part.positionPrev, 139., 140.)
		assertFloat(part.speed, 144.9586147836685)
		assertXY(part.velocity, -102., -103.)
		assertBounds(part.bounds, -43., -44., 61., 62.)
		assertXY(part.vertices[0], 59., 59.)
		assertXY(part.vertices[1], 61., 61.)
		assertXY(part.vertices[2], 59., 62.)

		part = body.parts[1];
		assertBounds(part.bounds, 57., 56., 161., 162.)
		assertXY(part.position, 137., 137.)
		assertXY(part.velocity, 259., 260.)
		assertXY(part.vertices[0], 159., 159.)
		assertXY(part.vertices[1], 161., 161.)
		assertXY(part.vertices[2], 159., 162.)

		part = body.parts[2];
		assertBounds(part.bounds, 157., 156., 261., 262.)
		assertXY(part.position, 237., 237.)
		assertXY(part.velocity, 359., 360.)
		assertXY(part.vertices[0], 259., 259.)
		assertXY(part.vertices[1], 261., 261.)
		assertXY(part.vertices[2], 259., 262.)
	});

	it('should not be able to update body with undefined position without setting velocity', () => {
		// Arrange
		const body = getTestBodyWithPartsWithParent();
		const position = undefined;
		const updateVelocity = false;

		// Act
		let result = () => Body.setPosition(body, position, updateVelocity);

		// Assert
		// TODO: This causes a read or set from undefined. This should probably be fixed.
		expect(result).toThrow(/^Cannot .* properties of undefined \(.* '.*'\)$/);
	});

	it('should not be able to update undefined body with position without setting velocity', () => {
		// Arrange
		const body = undefined;
		const position = Vector.create(37., 37.) // true random
		const updateVelocity = false;

		// Act
		let result = () => Body.setPosition(body, position, updateVelocity);

		// Assert
		// TODO: This causes a read or set from undefined. This should probably be fixed.
		expect(result).toThrow(/^Cannot .* properties of undefined \(.* '.*'\)$/);
	});
});

describe('Body.setVelocity', () => {
	it('should be able to set the velocity on a body', () => {
		jest.isolateModules(() => {
			// Arrange
			const Body = require("../../../src/body/Body");
			const body = getTestBodyWithPartsWithParent();
			const velocity = { x: 42., y: 43. };

			// Act
			Body.setVelocity(body, velocity);

			// Assert
			assertXY(body.position, 139., 140.);
			assertXY(body.positionPrev, -175.99999999999994, -182.49999999999994);
			assertFloat(body.speed, 60.108235708594876);
			assertXY(body.velocity, 42., 43);
		});
	});

	it('should not be able to set undefined velocity on a body', () => {
		jest.isolateModules(() => {
			// Arrange
			const Body = require("../../../src/body/Body");
			const body = getTestBodyWithPartsWithParent();
			const velocity = undefined;

			// Act
			let result = () => Body.setVelocity(body, velocity);

			// Assert
			// TODO: This causes a read or set from undefined. This should probably be fixed.
			expect(result).toThrow(/^Cannot .* properties of undefined \(.* '.*'\)$/);
		});
	});

	it('should not be able to set velocity on an undefined body', () => {
		jest.isolateModules(() => {
			// Arrange
			const Body = require("../../../src/body/Body");
			const body = undefined;
			const velocity = { x: 42., y: 43. };

			// Act
			let result = () => Body.setVelocity(body, velocity);

			// Assert
			// TODO: This causes a read or set from undefined. This should probably be fixed.
			expect(result).toThrow(/^Cannot .* properties of undefined \(.* '.*'\)$/);
		});
	});
});

describe('Body.setAngle', () => {
	it('should be able to set the angle on a default body, not updating the velocity', () => {
		jest.isolateModules(() => {
			// Arrange
			const Body = require("../../../src/body/Body");
			const body = getTestBodyWithPartsWithParent();
			const updateVelocity = false;
			const angle = 37.;

			// Act
			Body.setAngle(body, angle, updateVelocity);

			// Assert
			let part = body.parts[0];
			expect(part.id).toEqual(body.id);
			assertFloat(part.angle, 37.);
			assertFloat(part.anglePrev, 38.);
			assertXY(part.axes[0], 139.9796525125889, -55.594036392897955);
			assertXY(part.axes[1], 142.6034190498416, -56.650374008432436);
			assertBounds(part.bounds, 167.8614319097795, 127.32394861358623, 329.62151002436985, 289.5558579204094);
			assertXY(part.position, 139., 140.);
			assertXY(part.vertices[0], 167.8614319097795, 128.3802862291207);
			assertXY(part.vertices[1], 170.4851984470322, 127.32394861358623);
			assertXY(part.vertices[2], 170.62151002436985, 129.55585792040935);


			part = body.parts[1];
			assertFloat(part.angle, 137.);
			assertFloat(part.anglePrev, 202.);
			assertXY(part.axes[0], 271.16797937522296, -108.41091716962202);
			assertXY(part.axes[1], 273.7917459124756, -109.46725478515651);
			assertBounds(part.bounds, 299.04975877241355, 74.50706783686216, 460.80983688700394, 236.7389771436853);
			assertXY(part.position, 270.1883268626341, 87.18311922327594);
			assertXY(part.vertices[0], 299.04975877241355, 75.56340545239664);
			assertXY(part.vertices[1], 301.6735253096662, 74.50706783686216);
			assertXY(part.vertices[2], 301.80983688700394, 76.73897714368529);
		

			part = body.parts[2];
			assertFloat(part.angle, 237.);
			assertFloat(part.anglePrev, 302.);
			assertXY(part.axes[0], 402.35630623785704, -161.22779794634607);
			assertXY(part.axes[1], 404.9800727751097, -162.28413556188056);
			assertBounds(part.bounds, 430.2380856350476, 21.6901870601381, 591.998163749638, 183.92209636696123);
			assertXY(part.position, 401.37665372526817, 34.366238446551876);
			assertXY(part.vertices[0], 430.2380856350476, 22.74652467567259);
			assertXY(part.vertices[1], 432.8618521723003, 21.6901870601381);
			assertXY(part.vertices[2], 432.998163749638, 23.92209636696124);
		});
	});

	it('should be able to set the angle on a default body, not using the undefined update velocity', () => {
		jest.isolateModules(() => {
			// Arrange
			const Body = require("../../../src/body/Body");
			const body = getTestBodyWithPartsWithParent();
			const updateVelocity = undefined;
			const angle = 37.;

			// Act
			Body.setAngle(body, angle, updateVelocity);

			// Assert
			let part = body.parts[0];
			expect(part.id).toEqual(body.id);
			assertFloat(part.angle, 37.);
			assertFloat(part.anglePrev, 38.);
			assertXY(part.axes[0], 139.9796525125889, -55.594036392897955);
			assertXY(part.axes[1], 142.6034190498416, -56.650374008432436);
			assertBounds(part.bounds, 167.8614319097795, 127.32394861358623, 329.62151002436985, 289.5558579204094);
			assertXY(part.position, 139., 140.);
			assertXY(part.vertices[0], 167.8614319097795, 128.3802862291207);
			assertXY(part.vertices[1], 170.4851984470322, 127.32394861358623);
			assertXY(part.vertices[2], 170.62151002436985, 129.55585792040935);


			part = body.parts[1];
			assertFloat(part.angle, 137.);
			assertFloat(part.anglePrev, 202.);
			assertXY(part.axes[0], 271.16797937522296, -108.41091716962202);
			assertXY(part.axes[1], 273.7917459124756, -109.46725478515651);
			assertBounds(part.bounds, 299.04975877241355, 74.50706783686216, 460.80983688700394, 236.7389771436853);
			assertXY(part.position, 270.1883268626341, 87.18311922327594);
			assertXY(part.vertices[0], 299.04975877241355, 75.56340545239664);
			assertXY(part.vertices[1], 301.6735253096662, 74.50706783686216);
			assertXY(part.vertices[2], 301.80983688700394, 76.73897714368529);
		

			part = body.parts[2];
			assertFloat(part.angle, 237.);
			assertFloat(part.anglePrev, 302.);
			assertXY(part.axes[0], 402.35630623785704, -161.22779794634607);
			assertXY(part.axes[1], 404.9800727751097, -162.28413556188056);
			assertBounds(part.bounds, 430.2380856350476, 21.6901870601381, 591.998163749638, 183.92209636696123);
			assertXY(part.position, 401.37665372526817, 34.366238446551876);
			assertXY(part.vertices[0], 430.2380856350476, 22.74652467567259);
			assertXY(part.vertices[1], 432.8618521723003, 21.6901870601381);
			assertXY(part.vertices[2], 432.998163749638, 23.92209636696124);
		});
	});	

	it('should be able to set the angle on a default body, updating the velocity', () => {
		jest.isolateModules(() => {
			// Arrange
			const Body = require("../../../src/body/Body");
			const body = getTestBodyWithPartsWithParent();
			const updateVelocity = true;
			const angle = 37.;

			// Act
			Body.setAngle(body, angle, updateVelocity);

			// Assert
			let part = body.parts[0];
			expect(part.id).toEqual(body.id);
			assertFloat(part.angle, 37.);
			assertFloat(part.anglePrev, 101.);
			assertFloat(part.angularSpeed, 64.);
			assertFloat(part.angularVelocity, -64.);
			assertXY(part.axes[0], 139.9796525125889, -55.594036392897955);
			assertXY(part.axes[1], 142.6034190498416, -56.650374008432436);
			assertBounds(part.bounds, 167.8614319097795, 127.32394861358623, 329.62151002436985, 289.5558579204094);
			assertXY(part.position, 139., 140.);
			assertXY(part.vertices[0], 167.8614319097795, 128.3802862291207);
			assertXY(part.vertices[1], 170.4851984470322, 127.32394861358623);
			assertXY(part.vertices[2], 170.62151002436985, 129.55585792040935);

			part = body.parts[1];
			assertFloat(part.angle, 137.);
			assertFloat(part.anglePrev, 202.);
			assertXY(part.axes[0], 271.16797937522296, -108.41091716962202);
			assertXY(part.axes[1], 273.7917459124756, -109.46725478515651);
			assertBounds(part.bounds, 299.04975877241355, 74.50706783686216, 460.80983688700394, 236.7389771436853);
			assertXY(part.position, 270.1883268626341, 87.18311922327594);
			assertXY(part.vertices[0], 299.04975877241355, 75.56340545239664);
			assertXY(part.vertices[1], 301.6735253096662, 74.50706783686216);
			assertXY(part.vertices[2], 301.80983688700394, 76.73897714368529);

			part = body.parts[2];
			assertFloat(part.angle, 237.);
			assertFloat(part.anglePrev, 302.);
			assertXY(part.axes[0], 402.35630623785704, -161.22779794634607);
			assertXY(part.axes[1], 404.9800727751097, -162.28413556188056);
			assertBounds(part.bounds, 430.2380856350476, 21.6901870601381, 591.998163749638, 183.92209636696123);
			assertXY(part.position, 401.37665372526817, 34.366238446551876);
			assertXY(part.vertices[0], 430.2380856350476, 22.74652467567259);
			assertXY(part.vertices[1], 432.8618521723003, 21.6901870601381);
			assertXY(part.vertices[2], 432.998163749638, 23.92209636696124);
		});
	});


	it('should not be able to set an undefined angle on a default body, not updating the velocity', () => {
		jest.isolateModules(() => {
			// Arrange
			const Body = require("../../../src/body/Body");
			const body = getTestBodyWithPartsWithParent();
			const updateVelocity = false;
			const angle = undefined;

			// Act
			Body.setAngle(body, angle, updateVelocity);

			// Assert
			let part = body.parts[0];
			expect(part.id).toEqual(body.id);
			expect(part.angle).toEqual(NaN);
			expect(part.anglePrev).toEqual(NaN);
			expect(part.axes[0].x).toEqual(NaN);
			expect(part.axes[0].y).toEqual(NaN);
			expect(part.axes[1].x).toEqual(NaN);
			expect(part.axes[1].y).toEqual(NaN);
			expect(part.bounds.min.x).toEqual(Infinity);
			expect(part.bounds.min.y).toEqual(Infinity);
			expect(part.bounds.max.x).toEqual(-Infinity);
			expect(part.bounds.max.y).toEqual(-Infinity);
			expect(part.vertices[0].x).toEqual(NaN);
			expect(part.vertices[0].y).toEqual(NaN);
			expect(part.vertices[1].x).toEqual(NaN);
			expect(part.vertices[1].y).toEqual(NaN);
			expect(part.vertices[2].x).toEqual(NaN);
			expect(part.vertices[2].y).toEqual(NaN);
			assertXY(part.position, 139., 140.);

			part = body.parts[1];
			expect(part.angle).toEqual(NaN);
			assertFloat(part.anglePrev, 202.);
			expect(part.axes[0].x).toEqual(NaN);
			expect(part.axes[0].y).toEqual(NaN);
			expect(part.axes[1].x).toEqual(NaN);
			expect(part.axes[1].y).toEqual(NaN);
			expect(part.bounds.min.x).toEqual(Infinity);
			expect(part.bounds.min.y).toEqual(Infinity);
			expect(part.bounds.max.x).toEqual(-Infinity);
			expect(part.bounds.max.y).toEqual(-Infinity);
			expect(part.vertices[0].x).toEqual(NaN);
			expect(part.vertices[0].y).toEqual(NaN);
			expect(part.vertices[1].x).toEqual(NaN);
			expect(part.vertices[1].y).toEqual(NaN);
			expect(part.vertices[2].x).toEqual(NaN);
			expect(part.vertices[2].y).toEqual(NaN);
			expect(part.position.x).toEqual(NaN);
			expect(part.position.y).toEqual(NaN);

			part = body.parts[2];
			expect(part.angle).toEqual(NaN);
			assertFloat(part.anglePrev, 302.);
			expect(part.axes[0].x).toEqual(NaN);
			expect(part.axes[0].y).toEqual(NaN);
			expect(part.axes[1].x).toEqual(NaN);
			expect(part.axes[1].y).toEqual(NaN);
			expect(part.bounds.min.x).toEqual(Infinity);
			expect(part.bounds.min.y).toEqual(Infinity);
			expect(part.bounds.max.x).toEqual(-Infinity);
			expect(part.bounds.max.y).toEqual(-Infinity);
			expect(part.vertices[0].x).toEqual(NaN);
			expect(part.vertices[0].y).toEqual(NaN);
			expect(part.vertices[1].x).toEqual(NaN);
			expect(part.vertices[1].y).toEqual(NaN);
			expect(part.vertices[2].x).toEqual(NaN);
			expect(part.vertices[2].y).toEqual(NaN);
			expect(part.position.x).toEqual(NaN);
			expect(part.position.y).toEqual(NaN);
		});
	});

	it('should not be able to set the angle on a undefined body, not updating the velocity', () => {
		jest.isolateModules(() => {
			// Arrange
			const Body = require("../../../src/body/Body");
			const body = undefined;
			const updateVelocity = false;
			const angle = 37.;

			// Act
			let result = () => Body.setAngle(body, angle, updateVelocity);

			// Assert
			// TODO: This causes a read or set from undefined. This should probably be fixed.
			expect(result).toThrow(/^Cannot .* properties of undefined \(.* '.*'\)$/); 
		});
	});	

});
