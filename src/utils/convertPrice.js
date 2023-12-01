export const convertPrice = (price) => {
  const newPrice = (price / 100).toLocaleString("pt-BR", {
    minimumIntegerDigits: 2,
    minimumFractionDigits: 2,
  })

  return newPrice
}

export const formatCurrencyOnChange = (inputValue) => {
  const numericValue = inputValue.replace(/\D/g, "")
  const valueInCents = parseInt(numericValue, 10)

  if (isNaN(valueInCents)) {
    return "R$ 0,00"
  }

  const dollars = Math.floor(valueInCents / 100)
  const cents = valueInCents % 100

  const formatted = `R$ ${dollars.toLocaleString("pt-BR")},${cents
    .toString()
    .padStart(2, "0")}`

  return formatted
}

export const calculateNewPrice = ({
  dataPrice,
  statePrice,
  operator,
  quantity,
}) => {
  if (operator === "-") {
    if (quantity == 1) return
    const newPrice = (
      (Number(statePrice.replace(",", ".") * 100) - dataPrice) /
      100
    ).toLocaleString("pt-BR", {
      minimumIntegerDigits: 2,
      minimumFractionDigits: 2,
    })

    return newPrice
  }

  if (operator === "+") {
    const newPrice = (
      (Number(statePrice.replace(",", ".") * 100) + dataPrice) /
      100
    ).toLocaleString("pt-BR", {
      minimumIntegerDigits: 2,
      minimumFractionDigits: 2,
    })

    return newPrice
  }
}
