<script lang="ts">
  import Vue from "nativescript-vue";

  export default Vue.extend({
    data() {
      return {
        newConsult: {
          firstName: "",
          lastName: "",
          urn: "",
          procedureIds: [],
          hospital: "",
          rotationPeriod: "",
          setLevel: "",
          procedureDate: "",
          supervisor: "",
          altSupervisor: "",
          dateOfBirth: "",
          startTime: "",
          endTime: "",
          gender: "",
          ethnicity: "",
          admissionDate: "",
          admissionCategory: "",
          unplannedReadmission: "",
          fundingType: "",
          diagnosisDate: "",
          preManagementDiagnosis: "",
          recognisedCoMorbidities: "",
          asaGrade: "",
          woundInfectionRisk: "",
          typeOfAnaesthetic: "",
          prophylaxis: "",
          finalDiagnosis: "",
          pathologicalDiagnoses: "",
          unplannedIcu: "",
          returnToTheatre: "",
          dischargeDate: "",
          outcome: "",
          mortalityClassification: "",
          recurrenceDate: "",
          discussedAtMdm: "",
          comments: "",
          isCompleted: false,
        },
      };
    },
    computed: {
      message() {
        return "Blank {N}-Vue app";
      },
    },
  });
</script>

<template>
  <Page>
    <ActionBar>
      <StackLayout orientation="horizontal">
        <Label
          text="Create New Consult"
          font-size="24"
          vertical-alignment="center"
        />
      </StackLayout>
    </ActionBar>
    <ScrollView>
      <StackLayout>
        <TextField v-model="newConsult.firstName" hint="First Name" />
        <TextField v-model="newConsult.hospital" hint="Hospital" />
        <TextField
          v-model="newConsult.procedureDate"
          hint="Procedure Date"
          type="date"
        />
        <TextField v-model="newConsult.lastName" hint="Last Name" />
        <TextField v-model="newConsult.rotationPeriod" hint="Rotation Period" />
        <TextField v-model="newConsult.supervisor" hint="Supervisor" />
        <TextField v-model="newConsult.urn" hint="URN" />
        <TextField v-model="newConsult.setLevel" hint="SET Level" />
        <TextField v-model="newConsult.altSupervisor" hint="Alt Supervisor" />
        <TextField
          v-model="newConsult.dateOfBirth"
          hint="Date of Birth"
          type="date"
        />
        <TextField
          v-model="newConsult.startTime"
          hint="Start Time"
          type="time"
        />
        <TextField v-model="newConsult.asaGrade" hint="ASA Grade" />
        <TextField v-model="newConsult.unplannedIcu" hint="Unplanned ICU" />
        <TextField
          v-model="newConsult.endTime"
          format24h
          hint="End Time"
          type="time"
        />
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
          aria-autocomplete="none"
          autocomplete="off"
        />
        <TextField v-model="newConsult.finalDiagnosis" hint="Final Diagnosis" />
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
        <TextView
          v-model="newConsult.comments"
          editable
          hint="Comments"
          style="resize: none"
        />
        <Button text="submit" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<style scoped lang="scss">
  @import "@nativescript/theme/scss/variables/blue";
  .fas {
    @include colorize($color: accent);
  }

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }

  TextField,
  TextView {
    border-radius: 10;
    border-width: 1;
    border-color: #000000;
    padding: 10;
    background-color: #d6d6d6;
    placeholder-color: #424242;
  }
</style>
