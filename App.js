
//nested array
var middle = [3, 4]
var arr = [1, 2, middle, 5, 6]
console.log(arr)

//‘espalhar’ os elementos de um array
var middle = [3, 4]
var arr = [1, 2, ...middle, 5, 6]
console.log(arr)

//neste caso, arr2 não é uma cópia de arr, mas sim o próprio arr, uma vez que a referência de memória de ambos é a mesma.
var arr = ['a', 'b', 'c']
var arr2 = arr
console.log(arr)
arr2.push('d')
console.log(arr2)
console.log(arr)

//cópia de arrays com Spread
var arr = ['a', 'b', 'c']
var arr2 = [...arr]
console.log(arr)
arr.push('d')
console.log[arr2]
console.log(arr)

//concatenação de arrays com Spread
var arr = ['a', 'b', 'c']
var arr2 = ['d', 'e', 'f']
var arr1 = arr.concat(arr2)
console.log(arr1)

var arr = ['a', 'b', 'c']
var arr2 = ['d', 'e', 'f']
var arr1 = [...arr, ...arr2]
console.log(arr1)

//operações matemáticas com Spread
var arr = [2, 4, 6, 8, 0]
function max(arr){
  return Math.max.apply(null, arr)
}
var maior = max(arr)
console.log(maior)

function max1(arr){
  return Math.max(...arr)
}
var maior = max1(arr)
console.log(maior)

//string para Array
var str = 'hello'
var chars = [...str]
console.log(chars)