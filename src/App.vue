<template>
  <div id="app">
    <currency-selector
      :targetCurrency="targetCurrency"
      v-model:baseCurrency="baseCurrency"
    />
    <time-span-selector
      v-model:startDate="startDate"
      v-model:endDate="endDate"
    />
    <currency-chart
      :targetCurrency="targetCurrency"
      :baseCurrency="baseCurrency"
      :startDate="startDate"
      :endDate="endDate"
    />
  </div>
</template>

<script>
import CurrencyChart from "./components/CurrencyChart.vue";
import CurrencySelector from "./components/CurrencySelector.vue";
import TimeSpanSelector from "./components/TimeSpanSelector.vue";

export default {
  components: {
    CurrencyChart,
    CurrencySelector,
    TimeSpanSelector,
  },
  data() {
    return {
      targetCurrency: ["EUR", "USD", "PLN"],
      baseCurrency: "EUR",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
    };
  },
};
</script>
