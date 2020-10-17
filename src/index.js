
module.exports = function towelSort (matrix) {

  if(!matrix || matrix.length<1) return [];

  return matrix.reduce((prev, curr, index) =>{
    if(index%2 !==0){
      curr.reverse();
    }
    return prev.concat(curr);
  },[]);
}
