<template>
  <div id="chartContainer">
    <canvas id="currencyChart"></canvas>
  </div>
  <button @click="createChart">Wyślij żądanie</button>
</template>

<script>
import { Chart } from "chart.js";
import {
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import CurrencyService from "../services/CurrencyService.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

export default {
  props: ["targetCurrency", "baseCurrency", "startDate", "endDate"],
  mounted() {
    // this.createChart(); // Usuń to, jeśli chcesz, aby wykres był tworzony tylko po kliknięciu przycisku
  },
  methods: {
    async createChart() {
      const chartData = await Promise.all(
        this.targetCurrency.map(async (targetCurrency) => {
          console.log(`Fetching data for ${targetCurrency}`); // Dodano log konsoli
          const data = await CurrencyService.fetchCurrencyData(
            this.baseCurrency,
            targetCurrency,
            this.startDate,
            this.endDate
          ).catch((error) =>
            console.error(`Error fetching data for ${targetCurrency}:`, error)
          ); // Dodano obsługę błędów
          console.log(`Data for ${targetCurrency}:`, data); // Dodano log konsoli
          if (data && Array.isArray(data.rates)) {
            // Dodano sprawdzanie błędów
            return {
              label: targetCurrency,
              data: data.rates.map((rate) => rate[targetCurrency]),
              fill: false,
            };
          } else {
            console.error(`Invalid data for ${targetCurrency}:`, data);
          }
        })
      );

      if (chartData[0] && chartData[0].data) {
        // Dodano sprawdzanie błędów
        new Chart(
          document.getElementById("currencyChart"),
          console.log(this.startDate, this.endDate),
          {
            type: "line",
            data: {
              labels: Object.keys(chartData[0].data),
              datasets: chartData,
            },
          }
        );
      } else {
        console.error("Invalid chart data:", chartData);
      }
    },
  },
};
</script>

<style>
#currencyChart {
  display: block;
  max-width: 800px;
  max-height: 600px;
  margin: 0 auto;
}
</style>
