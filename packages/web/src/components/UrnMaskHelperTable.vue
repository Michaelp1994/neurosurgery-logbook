<script setup lang="ts"></script>
<template>
  <q-menu>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-center">Token</th>
          <th class="text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center">#</td>
          <td class="text-left">Numeric</td>
        </tr>
        <tr>
          <td class="text-center">S</td>
          <td>Letter, a to z, case insensitive</td>
        </tr>
        <tr>
          <td class="text-center">N</td>
          <td>Alphanumeric, case insensitive for letters</td>
        </tr>
        <tr>
          <td class="text-center">A</td>
          <td>Letter, transformed to uppercase</td>
        </tr>
        <tr>
          <td class="text-center">a</td>
          <td>Letter, transformed to lowercase</td>
        </tr>
        <tr>
          <td class="text-center">X</td>
          <td>Alphanumeric, transformed to uppercase for letters</td>
        </tr>
        <tr>
          <td class="text-center">x</td>
          <td>Alphanumeric, transformed to lowercase for letters</td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-menu>
</template>
<style scoped></style>
