/*
 [[1,2]]
 [[1,2],[3,4],[5,6]]
 [[-100,4.5],[20,22],[3.123,15.6]]
 [[1,20],[3,4],[18,30]]
 */
//var input = [[1,5],[10,15],[5,8],[17,20],[13,18]];
//var input = [[1,2]];
//var input = [[1,2],[3,4],[5,6]];
//var input = [[-100,4.5],[20,22],[3.123,15.6]];
//var input = [[1,20],[3,4],[18,30]];
(function() {
	var solve = function(input) {

		var points = [];
		input.forEach(function(it) {
			points.push({
				at: it[0],
				isStart: true
			});
			points.push({
				at: it[1],
				isStart: false
			});
		});

		points.sort(function(a, b) {
			var ret = a.at - b.at;
			if (ret !== 0) {
				return ret;
			} else {
				return a.isStart ? -1 : 1;
			}
		});

		var output = [];
		var layer = 0;
		var segStart = null;
		points.forEach(function(pt) {
			if (pt.isStart) {
				layer++;
				if (layer === 1) {
					segStart = pt.at;
				}
			} else {
				layer--;
				if (layer === 0) {
					output.push([segStart, pt.at]);
				}
			}
		});

		return output;
	};


	console.log(solve([[1,5],[10,15],[5,8],[17,20],[13,18]]));
	console.log(solve([[1,2]]));
	console.log(solve([[1,2],[3,4],[5,6]]));
	console.log(solve([[1,2],[2,3]]));
	console.log(solve([[-100,4.5],[20,22],[3.123,15.6]]));
	console.log(solve([[1,20],[3,4],[18,30]]));
})();

