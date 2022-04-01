import Vuex from "vuex";
export default new Vuex.Store({
  state: {
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
  },
  mutations: {},
});