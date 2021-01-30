import { createStore } from 'redux';

const initialStateShop = {
    type: ["banana", "apple", "papaya"],
    cost: [10, 8, 10],
    discount: 5,
    buyProd: [],
    summaProd: []
}

const reduser = function (state = initialStateShop, action) {

    switch (action.type) {
        case "ACTION_SET_BUY_PROD":
            {
                return { ...state, buyProd: [...state.buyProd, action.payload] }
            }
        case "ACTION_SET_SUMMA":
            {
                return { ...state, summaProd: [...state.summaProd, action.payload] }
            }
        default: return state;
    }
}

const store = createStore(reduser);

store.subscribe(function () {
    console.log(store.getState());
});

export default store;