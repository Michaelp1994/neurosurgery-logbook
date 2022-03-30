<script setup lang="ts">
  import { useProcedureTopicStatisticsQuery } from "@/services/types.generated";
  import { computed } from "vue";

  const { data, error, fetching } = useProcedureTopicStatisticsQuery();
  const series = computed(() =>
    data.value?.allProcedureTopics.map(
      (procedureTopic) => procedureTopic.totalConsults
    )
  );
  const options = computed(() => ({
    labels: data.value?.allProcedureTopics.map(
      (procedureTopic) => procedureTopic.shortName
    ),
  }));
</script>
<template>
  <template v-if="!fetching">
    <apexchart type="pie" :series="series" :options="options" />
  </template>
</template>
<style scoped></style>
