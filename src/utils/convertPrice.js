export const convertPrice = (price) => {
  const newPrice = (price / 100).toLocaleString("pt-BR", {
    minimumIntegerDigits: 2,
    minimumFractionDigits: 2,
  })

  return newPrice
}
