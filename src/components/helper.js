

function groupByArray(arr, key) {
    return arr?.reduce((acc, init) => {
      let v = key instanceof Function ? key(init) : init[key]; let el = acc.find((r) => r && r.key === v);
      if (el) {
        el.values.push(init);
      }
      else {
        acc.push({ key: v, values: [init] });
      }
      return acc;
    }, []);
}
  
export default groupByArray;