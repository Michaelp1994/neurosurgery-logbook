<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  import { QFile, QForm } from "quasar";
  import {
    useCreateConsult,
    resetConsult,
    useImageUpload,
  } from "@/models/consult";
  import { getRotations } from "@/models/rotation";

  import ConsultProcedure from "@/components/ConsultProcedure.vue";
  import AdmissionCategorySelect from "@/components/inputs/AdmissionCategorySelect.vue";
  import ASAGradeSelect from "@/components/inputs/ASAGradeSelect.vue";
  import EthnicitySelect from "@/components/inputs/EthnicitySelect.vue";
  import FundingTypeSelect from "@/components/inputs/FundingTypeSelect.vue";
  import GenderSelect from "@/components/inputs/GenderSelect.vue";
  import HospitalSelect from "@/components/inputs/HospitalSelect.vue";
  import MortalityClassificationSelect from "@/components/inputs/MortalityClassificationSelect.vue";
  import OutcomeSelect from "@/components/inputs/OutcomeSelect.vue";
  import ProcedureSelect from "@/components/inputs/ProcedureSelect.vue";
  import ProphylaxisSelect from "@/components/inputs/ProphylaxisSelect.vue";
  import ReturnToTheatreSelect from "@/components/inputs/ReturnToTheatreSelect.vue";
  import SetLevelSelect from "@/components/inputs/SetLevelSelect.vue";
  import SupervisorSelect from "@/components/inputs/SupervisorSelect.vue";
  import TypeOfAnaestheticSelect from "@/components/inputs/TypeOfAnaestheticSelect.vue";
  import UnplannedIcuSelect from "@/components/inputs/UnplannedIcuSelect.vue";
  import UnplannedReadmissionSelect from "@/components/inputs/UnplannedReadmissionSelect.vue";
  import WoundInfectionRiskSelect from "@/components/inputs/WoundInfectionRiskSelect.vue";
  import RotationPeriodSelect from "@/components/inputs/RotationPeriodSelect.vue";
  import { useApplicationStore } from "@/store/Application.store";
  import { UserRole } from "@/services/types.generated";
  const applicationStore = useApplicationStore();
  const user = applicationStore.credentials;
  const router = useRouter();
  const loading = ref(false);
  const file = ref(null);
  const urnMask = ref("");
  const maskHint = ref("");
  const consultForm = ref({} as QForm);
  const fileInput = ref({} as QFile);
  const { input, procedureDuration, patientAge, createConsult, rules } =
    useCreateConsult();
  const { imageUpload } = useImageUpload();
  const { data } = getRotations();
  async function procedureSelected(procedureId: number) {
    const consultProcedure = {
      procedureId,
      supervisionLevelId: null,
    };
    if (!input.selectedProcedures) {
      input.selectedProcedures = [];
    }
    input.selectedProcedures.push(consultProcedure);
  }

  function procedureDateChanged() {
    console.log("user has changed the procedure date, setting defaults");
    if (!data.value) return;
    const rotation = data.value.allRotations.find((rotation) => {
      return (
        rotation.startDate < input.procedureDate &&
        rotation.endDate > input.procedureDate
      );
    });
    if (!rotation) return;
    input.rotationPeriodId = rotation.id;
    input.hospitalId = rotation.hospital.id;
    input.setLevelId = rotation.setLevel.id;
    urnMask.value = rotation.hospital.urnMask ? rotation.hospital.urnMask : "";
    maskHint.value = rotation.hospital.urnMask
      ? `Mask: ${rotation.hospital.urnMask}`
      : "";
  }

  function reset() {
    resetConsult(input);
  }

  async function submit() {
    const { data, error } = await createConsult(input);
    if (error) throw error;
    if (!data) throw Error;
    router.push({
      name: "viewConsult",
      params: { id: data.createConsult.id },
    });
  }

  function openFilePicker() {
    if (!fileInput.value) return;
    fileInput.value.pickFiles();
  }

  async function onFileSelected() {
    const { data, error } = await imageUpload(file);
    if (error) throw error;
    console.log(data);
  }

  async function saveAndNew() {
    const isValid = await consultForm.value.validate();
    if (!isValid) return;
    await createConsult(input);
    resetConsult(input);
  }
  async function saveAndCopy() {
    const isValid = await consultForm.value.validate();
    if (!isValid) return;
    await createConsult(input);
  }
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
      <div class="q-ml-lg text-h6">Create Consult</div>
      <q-space />
      <q-btn
        icon="photo_camera"
        flat
        rounded
        class="q-pa-sm"
        @click="openFilePicker"
      />
      <q-file
        ref="fileInput"
        v-model="file"
        style="display: none"
        @update:model-value="onFileSelected"
      />
    </div>
    <q-card>
      <q-form ref="consultForm" @reset="reset" @submit="submit">
        <q-card-section>
          <!-- Required Dataset-->
          <div class="row q-py-sm">
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <q-input
                v-model="input.procedureDate"
                :rules="rules.procedureDate"
                outlined
                stack-label
                label="Procedure Date"
                type="date"
                @blur="procedureDateChanged"
              />
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <q-input
                v-model="input.name"
                :rules="rules.name"
                outlined
                label="Name"
                autofocus
              />
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <RotationPeriodSelect
                v-model="input.rotationPeriodId"
                :rules="rules.rotationPeriodId"
                label="Rotation Period"
              />
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <q-input
                v-model="input.urn"
                :rules="rules.urn"
                :mask="urnMask"
                :hint="maskHint"
                outlined
                label="URN"
              />
            </div>

            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <HospitalSelect
                v-model="input.hospitalId"
                :rules="rules.hospitalId"
                label="Hospital"
              />
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <SupervisorSelect
                v-model="input.supervisorId"
                :rules="rules.supervisorId"
                label="Supervisor"
              />
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <SetLevelSelect
                v-model="input.setLevelId"
                :rules="rules.setLevelId"
                label="SET Level"
              />
            </div>

            <div class="col-xs-9 col-md-4 col-lg-3 q-pa-sm">
              <q-input
                v-model.lazy="input.dateOfBirth"
                :rules="rules.dateOfBirth"
                outlined
                label="Date of Birth"
                type="date"
                stack-label
              />
            </div>
            <div class="col-xs-3 col-md-2 col-lg-1 q-pa-sm">
              <q-input
                :model-value="patientAge"
                readonly
                outlined
                label="Age"
                tabindex="-1"
              />
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <FundingTypeSelect
                v-model="input.fundingTypeId"
                :rules="rules.fundingTypeId"
                label="Funding Type"
              />
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <q-item v-ripple tag="label">
                <q-item-section avatar>
                  <q-checkbox v-model="input.isCompleted" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Consult Complete</q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </div>
        </q-card-section>

        <!-- Expanded Dataset -->
        <q-expansion-item expand-separator label="Expanded Dataset">
          <q-card>
            <q-card-section>
              <div class="row q-py-md">
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    v-model="input.startTime"
                    outlined
                    label="Start Time"
                    type="time"
                    stack-label
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    v-model="input.endTime"
                    outlined
                    format24h
                    label="End Time"
                    type="time"
                    stack-label
                    clearable
                  />
                </div>
                <div class="col-xs-6 col-lg-2 q-pa-sm">
                  <q-input
                    :model-value="procedureDuration.hours"
                    readonly
                    outlined
                    tabindex="-1"
                    label="Hours"
                  />
                </div>
                <div class="col-xs-6 col-lg-2 q-pa-sm">
                  <q-input
                    readonly
                    :model-value="procedureDuration.minutes"
                    outlined
                    tabindex="-1"
                    label="Minutes"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <ASAGradeSelect
                    v-model="input.asaGradeId"
                    label="ASA Grade"
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <UnplannedIcuSelect
                    v-model="input.unplannedIcuId"
                    label="Unplanned ICU"
                    clearable
                  />
                </div>

                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <WoundInfectionRiskSelect
                    v-model="input.woundInfectionRiskId"
                    label="Wound Infection Risk"
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <ReturnToTheatreSelect
                    v-model="input.returnToTheatreId"
                    label="Return To Theatre"
                    clearable
                  />
                </div>

                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <TypeOfAnaestheticSelect
                    v-model="input.typeOfAnaestheticId"
                    label="Type Of Anaesthetic"
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    v-model="input.dischargeDate"
                    outlined
                    label="Discharge Date"
                    type="date"
                    stack-label
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <GenderSelect
                    v-model="input.gender"
                    label="Gender"
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <ProphylaxisSelect
                    v-model="input.prophylaxis"
                    label="Prophylaxis"
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <OutcomeSelect
                    v-model="input.outcomeId"
                    label="Outcome"
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <EthnicitySelect
                    v-model="input.ethnicityId"
                    label="Ethnicity"
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    v-model="input.finalDiagnosis"
                    outlined
                    label="Final Diagnosis"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <MortalityClassificationSelect
                    v-model="input.mortalityClassificationId"
                    label="Mortality Classification"
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    v-model="input.admissionDate"
                    outlined
                    label="Admission Date"
                    type="date"
                    stack-label
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    v-model="input.pathologicalDiagnoses"
                    outlined
                    label="Pathological Diagnoses"
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    v-model="input.recurrenceDate"
                    outlined
                    label="Recurrence Date"
                    type="date"
                    stack-label
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <AdmissionCategorySelect
                    v-model="input.admissionCategoryId"
                    label="Admission Category"
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-item v-ripple tag="label">
                    <q-item-section avatar>
                      <q-checkbox
                        v-model="input.discussedAtMdm"
                        toggle-indeterminate
                      />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Discussed At MDM</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <UnplannedReadmissionSelect
                    v-model="input.unplannedReadmissionId"
                    label="Unplanned Readmission"
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    v-model="input.diagnosisDate"
                    outlined
                    label="Diagnosis Date"
                    type="date"
                    stack-label
                    clearable
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    v-model="input.preManagementDiagnosis"
                    outlined
                    label="Pre Management Diagnosis"
                  />
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-input
                    v-model="input.recognisedCoMorbidities"
                    outlined
                    label="Recognised Co Morbidities"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <!-- Procedure Select -->
        <q-card-section>
          <div class="row q-py-sm justify-center">
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <q-card style="height: 500px; overflow-y: auto">
                <ProcedureSelect
                  label="Add a Procedure..."
                  @update:model-value="procedureSelected"
                />
                <ConsultProcedure
                  v-model="input.selectedProcedures"
                  :readonly="false"
                  @delete-procedure="
                    (index) => input.selectedProcedures?.splice(index, 1)
                  "
                />
              </q-card>
            </div>
          </div>
        </q-card-section>
        <!-- Comments / Buttons -->
        <q-card-section>
          <div class="row q-pb-md">
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <q-input
                v-model="input.comments"
                type="textarea"
                outlined
                :disabled="loading"
                label="Comments"
                style="resize: none"
              />
            </div>
            <div class="col-xs-12 col-md-6 q-pa-sm">
              <div class="row">
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-btn
                    class="full-width"
                    :disabled="loading"
                    color="primary"
                    type="submit"
                  >
                    Save & Close
                  </q-btn>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-btn
                    class="full-width"
                    color="primary"
                    :disabled="loading"
                    @click="saveAndNew"
                  >
                    Save & New
                  </q-btn>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
                  <q-btn
                    class="full-width"
                    :disabled="loading"
                    color="primary"
                    @click="saveAndCopy"
                  >
                    Save & Copy
                  </q-btn>
                </div>
                <div class="col-xs-12 q-pa-sm">
                  <q-btn
                    class="full-width"
                    col
                    color="negative"
                    :disabled="loading"
                    type="reset"
                  >
                    Reset
                  </q-btn>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-form>
      <q-expansion-item
        v-if="user!.role === UserRole.ADMIN"
        expand-separator
        label="Debug"
      >
        <q-card>
          <q-card-section>
            <pre>
        {{ input }}
      </pre
            >
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>
  </q-page>
</template>

<style scoped></style>
