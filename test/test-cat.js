var Cat = require('../cat5');
var assert = require('assert');

describe('test cat', function () {
	it('should exist', function () {
		var cat = new Cat();
		assert.equal(typeof cat === 'object', true)
	})

	it('should have a default name of Simon', function () {
		var cat = new Cat();
		assert.equal(cat.name === 'Simon', true);
	})

	it('should have a name if given a name', function () {
		var cat = new Cat('Johnny');
		assert.equal(cat.name === 'Johnny', true);
	})

	it('should meow', function () {
		var cat = new Cat();
		var meow = cat.meow();
		assert.equal(meow, 'MROW');
	})	

	it('should eat if told to eat', function () {
		var cat = new Cat();
		var eat = cat.eat();
		assert.equal(eat, 'nom nom nom');
	})	
})