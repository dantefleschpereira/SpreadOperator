//nested array
var middle = [3, 4]
var arr = [1, 2, middle, 5, 6]
console.log(arr)

//‘espalhar’ os elementos de um array
var middle = [3, 4]
var arr = [1, 2, ...middle, 5, 6]
console.log(arr)

//Neste caso, arr2 não é uma cópia de arr, mas sim o próprio arr, uma vez que a referência de memória de ambos é a mesma.
var arr = ['a', 'b', 'c']
var arr2 = arr
console.log(arr)
arr2.push('d')
console.log(arr2)
console.log(arr)

//cópia de arrays com Spread


