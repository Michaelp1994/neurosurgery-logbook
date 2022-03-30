<script setup lang="ts">
  import { useFundingTypeStatisticsQuery } from "@/services/types.generated";
  import { computed } from "vue";
  // const props = defineProps(["publicFunded", "privateFunded"]);
  //const series = [props.publicFunded, props.privateFunded];
  // const options = {
  //   labels: ["Private", "Public"],
  // };
  const { data, error, fetching } = useFundingTypeStatisticsQuery();
  const series = computed(() =>
    data.value?.allFundingTypes.map((fundingType) => fundingType.totalConsults)
  );
  const options = computed(() => ({
    labels: data.value?.allFundingTypes.map((fundingType) => fundingType.name),
  }));
</script>
<template>
  <template v-if="!fetching">
    <apexchart width="100%" type="pie" :series="series" :options="options" />
  </template>
</template>
<style scoped></style>
