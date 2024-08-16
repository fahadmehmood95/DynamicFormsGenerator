export function collectValuesWithFormNames(data) {
  const allValues = [];

  Object.entries(data).forEach(([formName, arrayOfObjects]) => {
    arrayOfObjects.forEach((obj) => {
      Object.entries(obj).forEach(([key, value]) => {
        allValues.push({ FormName: formName, [key]: value });
      });
    });
  });

  return allValues;
}
