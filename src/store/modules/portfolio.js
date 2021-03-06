const state = {
  funds: 10000,
  stocks: []
};


const mutations = {
  'BUY_STOCK'(state, { stockId, quantity, stockPrice}){
    const record =  state.stocks.find(stock => stock.id = stockId);
    if(record){
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: stockId,
        quantity
      })
    }
    state.funds -= stockPrice * quantity;

  },
  'SELL_STOCK'(state, { stockId, quantity, stockPrice}){
    const record =  state.stocks.find(stock => stock.id = stockId);
    if(record.quantity > quantity){
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record),1)
    }
    state.funds += stockPrice * quantity;
  },
  'SET_PORTFOLIO'(state, data){
    console.log(data);
    state.funds = data.funds;
    state.stocks = data.stockPortfolio ? data.stockPortfolio : []
  }
}


const actions = {
  sellStock({commit},order){
    commit('SELL_STOCK',order)
  }
};

const getters  = {
  stockPortfolio(state, getters){
    return state.stocks.map(stock =>{
       const record = getters.stocks.find(element => element.id == stock.id);
       return {
         id: stock.id,
         quantity: stock.quantity,
         name: record.name,
         price: record.price
       }
    })
  },
  funds(state){
    return state.funds
  }
}


export default {
  getters,
  actions,
  state,
  mutations
}