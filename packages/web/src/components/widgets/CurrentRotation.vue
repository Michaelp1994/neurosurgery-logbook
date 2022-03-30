<script setup lang="ts">
  import { useApplicationStore } from "@/store/Application.store";
  import { currentRotation } from "@/models/rotation";
  import { watch } from "vue";

  const applicationStore = useApplicationStore();
  const { data, error, fetching } = currentRotation(); //FIXME: needs to be redone. where can I ensure this has been called all the time but not be unnesssarily calling.
  watch(
    () => data.value,
    () => {
      if (!data.value) return null;
      applicationStore.saveCurrentRotation(data.value.currentRotation);
    }
  );
</script>
<template>
  <q-card class="bg-primary">
    <q-card-section horizontal>
      <q-card-section class="bg-red-8 text-white col-3">
        <q-icon name="location_city" class="text-h2" />
      </q-card-section>
      <q-card-section class="bg-red-5 text-white col-9">
        <div class="text-h6">Current Rotation</div>

        <div class="text-h6">
          {{ data?.currentRotation?.name }}:
          {{ data?.currentRotation?.hospital.name }}
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
<style scoped></style>
