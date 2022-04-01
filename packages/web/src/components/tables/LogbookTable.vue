<script setup lang="ts">
  import { QTableProps } from "quasar";
  import { useProcedureLogbookQuery } from "@/services/types.generated";
  const props = defineProps<{
    modelValue: number[];
  }>();

  const columns: QTableProps["columns"] = [
    {
      name: "name",
      label: "Name",
      field: "name",
      align: "left",
    },

    {
      name: "totalPrimaryConsults",
      label: "Primary Surgeon",
      field: "totalPrimaryConsults",
      align: "center",
    },
    {
      name: "totalSecondaryConsults",
      label: "Secondary Surgeon",
      field: "totalSecondaryConsults",
      align: "center",
    },
    {
      name: "totalAssistantConsults",
      label: "Assistant Surgeon",
      field: "totalAssistantConsults",
      align: "center",
    },
    {
      name: "totalConsults",
      label: "Totals",
      field: "totalConsults",
      align: "center",
    },
  ];

  const { data, error, fetching } = useProcedureLogbookQuery();
</script>

<template>
  <template v-if="error">
    <q-card-section>Unfortunately, there is an error.</q-card-section>
  </template>
  <template v-else>
    <q-table
      :columns="columns"
      :rows="data?.allProcedures"
      :loading="fetching"
      :pagination="{ rowsPerPage: 10 }"
      :visible-columns="props.modelValue"
    >
      <template #body-cell-action="tableProps">
        <q-td :props="tableProps">
          <q-btn
            round
            flat
            dense
            icon="info"
            text-color="black"
            :to="{
              name: 'viewConsult',
              params: { id: tableProps.row.id },
            }"
          />
        </q-td>
      </template>
    </q-table>
  </template>
</template>

<style scoped></style>
