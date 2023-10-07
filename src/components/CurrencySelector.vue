<template>
  <div>
    <select v-model="selectedCurrency">
      <option
        v-for="currency in targetCurrency"
        :key="currency"
        :value="currency"
      >
        {{ currency }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["targetCurrency"],
  data() {
    return {
      selectedCurrency: null,
    };
  },
  watch: {
    selectedCurrency(newVal) {
      this.$emit("update:baseCurrency", newVal);
    },
  },
};
</script>
