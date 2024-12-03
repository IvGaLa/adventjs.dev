function prepareGifts(gifts) {
  return [...new Set([...gifts.map(Number)].sort((a, b) => a - b))]
}