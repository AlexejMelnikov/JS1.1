// // Функция sum должна возвращать тип данных true. Проверить её на это.

// function sum(a, b) {
// 	return a + b > 10;
// }
// sum(2,2)

// let assert = require('chai').assert;

// describe("sum", function() {

// 	it("Receive BOOL", function() {
// 		assert.typeOf(sum(3, 7), 'boolean') 
// 	})
// });

// // Переменная num должна быть равна 5. Проверить на соответствие.

// let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// let num = arr[1][1];

//  // let assert = require('chai').assert;

// describe("num", function() {

// 	it("num == 5", function() {
// 		assert.equal(num, 5); 
// 	})
// });

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

// let assert = require('chai').assert;
var each = function(startArr, f){return f(startArr)};
var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i] = Math.sqrt(a[i]);
	}
	return newArr;
}
describe('myFunc', function() {

	it("Return type of arr", function() {
		assert.typeOf(each(arr, myFunc), 'Array');
	
	})
})
describe('each', function() {
	it('length of Array == 5', function() {
	 	assert.lengthOf(each(arr, myFunc),5);	
	})
	it('Function Each return type Array too', function() {
	 	assert.typeOf(each(arr, myFunc), 'Array');	
	})
})
console.log(typeof(each(arr, myFunc)));
 