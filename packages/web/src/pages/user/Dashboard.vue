<script setup lang="ts">
  import ProcedureTopicChart from "@/components/charts/ProcedureTopicChart.vue";
  import SupervisionLevelChart from "@/components/charts/SupervisionLevelChart.vue";
  import FundingTypeChart from "@/components/charts/FundingTypeChart.vue";
  import ProcedureTypeChart from "@/components/charts/ProcedureTypeChart.vue";

  import TotalConsults from "@/components/widgets/TotalConsults.vue";
  import CurrentRotation from "../../components/widgets/CurrentRotation.vue";
  import ReloadPrompt from "@/components/ReloadPrompt.vue";
</script>

<template>
  <q-page padding>
    <ReloadPrompt />
    <div class="row items-stretch justify-center">
      <div class="col-xs-12 col-sm-6 col-lg-4 q-pa-sm">
        <TotalConsults />
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 q-pa-sm">
        <CurrentRotation />
      </div>
    </div>
    <div class="row items-stretch">
      <div class="col-xs-12 col-sm-6 col-lg-4 q-pa-sm">
        <q-card class="full-height">
          <q-card-section>
            <ProcedureTopicChart />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-6 col-lg-4 q-pa-sm">
        <q-card class="full-height">
          <q-card-section>
            <SupervisionLevelChart />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-6 col-lg-4 q-pa-sm">
        <q-card class="full-height">
          <q-card-section>
            <FundingTypeChart />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-12 col-lg-12 q-pa-sm">
        <q-card class="full-height">
          <q-card-section>
            <ProcedureTypeChart />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
  .border {
    border: 1px black solid;
  }
  .full-height {
    height: 100%;
  }
</style>
