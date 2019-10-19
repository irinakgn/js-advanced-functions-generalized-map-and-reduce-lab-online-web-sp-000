// Add your functions here

<<<<<<< HEAD
function map(src, func) {
  return src.map(func)
}

function reduce(src, func, param) {
  if(!!param){
    return src.reduce(func, param)
  }else {
    return src.reduce(func)
  }

=======
function mapToNegativize(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(-1 * src[i])
  }
  return r
}

function mapToNoChange(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i])
  }
  return r
}

function mapToDouble(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(2 * src[i])
  }
  return r
}

function mapToSquare(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i] * src[i])
  }
  return r
}




function map(mapToNegativize, mapToDouble, mapToNoChange, mapToSquare) {

})

//function function map(a, b, c, d, scr){
  //a(src)
  //b(src)
  //c(src)
  //d(src)
//}

function reduceToTotal(src, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < src.length; i++ ) {
    total = total + src[i]
  }
  return total
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
>>>>>>> 3e31c82076625dd5014eb53c5a9b8bc0fb87b684
}
