<script lang="ts">
  import Vue from "nativescript-vue";

  export default Vue.extend({
    data() {
      return {
        // todaysDate: new Date(),
        newConsult: {
          hospital: "",
          rotationPeriod: "",
          setLevel: "",
          procedureDate: "",
          supervisor: "",
          alternateSupervisor: "",
        },
      };
    },
  });
</script>

<template>
  <Page>
    <ActionBar>
      <StackLayout orientation="horizontal">
        <Label text="Logbook" class="title" vertical-alignment="center" />
      </StackLayout>
    </ActionBar>
    <DockLayout>
      <Button text="Next" class="btn" dock="bottom" />
      <ScrollView dock="bottom">
        <StackLayout class="form">
          <Label class="heading">Expanded Dataset</Label>
          <Label class="subtitle">These details are optional.</Label>
          <TextField
            v-model="newConsult.startTime"
            hint="Start Time"
            type="time"
          />
          <TextField v-model="newConsult.endTime" hint="End Time" type="time" />
          <TextField v-model="newConsult.asaGrade" hint="ASA Grade" />
          <TextField v-model="newConsult.unplannedIcu" hint="Unplanned ICU" />
          <TextField
            v-model="newConsult.woundInfectionRisk"
            hint="Wound Infection Risk"
          />
          <TextField
            v-model="newConsult.returnToTheatre"
            hint="Return To Theatre"
          />
          <TextField
            v-model="newConsult.typeOfAnaesthetic"
            hint="Type Of Anaesthetic"
          />
          <TextField
            v-model="newConsult.dischargeDate"
            hint="Discharge Date"
            type="date"
          />
          <TextField v-model="newConsult.gender" hint="Gender" />
          <TextField v-model="newConsult.prophylaxis" hint="Prophylaxis" />
          <TextField v-model="newConsult.outcome" hint="Outcome" />
          <TextField
            v-model="newConsult.ethnicity"
            hint="Ethnicity"
            autocomplete="off"
          />
          <TextField
            v-model="newConsult.finalDiagnosis"
            hint="Final Diagnosis"
          />
          <TextField
            v-model="newConsult.mortalityClassification"
            hint="Mortality Classification"
          />
          <TextField
            v-model="newConsult.admissionDate"
            hint="Admission Date"
            type="date"
          />
          <TextField
            v-model="newConsult.pathologicalDiagnoses"
            hint="Pathological Diagnoses"
          />
          <TextField
            v-model="newConsult.recurrenceDate"
            hint="Recurrence Date"
            type="date"
          />
          <TextField
            v-model="newConsult.admissionCategory"
            hint="Admission Category"
          />
          <TextField
            v-model="newConsult.discussedAtMdm"
            hint="Discussed At Mdm"
          />
          <TextField
            v-model="newConsult.unplannedReadmission"
            hint="Unplanned Readmission"
          />
          <TextField v-model="newConsult.fundingType" hint="Funding Type" />
          <TextField
            v-model="newConsult.diagnosisDate"
            hint="Diagnosis Date"
            type="date"
          />
          <TextField
            v-model="newConsult.preManagementDiagnosis"
            hint="Pre Management Diagnosis"
          />
          <TextField
            v-model="newConsult.recognisedCoMorbidities"
            hint="Recognised Co Morbidities"
          />
          <TextView v-model="newConsult.comments" editable hint="Comments" />
          <!-- <DatePicker v-model="newConsult.dateOfBirth" /> -->
        </StackLayout>
      </ScrollView>
    </DockLayout>
  </Page>
</template>

<style scoped lang="scss">
  @import "@nativescript/theme/scss/variables/blue";
  .title {
    font-size: 20;
  }
  // Custom styles
  .fas {
    @include colorize($color: accent);
  }

  .form {
    padding: 50px;
  }
  .heading {
    font-weight: 500;
    font-size: 20;
  }
  .btn {
    border-width: 1;
    border-radius: 10;
    color: #ffffff;
    background-color: #1867c0;
  }
  .subtitle {
    font-size: 10;
    color: #424242;
  }

  .InputLabel {
    text-transform: uppercase;
    color: #000000;
    opacity: 0.6;
    line-height: 5px;
    letter-spacing: 0.1px;
    margin: 10 10 0 15;
  }
  TextField,
  TextView {
    border-radius: 5;
    border-width: 1;
    border-color: #000000;
    padding: 10;
    margin: 0 10 10 10;
    background-color: #ffffff;
    placeholder-color: #424242;
    vertical-align: center;
  }
</style>
