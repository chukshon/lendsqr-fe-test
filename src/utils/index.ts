/**
 * Capitalizes a given word
 * @param {string} name - The word to be capitalized.
 * @returns the capitalizeWord
 */

export const capitalizeWord = (name: string) => {
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
  return nameCapitalized
}
