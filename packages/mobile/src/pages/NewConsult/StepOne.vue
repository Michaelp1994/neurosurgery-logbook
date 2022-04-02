<script lang="ts">
  import Vue from "nativescript-vue";
  import StepTwo from "./StepTwo.vue";
  import { DetectionType } from "@nativescript/mlkit-core";
  import { Image } from "@nativescript/core";
  import * as camera from "@nativescript/camera";

  import { TextResult } from "@nativescript/mlkit-text-recognition";
  export default Vue.extend({
    data() {
      return {
        // todaysDate: new Date(),
        newConsult: {
          firstName: "",
          lastName: "",
          urn: "",
          dateOfBirth: "",
        },
      };
    },
    methods: {
      nextStep() {
        this.$navigateTo(StepTwo);
      },
      onCameraTap() {
        camera
          .takePicture()
          .then(function (imageAsset) {
            console.log("Result is an image asset instance");
            var image = new Image();
            image.src = imageAsset;
          })
          .catch(function (err) {
            console.log("Error -> " + err.message);
          });
        //
      },
      onDetection(event) {
        if (event.type === DetectionType.Text) {
          const text: TextResult = event.data;
          console.log(text);
        }
      },
    },
  });
</script>

<template>
  <Page>
    <ActionBar>
      <StackLayout orientation="horizontal">
        <Label text="New Consult" class="h2" vertical-alignment="center" />
      </StackLayout>
      <ActionItem android.systemIcon="ic_menu_camera" @tap="onCameraTap" />
    </ActionBar>
    <MLKitView
      cameraPosition="back"
      detectionType="all"
      @detection="onDetection"
    />
    <GridLayout rows="auto, *, auto" class="nt-form">
      <StackLayout row="0" class="p-l-20 p-r-20">
        <Label class="h2">Patient Details</Label>
        <Label class="body">These details are the minimum required</Label>
        <Label class="inputLabel">
          <FormattedString>
            <Span>First Name</Span>
            <Span color="red">*</Span>
          </FormattedString>
        </Label>
        <TextField v-model="newConsult.firstName" class="input" hint="John" />
        <Label class="inputLabel">Last Name</Label>
        <TextField
          v-model="newConsult.lastName"
          class="nt-input input"
          hint="Smith"
        />
        <Label class="inputLabel">URN/NHI</Label>
        <TextField v-model="newConsult.urn" class="input" hint="1234567" />
        <Label class="inputLabel">Date of Birth</Label>
        <TextField
          v-model="newConsult.dateOfBirth"
          class="input"
          keyboardType="datetime"
        />
        <!-- <DatePicker v-model="newConsult.dateOfBirth" /> -->
      </StackLayout>
      <StackLayout row="2" class="m-b-5">
        <Button text="Next" class="btn" @tap="nextStep" />
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<style scoped lang="scss">
  @import "@nativescript/theme/scss/variables/blue";
  // Custom styles

  .form {
    padding: 50px;
  }
  .heading {
    font-weight: 500;
    font-size: 20;
  }
  .appendIcon {
    border-width: 1 1 1 0;
    border-color: #000000;
    margin: 0 10 10 0;
    vertical-align: stretch;
    border-radius: 0 5 5 0;
    padding: 10 5 10 5;
    text-align: center;
  }
  .inputTwo {
    border-radius: 5 0 0 5;
    border-width: 1;
    border-color: #000000;
    padding: 10;
    margin: 0 0 10 10;
    background-color: #ffffff;
    placeholder-color: #424242;
    vertical-align: center;
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

  .inputLabel {
    text-transform: uppercase;
    color: #000000;
    opacity: 0.6;
    line-height: 5px;
    letter-spacing: 0.1px;
    margin: 5 10 0 15;
  }
  .input {
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
