export const knapsack = (items, capacity) => {
    var memo = [];
  
    for (var i = 0; i < items.length; i++) {
      var row = [];
      for (var cap = 1; cap <= capacity; cap++) {
        row.push(getSolution(i, cap));
      }
      memo.push(row);
    }
  
    return getLast();
  
    function getLast() {
      var lastRow = memo[memo.length - 1];
      return lastRow[lastRow.length - 1];
    }
  
    function getSolution(row, cap) {
      const NO_SOLUTION = { maxToll: 0, selectedVehicle: [], remaining: 0 };
      const col = cap - 1;
      const lastItem = items[row];
      const remaining = cap - lastItem.w;
  
      const lastSolution =
        row > 0 ? memo[row - 1][col] || NO_SOLUTION : NO_SOLUTION;
      const lastSubSolution = row > 0 ? memo[row - 1][remaining - 1] || NO_SOLUTION : NO_SOLUTION;
  
      if (remaining < 0) {
        return lastSolution;
      }
      var lastValue = lastSolution.maxToll;
      var lastSubValue = lastSubSolution.maxToll;
  
      var newValue = lastSubValue + lastItem.v;
      if (newValue >= lastValue) {
        var _lastSubSet = lastSubSolution.selectedVehicle.slice();
        _lastSubSet.push(lastItem);
        return { maxToll: newValue, selectedVehicle: _lastSubSet, remaining };
      } else {
        return lastSolution;
      }
    }
  };
