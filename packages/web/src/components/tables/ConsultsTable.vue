<script setup lang="ts">
  import { QTableProps } from "quasar";
  import { getConsults } from "@/models/consult";
  import { DateTime } from "luxon";
  const props = defineProps<{
    modelValue: number[];
  }>();
  const columns: QTableProps["columns"] = [
    {
      name: "procedureDate",
      label: "Procedure Date",
      field: "procedureDate",
      align: "left",
      sortable: true,
      format: (val) => DateTime.fromISO(val).toLocaleString(),
    },
    {
      name: "name",
      label: "Name",
      field: "name",
      align: "left",
      sortable: true,
    },
    { name: "urn", label: "URN", sortable: true, field: "urn", align: "left" },
    {
      name: "hospital",
      label: "Hospital",
      sortable: true,

      field: (consult) => consult.hospital.name,
      align: "left",
    },
    {
      name: "status",
      label: "Status",
      sortable: true,

      field: "isCompleted",
      format: (val) => {
        return val ? "Completed" : "In Progress";
      },
      align: "left",
    },
    {
      name: "action",
      label: "Action",
      sortable: true,
      field: "",
      align: "center",
    },
  ];

  const { data, error, fetching } = getConsults();
</script>

<template>
  <template v-if="error">
    <q-card-section>Unfortunately, there is an error.</q-card-section>
  </template>
  <template v-else>
    <q-table
      :columns="columns"
      :rows="data?.allConsults"
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
