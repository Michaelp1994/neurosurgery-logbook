<script setup lang="ts">
  import { useRoute } from "vue-router";
  import ViewConsultProcedure from "@/components/ViewConsultProcedure.vue";
  import { getConsult } from "@/models/consult";
  import { ref, watch } from "vue";
  import { useApplicationStore } from "@/store/Application.store";
  import { UserRole } from "@/services/types.generated";
  const applicationStore = useApplicationStore();
  const user = applicationStore.credentials;
  const route = useRoute();
  if (typeof route.params.id !== "string") throw Error;
  const id = ref(parseInt(route.params.id));

  const { data, fetching, error, executeQuery } = getConsult(id);
  function refresh() {
    executeQuery({
      requestPolicy: "network-only",
    });
  }
  watch(
    () => route.params.id,
    (newId) => {
      if (typeof newId === "string") id.value = parseInt(newId);
    }
  );
</script>

<template>
  <q-page padding>
    <div class="row q-px-sm q-pb-sm items-center">
      <q-btn
        icon="arrow_back"
        :to="{ name: 'consults' }"
        rounded
        flat
        class="q-pa-sm"
      />
      <div class="text-h6 q-ml-lg">View Consult</div>
      <q-space />

      <q-btn icon="refresh" rounded class="q-pa-sm" flat @click="refresh" />
      <q-btn
        icon="edit"
        :to="{ name: 'updateConsult', params: { id } }"
        rounded
        class="q-pa-sm"
        flat
      />
    </div>
    <q-card>
      <template v-if="fetching">
        <q-card-section> Loading... </q-card-section>
      </template>
      <template v-if="error">
        <q-card-section> Error: {{ error }} </q-card-section>
      </template>
      <template v-if="data">
        <q-expansion-item
          expand-separator
          label="Required Dataset"
          :model-value="true"
        >
          <q-card-section>
            <!-- Required Dataset-->
            <div class="row q-py-sm">
              <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                <q-input
                  :model-value="data.consult.procedureDate"
                  readonly
                  outlined
                  label="Procedure Date"
                  type="date"
                  stack-label
                />
              </div>
              <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                <q-input
                  :model-value="data.consult.name"
                  readonly
                  outlined
                  label="First Name"
                />
              </div>
              <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                <q-input
                  :model-value="data.consult.rotationPeriod.name"
                  readonly
                  outlined
                  label="Rotation Period"
                />
              </div>
              <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                <q-input
                  :model-value="data.consult.urn"
                  readonly
                  outlined
                  label="URN"
                />
              </div>

              <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                <q-input
                  :model-value="data.consult.hospital?.name"
                  readonly
                  outlined
                  label="Hospital"
                />
              </div>
              <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                <q-input
                  :model-value="data.consult.supervisor?.name"
                  readonly
                  outlined
                  label="Supervisor"
                />
              </div>
              <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                <q-input
                  :model-value="data.consult.setLevel.name"
                  readonly
                  outlined
                  label="SET Level"
                />
              </div>

              <div class="col-xs-9 col-md-4 col-lg-3 q-pa-sm">
                <q-input
                  :model-value="data.consult.dateOfBirth"
                  outlined
                  readonly
                  label="Date of Birth"
                  type="date"
                  stack-label
                />
              </div>
              <div class="col-xs-3 col-md-2 col-lg-1 q-pa-sm">
                <q-input
                  :model-value="data.consult.patientAge"
                  readonly
                  outlined
                  label="Age"
                  tabindex="-1"
                />
              </div>
              <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                <q-input
                  :model-value="data.consult.fundingType?.name"
                  readonly
                  outlined
                  label="Funding Type"
                />
              </div>
              <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                <q-item>
                  <q-item-section avatar>
                    <q-checkbox
                      :model-value="data.consult.isCompleted"
                      disable
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Consult Complete</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </q-card-section>
        </q-expansion-item>
        <!-- Expanded Dataset -->
        <q-expansion-item expand-separator label="Expanded Dataset">
          <q-card>
            <q-card-section>
              <div class="row q-py-md">
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.startTime"
                    readonly
                    outlined
                    label="Start Time"
                    type="time"
                    stack-label
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.endTime"
                    readonly
                    outlined
                    format24h
                    label="End Time"
                    type="time"
                    stack-label
                  />
                </div>
                <div class="col-xs-6 col-lg-2 q-pa-sm">
                  <q-input
                    :model-value="data.consult.procedureDuration?.hours"
                    readonly
                    outlined
                    tabindex="-1"
                    label="Hours"
                  />
                </div>
                <div class="col-xs-6 col-lg-2 q-pa-sm">
                  <q-input
                    readonly
                    :model-value="data.consult.procedureDuration?.minutes"
                    outlined
                    tabindex="-1"
                    label="Minutes"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.asaGrade?.name"
                    readonly
                    outlined
                    label="ASA Grade"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.unplannedIcu?.name"
                    readonly
                    outlined
                    label="Unplanned ICU"
                  />
                </div>

                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.woundInfectionRisk?.name"
                    readonly
                    outlined
                    label="Wound Infection Risk"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.returnToTheatre?.name"
                    readonly
                    outlined
                    label="Return To Theatre"
                  />
                </div>

                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.typeOfAnaesthetic?.name"
                    readonly
                    outlined
                    label="Type Of Anaesthetic"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.dischargeDate"
                    readonly
                    outlined
                    label="Discharge Date"
                    type="date"
                    stack-label
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.gender"
                    readonly
                    outlined
                    label="Gender"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.prophylaxis"
                    readonly
                    outlined
                    label="Prophylaxis"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.outcome?.name"
                    readonly
                    outlined
                    label="Outcome"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.ethnicity?.name"
                    readonly
                    outlined
                    label="Ethnicity"
                    aria-autocomplete="none"
                    autocomplete="off"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.finalDiagnosis"
                    readonly
                    outlined
                    label="Final Diagnosis"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.mortalityClassification?.name"
                    readonly
                    outlined
                    label="Mortality Classification"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.admissionDate"
                    readonly
                    outlined
                    label="Admission Date"
                    type="date"
                    stack-label
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.pathologicalDiagnoses"
                    readonly
                    outlined
                    label="Pathological Diagnoses"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.recurrenceDate"
                    readonly
                    outlined
                    label="Recurrence Date"
                    type="date"
                    stack-label
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.admissionCategory?.name"
                    readonly
                    outlined
                    label="Admission Category"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-item tag="label">
                    <q-item-section avatar>
                      <q-checkbox
                        :model-value="data.consult.discussedAtMdm"
                        disable
                      />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Discussed At MDM</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.unplannedReadmission?.name"
                    readonly
                    outlined
                    label="Unplanned Readmission"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.diagnosisDate"
                    readonly
                    outlined
                    label="Diagnosis Date"
                    type="date"
                    stack-label
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.preManagementDiagnosis"
                    readonly
                    outlined
                    label="Pre-management Diagnosis"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    :model-value="data.consult.recognisedCoMorbidities"
                    readonly
                    outlined
                    label="Recognised Co-morbidities"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <!-- Procedure Select -->
        <q-expansion-item
          expand-separator
          label="Procedures"
          :model-value="true"
        >
          <q-card-section>
            <div class="row q-py-sm">
              <div class="col-xs-12 col-md-6 q-pa-sm">
                <q-card style="height: 500px; overflow-y: auto">
                  <ViewConsultProcedure
                    :model-value="data.consult.procedures"
                  />
                </q-card>
              </div>
            </div>
          </q-card-section>
        </q-expansion-item>
        <!-- Comments / Buttons -->
        <q-card-section>
          <div class="row q-pb-md">
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <q-input
                :model-value="data.consult.comments"
                readonly
                type="textarea"
                outlined
                label="Comments"
                style="resize: none"
              />
            </div>
          </div>
        </q-card-section>
      </template>
      <q-expansion-item
        v-if="user!.role === UserRole.ADMIN"
        expand-separator
        label="Debug"
      >
        <q-card>
          <q-card-section>
            <pre v-if="data">
        {{ data.consult }}
      </pre
            >
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>
  </q-page>
</template>

<style scoped></style>
