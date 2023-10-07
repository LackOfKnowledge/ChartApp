<template>
  <div>
    <label>Data początkowa:</label>
    <input
      type="date"
      v-model="startDate"
    />
    <label>Data końcowa:</label>
    <input
      type="date"
      v-model="endDate"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDate: null,
      endDate: null,
    };
  },
  watch: {
    startDate(newVal) {
      this.$emit("update:startDate", newVal);
    },
    endDate(newVal) {
      this.$emit("update:endDate", newVal);
    },
  },
};
</script>
