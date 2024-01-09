// Function that returns a boolean value if all elements of an array exist.
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
