/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 
  let amount = 0;
  let first;
  let second;
  let third;

  for  (let i = 0; i < preferences.length; i++) {
     
     first = preferences[i];
     if (preferences[i] === false){
       continue;
     }
     second = preferences[first - 1];
     if (preferences[first - 1] === false || first == second) {
        continue;
     }
     third = preferences[second - 1];
     if(third == (i + 1) && preferences[second - 1] !== false) {
        amount++;
        preferences[first - 1] = false;
        preferences[second - 1] = false;
        preferences[third - 1] = false;
     }
  }
  return amount;
};
