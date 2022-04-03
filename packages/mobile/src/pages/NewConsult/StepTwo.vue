<script lang="ts">
  import Vue from "nativescript-vue";
  import StepThree from "./StepThree.vue";
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
    methods: {
      nextStep() {
        this.$navigateTo(StepThree);
      },
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

    <GridLayout rows="auto, *, auto">
      <StackLayout row="0" class="form">
        <Label class="heading">Hospital Details</Label>
        <Label class="subtitle">These details are the minimum required</Label>
        <Label class="InputLabel">
          <FormattedString>
            <Span>Hospital</Span>
            <Span color="red">*</Span>
          </FormattedString>
        </Label>
        <TextField v-model="newConsult.hospital" />
        <Label class="InputLabel">Rotation Period</Label>
        <TextField v-model="newConsult.rotationPeriod" />
        <Label class="InputLabel">SET Level</Label>
        <TextField v-model="newConsult.setLevel" />
        <Label class="InputLabel">Procedure Date</Label>
        <TextField
          v-model="newConsult.procedureDate"
          keyboard-type="datetime"
        />
        <!-- <DatePicker v-model="newConsult.dateOfBirth" /> -->
      </StackLayout>
      <StackLayout row="2" style="margin-bottom: 50px">
        <Button text="Next" class="btn" @tap="nextStep" />
      </StackLayout>
    </GridLayout>
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
