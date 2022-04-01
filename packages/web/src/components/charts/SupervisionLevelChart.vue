<script setup lang="ts">
  import { useSupervisionLevelStatisticsQuery } from "@/services/types.generated";
  import { computed } from "vue";

  const { data, fetching } = useSupervisionLevelStatisticsQuery();
  const series = computed(() =>
    data.value?.allSupervisionLevels.map(
      (supervisionLevel) => supervisionLevel.totalConsults
    )
  );
  const options = computed(() => ({
    labels: data.value?.allSupervisionLevels.map(
      (supervisionLevel) => supervisionLevel.name
    ),
  }));
</script>
<template>
  <template v-if="!fetching">
    <apexchart type="pie" :series="series" :options="options" />
  </template>
</template>
<style scoped></style>
