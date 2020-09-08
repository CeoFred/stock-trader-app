<template>
  <div>
   <app-stock :stock="stock" v-for="stock in stocks" :key="stock.id"></app-stock>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
import Stock from './Stock.vue'
export default {
  computed: {
    ...mapGetters({
      stocks:'stockPortfolio'
    })
    },
    components: {
      appStock: Stock
    }
}
</script>