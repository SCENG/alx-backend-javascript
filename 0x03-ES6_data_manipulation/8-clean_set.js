export default function cleanSet(set, startString) {
  if (!set || !(set instanceof Set)) {
    return '';
  }

  if (typeof startString !== 'string') {
    return '';
  }

  const cleanedValues = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const cleanedValue = value.substring(startString.length);
      if (cleanedValue !== '') {
        cleanedValues.push(cleanedValue);
      }
    }
  }

  return cleanedValues.join('-');
}
