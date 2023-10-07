import axios from "axios";

export default {
  async fetchCurrencyData(baseCurrency, targetCurrency, startDate, endDate) {
    const response = await axios.get(
      `https://api.frankfurter.app/${startDate}..${endDate}?from=${baseCurrency}&to=${targetCurrency}`
    );
    return response.data;
  },
};
