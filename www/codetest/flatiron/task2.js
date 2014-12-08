
function solution(T) {
  var cities = {};
  var capital = null;
  T.forEach(function(v, k) {
    if (v === k) {
      capital = k;
      cities[k] = {
        neighbors: []
      }
    } else {
      if (cities[k]) {
        cities[k].neighbors.push(v);
      } else {
        cities[k] = {
          neighbors: [v]
        }
      }

      if (cities[v]) {
        cities[v].neighbors.push(k);
      } else {
        cities[v] = {
          neighbors: [k]
        }
      }
    }
  });

  //console.log(cities, capital);

  // now do a BFS starting from capital

  var queue = [
    {
      id: capital,
      distFromCapital: 0
    }];
  var visited = {};
  var ret = [];
  for (var i = 0; i < T.length-1; ++i) {
    ret.push(0);
  }
  while (queue.length !== 0) {
    var city = queue.shift();
    visited[city.id] = true;
    //console.log(city.id, cities[city.id].neighbors, city.distFromCapital);
    if (city.distFromCapital > 0) {
      ret[city.distFromCapital - 1]++;
    }
    cities[city.id].neighbors.forEach(function(nid) {
      if (visited[nid] !== true) {
        queue.push({
          id: nid,
          distFromCapital: city.distFromCapital + 1
        });
      }
    });
  }
  return ret;

}

//var input = [9, 1, 4, 9, 0, 4, 8, 9, 0, 1];
console.log(solution(input));