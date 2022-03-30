<script setup lang="ts">
  import { useProcedureTypeStatisticsQuery } from "@/services/types.generated";
  import { computed } from "vue";
  const { data, error, fetching } = useProcedureTypeStatisticsQuery();
  const series = computed(() => [
    {
      data: data.value?.allProcedureTypes.map(
        (procedureType) => procedureType.totalConsults
      ),
    },
  ]);
  const options = computed(() => ({
    labels: data.value?.allProcedureTypes.map(
      (procedureType) => procedureType.name
    ),
  }));

  // const series = [
  //   {
  //     data: [8, 36, 50, 3, 55, 38, 626, 5, 67, 154, 1, 5, 4, 15, 2, 2, 1, 1],
  //   },
  // ];
  // const options = {
  //   toolbar: {
  //     show: false,
  //   },
  //   chart: {
  //     id: "vuechart-example",
  //   },
  //   xaxis: {
  //     categories: [
  //       "Cerebrovascular",
  //       "Cranio-Cervical Junction",
  //       "Epilepsy",
  //       "Hydrocephalus",
  //       "Infection",
  //       "Minor Procedures/Miscellaneous",
  //       "Pain and Spasticity",
  //       "Peripheral Nerve Surgery",
  //       "Spine",
  //       "Stereotactic",
  //       "Trauma",
  //       "Tumour - Cranial",
  //       "Cerebrovascular (Paeds)",
  //       "Craniofacial (Paeds)",
  //       "Epilepsy (Paeds)",
  //       "Hydrocephalus (Paeds)",
  //       "Minor Procedures/Miscellaneous (Paeds)",
  //       "Neuroendoscopy (Paeds)",
  //       "Spine (Paeds)",
  //       "Trauma (Paeds)",
  //       "Tumour (Paeds)",
  //     ],
  //   },
  // };
</script>
<template>
  <template v-if="!fetching">
    <apexchart height="auto" type="bar" :series="series" :options="options"
  /></template>
</template>
<style scoped></style>
