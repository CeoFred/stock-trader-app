import Vue from 'vue';

export const loadData =  function({commit}){
  Vue.http.get('data.json')
  .then(data => data.json())
  .then(da => {
    if(da){
      const stocks = da.stocks;
      const funds = da.funds;
      const stockPortfolio = da.stockPortfolio;

      const portfolio = {
        stockPortfolio,
        funds
      }

      commit('SET_STOCKS',stocks)
      commit('SET_PORTFOLIO', portfolio)
    }
  })
}