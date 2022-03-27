export function capitalize(str: string) {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

export function pascalCase(str: string) {
  const replaced = str.replace(/_(\w)(\w*)/g, (_g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase())
  return capitalize(replaced)
}