<script lang="ts">
  import Vue from "nativescript-vue";
  import StepOne from "./NewConsult/StepOne.vue";
  import { requestPermissions } from "@nativescript/camera";
  export default Vue.extend({
    data() {
      return {
        StepOne,
      };
    },
    mounted() {
      requestPermissions().then(
        function success() {
          // permission request accepted or already granted
          // ... call camera.takePicture here ...
        },
        function failure() {
          // permission request rejected
          // ... tell the user ...
        }
      );
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
        <Label text="Logbook" font-size="24" vertical-alignment="center" />
      </StackLayout>
    </ActionBar>

    <GridLayout rows="*, auto">
      <Button
        text="Create New"
        row="1"
        @tap="$navigateTo(StepOne)"
        class="btn"
      />
    </GridLayout>
  </Page>
</template>

<style scoped lang="scss">
  @import "@nativescript/theme/scss/variables/blue";

  // Custom styles
  .fas {
    @include colorize($color: accent);
  }

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }

  .btn {
    border-width: 1;
    border-radius: 10;
    color: #ffffff;
    background-color: #1867c0;
  }
</style>
