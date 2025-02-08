export const flatten = (array, level = 1, resultArray = []) => {
  if (level === 0) {
    resultArray.push(...array);
    return resultArray;
  }

  for (const element of array) {
    if (Array.isArray(element)) {
      flatten(element, level - 1, resultArray);
    } else {
      resultArray.push(element);
    }
  }

  return resultArray;
};

export const arrayFlat = (array, level) => {
  const depth = Number(level);
  const invalidArray = !Array.isArray(array);

  const invalidDepth = isNaN(depth) || depth <= 0 || depth === null;

  if (invalidDepth || invalidArray) return array;

  return flatten(array, depth);
};
