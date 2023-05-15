export default function cleanSet(set, startString) {
  if (!set || !(set instanceof Set)) {
    throw new Error('Invalid set input');
  }

  if (typeof startString !== 'string') {
    throw new Error('Invalid startString input');
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
