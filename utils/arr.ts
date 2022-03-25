/* Will mutate the passed in array */
export function removeById(arr: Array<{ id: number }>, idToRemove: number) {
  arr.splice(arr.findIndex(({ id }) => id === idToRemove), 1)
}