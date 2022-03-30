<script setup lang="ts">
  import { computed } from "vue";
  import { getProcedures } from "@/models/procedure";
  import { CreateConsultInput } from "@/services/types.generated";
  import SupervisionLevelSelect from "./inputs/SupervisionLevelSelect.vue";

  const props = defineProps<{
    modelValue?: CreateConsultInput["selectedProcedures"];
    readonly: boolean;
  }>();
  const emits = defineEmits(["update:modelValue", "deleteProcedure"]);
  const { data, error, fetching } = getProcedures();

  const selectedProcedures = computed(() => {
    if (!props.modelValue || !props.modelValue.length || !data.value) return [];
    return props.modelValue.map((selectedProcedure) => {
      return data.value?.allProcedures.find((procedure) => {
        return procedure.id === selectedProcedure.procedureId;
      });
    });
  });
</script>

<template>
  <q-list bordered seperator>
    <q-item-label header>Selected Procedures:</q-item-label>
    <template
      v-for="(selectedProcedure, index) in selectedProcedures"
      :key="selectedProcedure.id"
    >
      <q-item>
        <q-item-section>
          <q-item-label>{{ selectedProcedure?.name }} </q-item-label>
          <q-item-label caption>
            Type: {{ selectedProcedure?.type.name }}
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <SupervisionLevelSelect
            v-model="modelValue[index].supervisionLevelId"
          />
        </q-item-section>
        <q-item-section v-if="!readonly" side>
          <q-btn
            icon="delete"
            rounded
            color="red"
            flat
            class="q-pa-sm"
            @click="emits('deleteProcedure', index)"
          />
        </q-item-section>
      </q-item>
      <q-separator />
    </template>
  </q-list>
</template>
<style scoped></style>
