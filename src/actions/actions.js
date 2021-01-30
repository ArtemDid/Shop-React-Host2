const CreateActionSetBuyProd = function (buyProd) {
  return {
    type: "ACTION_SET_BUY_PROD",
    payload: buyProd
  }
}

const CreateActionSetSumma = function (summaProd) {
  return {
    type: "ACTION_SET_SUMMA",
    payload: summaProd
  }
}

export { CreateActionSetBuyProd, CreateActionSetSumma };