// import { registerEnumType } from "type-graphql";

// export enum Gender {
//     MALE,
//     FEMALE,
// }
// registerEnumType(Gender, {
//     name: "Gender",
//     description: "Gender of Patient",
// });

// export enum AdmissionCategory {
//     ELECTIVE,
//     EMERGENCY,
//     DAY_CASE,
//     UNPLANNED_READMISSION,
//     NON_ADMITTED,
// }

// registerEnumType(AdmissionCategory, {
//     name: "AdmissionCategory",
//     description: "Admission Category of Patient",
// });

// export enum SetLevel {
//     YEAR_ONE,
//     YEAR_TWO,
//     YEAR_THREE,
//     YEAR_FOUR,
//     YEAR_FIVE,
//     YEAR_SIX,
//     YEAR_SEVEN,
//     PAEDIATRIC_E1,
//     PAEDIATRIC_E2,
//     PAEDIATRIC_E,
//     PAEDIATRIC_M1,
//     PAEDIATRIC_M2,
//     PAEDIATRIC_M,
//     PAEDIATRIC_S1,
//     PAEDIATRIC_S2,
//     PAEDIATRIC_S,
//     PLASTIC_AUS_EARLY_SET,
// }

// registerEnumType(SetLevel, {
//     name: "SetLevel",
//     description: "Set Level of User",
// });

// export enum UnplannedReadmission {
//     NO,
//     PAIN,
//     BLEEDING,
//     ELECTROLYTE_IMBALANCE,
//     INFECTION,
//     PULMONARY_EMBOLISM,
//     INTRA_ABDOMINAL_COLLECTION,
//     ORGAN_FAILURE,
//     OTHER_CAUSE,
// }

// registerEnumType(UnplannedReadmission, {
//     name: "UnplannedReadmission",
//     description: "Unplanned Readmission of Patient",
// });

// export enum FundingType {
//     "Private - ACC funded (NZ)",
//     "Private - DHB funded (NZ)",
//     "Private - Health insurance funded (NZ)",
//     "Private - Self funded",
//     "Public",
//     "Traffic (Aus)",
//     "Veteran (Aus)",
//     "Workcover (Aus)",
// }

// export enum ASAGrade {
//     "I - Normal Healthy Patient",
//     "II - Mild Systemic Disease",
//     "III - Severe Systemic Disease",
//     "IV - Severe Systemic Disease that is a constant threat to life",
//     "V - Moribund patient who is not expected to survive without operation",
//     "VI - A declared brain-dead patient whose organs are being removed for donor purposes",
// }

// export enum WoundInfectionRisk {
//     "Clean",
//     "Clean/Contaminated",
//     "Contaminated",
//     "Dirty",
//     "N/A",
//     "Other",
// }

// export enum TypeOfAnaesthetic { //Multiple
//     "Epidural",
//     "General",
//     "Local",
//     "Regional block",
//     "Sedation",
//     "Spinal",
// }

// export enum Prophylaxis { //Multiple
//     "Antibiotics",
//     "DVT Prevention",
// }

// export enum UnplannedIcu {
//     "No",
//     "Yes - Localised sepsis (wound)",
//     "Yes - Generalised sepsis",
//     "Yes - Pneumonia",
//     "Yes - Renal failure",
//     "Yes - Arrhythmia",
//     "Yes - Myocardial Infarction",
//     "Yes - Pulmonary Embolism",
//     "Yes - Other Cause",
// }

// export enum ReturnToTheatre {
//     "No",
//     "Yes - Bleeding",
//     "Yes - Collection",
//     "Yes - CSF leak",
//     "Yes - Wound sepsis",
//     "Yes - Wound dehiscence",
//     "Yes - Other organ/structure injury",
//     "Yes - Other Cause",
// }

// export enum Outcome {
//     "Died",
//     "Discharged home",
//     "Discharged for care or respite",
//     "Transferred for more complex care",
//     "Absconded/took own discharge",
//     "Referred to other services",
// }

// export enum MortalityClassification { // Only if Outcome = Died
//     "Unavoidable expected death",
//     "Unavoidable death with one or more substandard factors in care",
//     "Possibly preventable death",
//     "Death due to complications of surgery",
//     "Death due to complications of comorbidities",
// }

// export enum Ethnicity { //Multiple
//     "Australian",
//     "Australian - Australian Aboriginal",
//     "Australian - Australian South Sea Islander",
//     "Australian - Torres Strait Islander",
//     "New Zealander",
//     "New Zealander - Maori",
//     "Melanesian and Papuan",
//     "Melanesian and Papuan - New Caledonia",
//     "Melanesian and Papuan - Ni-Vanuatu",
//     "Melanesian and Papuan - Papua New Guinean",
//     "Melanesian and Papuan - Solomon Islander",
//     "Micronesian",
//     "Micronesian - I-Kiribati",
//     "Micronesian - Nauruan",
//     "Polynesian",
//     "Polynesian - Cook Islander",
//     "Polynesian - Niuean",
//     "Polynesian - Samoan",
//     "Polynesian - Tongan",
//     "Polynesian - Hawaiian",
//     "Polynesian - Tahitian",
//     "Polynesian - Tokelauan",
//     "Polynesian - Tuvaluan",
//     "Polynesian - French Polynesian",
//     "British",
//     "British - English",
//     "British - Scottish",
//     "British - Welsh",
//     "British - Channel Islander",
//     "British - Manx",
//     "British - Falkland Islander",
//     "Irish",
//     "Western European",
//     "Western European - Austrian",
//     "Western European - Dutch",
//     "Western European - Flemish",
//     "Western European - French",
//     "Western European - German",
//     "Western European - Swiss",
//     "Western European - Belgian",
//     "Western European - Frisian",
//     "Western European - Luxembourg",
//     "Northern European",
//     "Northern European - Danish",
//     "Northern European - Finnish",
//     "Northern European - Icelandic",
//     "Northern European - Norwegian",
//     "Northern European - Swedish",
//     "Northern European - Greenlandic",
//     "Southern European",
//     "Southern European - Basque",
//     "Southern European - Catalan",
//     "Southern European - Italian",
//     "Southern European - Maltese",
//     "Southern European - Portuguese",
//     "Southern European - Spanish",
//     "Southern European - Gibraltarian",
//     "South Eastern Europe",
//     "South Eastern Europe - Albanian",
//     "South Eastern Europe - Bosnian",
//     "South Eastern Europe - Bulgarian",
//     "South Eastern Europe - Croatian",
//     "South Eastern Europe - Greek",
//     "South Eastern Europe - Macedonian",
//     "South Eastern Europe - Moldovan",
//     "South Eastern Europe - Montenegrin",
//     "South Eastern Europe - Romanian",
//     "South Eastern Europe - Roma/Gypsy",
//     "South Eastern Europe - Serbian",
//     "South Eastern Europe - Slovene",
//     "South Eastern Europe - Cypriot",
//     "South Eastern Europe - Vlach",
//     "Eastern European",
//     "Eastern European - Belarusan",
//     "Eastern European - Czech",
//     "Eastern European - Estonian",
//     "Eastern European - Hungarian",
//     "Eastern European - Latvian",
//     "Eastern European - Lithuanian",
//     "Eastern European - Polish",
//     "Eastern European - Russian",
//     "Eastern European - Slovak",
//     "Eastern European - Ukrainian",
//     "Eastern European - Sorb/Wend",
//     "Arab",
//     "Arab - Algerian",
//     "Arab - Egyptian",
//     "Arab - Iraqi",
//     "Arab - Jordanian",
//     "Arab - Kuwaiti",
//     "Arab - Lebanese",
//     "Arab - Libyan",
//     "Arab - Moroccan",
//     "Arab - Palestinian",
//     "Arab - Saudi Arabian",
//     "Arab - Syrian",
//     "Arab - Tunisian",
//     "Arab - Yemeni",
//     "Arab - Baggara",
//     "Arab - Bedouin",
//     "Arab - Omani",
//     "Jewish",
//     "Other North African and Middle Eastern",
//     "Other North African and Middle Eastern - Assyrian/Chaldean",
//     "Other North African and Middle Eastern - Berber",
//     "Other North African and Middle Eastern - Coptic",
//     "Other North African and Middle Eastern - Iranian",
//     "Other North African and Middle Eastern - Kurdish",
//     "Other North African and Middle Eastern - Sudanese",
//     "Other North African and Middle Eastern - Turkish",
//     "Other North African and Middle Eastern - Nubian",
//     "South-East Asian",
//     "South-East Asian - Anglo-Burmese",
//     "South-East Asian - Burmese",
//     "South-East Asian - Hmong",
//     "South-East Asian - Khmer",
//     "South-East Asian - Lao",
//     "South-East Asian - Thai",
//     "South-East Asian - Vietnamese",
//     "South-East Asian - Karen",
//     "South-East Asian - Mon",
//     "South-East Asian - Filipino",
//     "South-East Asian - Indonesian",
//     "South-East Asian - Javanese",
//     "South-East Asian - Madurese",
//     "South-East Asian - Malay",
//     "South-East Asian - Sundanese",
//     "South-East Asian - Timorese",
//     "South-East Asian - Acehnese",
//     "South-East Asian - Balinese",
//     "South-East Asian - Bruneian",
//     "South-East Asian - Kadazan",
//     "South-East Asian - Singaporean",
//     "South-East Asian - Temoq",
//     "South-East Asian - Irian Jayan",
//     "South-East Asian - Sumatran",
//     "Chinese Asian",
//     "Chinese Asian - Chinese",
//     "Other North-East Asian",
//     "Other North-East Asian - Japanese",
//     "Other North-East Asian - Korean",
//     "Other North-East Asian - Mongolian",
//     "Other North-East Asian - Tibetan",
//     "Southern Asian",
//     "Southern Asian - Anglo-Indian",
//     "Southern Asian - Bengali",
//     "Southern Asian - Burgher",
//     "Southern Asian - Gujarati",
//     "Southern Asian - Indian",
//     "Southern Asian - Malayali",
//     "Southern Asian - Nepalese",
//     "Southern Asian - Pakistani",
//     "Southern Asian - Punjabi",
//     "Southern Asian - Sikh",
//     "Southern Asian - Sinhalese",
//     "Southern Asian - Tamil",
//     "Southern Asian - Maldivian",
//     "Central Asian",
//     "Central Asian - Afghan",
//     "Central Asian - Armenian",
//     "Central Asian - Georgian",
//     "Central Asian - Kazakh",
//     "Central Asian - Pathan",
//     "Central Asian - Uzbek",
//     "Central Asian - Azeri",
//     "Central Asian - Hazara",
//     "Central Asian - Tajik",
//     "Central Asian - Tatar",
//     "Central Asian - Turkmen",
//     "Central Asian - Uighur",
//     "Central Asian - Chechen",
//     "North American",
//     "North American - African American",
//     "North American - American",
//     "North American - Canadian",
//     "North American - French Canadian",
//     "North American - Hispanic (North American)",
//     "North American - Native North American Indian",
//     "North American - Bermudan",
//     "South American",
//     "South American - Argentinian",
//     "South American - Bolivian",
//     "South American - Brazilian",
//     "South American - Chilean",
//     "South American - Colombian",
//     "South American - Ecuadorian",
//     "South American - Guyanese",
//     "South American - Peruvian",
//     "South American - Uruguayan",
//     "South American - Venezuelan",
//     "South American - Paraguayan",
//     "Central American",
//     "Central American - Mexican",
//     "Central American - Nicaraguan",
//     "Central American - Salvadoran",
//     "Central American - Costa Rican",
//     "Central American - Guatemalan",
//     "Central American - Mayan",
//     "Central American - Honduran",
//     "Central American - Panamanian",
//     "Caribbean Islander",
//     "Caribbean Islander - Cuban",
//     "Caribbean Islander - Jamaican",
//     "Caribbean Islander - Trinidadian (Tobagonian)",
//     "Caribbean Islander - Barbadian",
//     "Caribbean Islander - Puerto Rican",
//     "Caribbean Islander - Bahamian",
//     "Caribbean Islander - Grenadian",
//     "Caribbean Islander - Haitian",
//     "Central and West African",
//     "Central and West African - Akan",
//     "Central and West African - Ghanaian",
//     "Central and West African - Nigerian",
//     "Central and West African - Yoruba",
//     "Central and West African - Ivorian",
//     "Central and West African - Liberian",
//     "Central and West African - Sierra Leonean",
//     "Central and West African - Kongo",
//     "Southern and East African",
//     "Southern and East African - Afrikaner",
//     "Southern and East African - Angolan",
//     "Southern and East African - Eritrean",
//     "Southern and East African - Ethiopian",
//     "Southern and East African - Kenyan",
//     "Southern and East African - Malawian",
//     "Southern and East African - Mauritian",
//     "Southern and East African - Mozambican",
//     "Southern and East African - Oromo",
//     "Southern and East African - Seychellois",
//     "Southern and East African - Somali",
//     "Southern and East African - South African",
//     "Southern and East African - Tanzanian",
//     "Southern and East African - Ugandan",
//     "Southern and East African - Zambian",
//     "Southern and East African - Zimbabwean",
//     "Southern and East African - Amhara",
//     "Southern and East African - Batswana",
//     "Southern and East African - Dinka",
//     "Southern and East African - Hutu",
//     "Southern and East African - Masai",
//     "Southern and East African - Nuer",
//     "Southern and East African - Tigrayan",
//     "Southern and East African - Tigre",
//     "Southern and East African - Zulu",
//     "Southern and East African - Namibian",
//     "Other",
//     "Unknown",
// }

// import { registerEnumType } from "type-graphql";

// export enum ProcedureTopic {
//     CRANIAL = "CRANIAL",
//     PNS = "PNS",
//     SPINE = "SPINE",
// }

// registerEnumType(ProcedureTopic, {
//     name: "ProcedureTopic",
//     description: "The different topics that each Procedure Type can be",
// });

// import { registerEnumType } from "type-graphql";

// // Procedure Details
// // export enum SupervisionLevel { //Minimum
// //     PRIMARY,
// //     SECONDARY,
// //     ASSISTANT,
// // }

// // registerEnumType(SupervisionLevel, {
// //     name: "SupervisionLevel", // this one is mandatory
// //     description: "Supervision of Procedure", // this one is optional
// // });

// export enum Magnitude {
//     COMPLEX,
//     INTERMEDIATE,
//     MAJOR,
//     MINOR,
// }

// registerEnumType(Magnitude, {
//     name: "Magnitude", // this one is mandatory
//     description: "Magnitude of Procedure", // this one is optional
// });

// export enum Urgency {
//     ELECTIVE,
//     EMERGENCY,
//     PLANNED_DAY_CASE,
//     UNPLANNED_READMISSION,
//     URGENT,
// }

// registerEnumType(Urgency, {
//     name: "Urgency", // this one is mandatory
//     description: "Urgency of Procedure", // this one is optional
// });

// export enum Complications { //Multiple
//     "Abandoned TURP",
//     "Abdominal Pain",
//     "Abdominal/pelvis collection",
//     "Acute Brain Syndrome",
//     "Acute Renal Impairment",
//     "Aesthetic major",
//     "Aesthetic minor",
//     "Anaemia",
//     "Anaesthetic complication",
//     "Anastomotic leak",
//     "Anastomotic Leak (bowel)",
//     "Anastomotic Leak (ureteroileal)",
//     "Anastomotic revision",
//     "Arrhythmia",
//     "Atrial Fibrillation",
//     "Avulsed ureter",
//     "Bile duct - retained stone",
//     "Bile duct injury",
//     "Bile leak requiring intervention",
//     "Bile leak settling spontaneously",
//     "Bladder Wall Perforation extraperitoneal vs transperitoneal",
//     "Bleeding - Haematoma",
//     "Bleeding - Postoperative Haemorrhage",
//     "Bleeding - Requiring intervention or hospitalisation",
//     "Bleeding requiring haemostatic therapy",
//     "Blocked / Dislodged SPC (requiring operation)",
//     "Blood Transfusion",
//     "Bowel Obstruction Requiring Surgery",
//     "Cardio-respiratory instability",
//     "Cardiovascular - Cardiac Arrest",
//     "Cardiovascular - CVA / TIA",
//     "Cardiovascular - Myocardial Infarction",
//     "Cardiovascular - Myocardial Ischaemia",
//     "Cardiovascular - Stroke",
//     "Chest Infection",
//     "Clinical anastomotic leak",
//     "Compartment syndrome",
//     "Confusion Episode",
//     "Conversion to Laparotomy",
//     "CSF leak",
//     "CVA",
//     "Damage to other viscus",
//     "Dehydration - IV rehydration",
//     "Diabetes Mellitus (exacerbation)",
//     "Diarrhoea - antibiotic related",
//     "Diarrhoea - infective",
//     "Dislocation",
//     "Dural Tear",
//     "Electrolyte imbalance",
//     "Enterocolitis",
//     "Enterocutaneous fistula",
//     "Epilepsy",
//     "Exacerbation arthritis / gout",
//     "Exacerbation of Dementia",
//     "Failed Embolisation",
//     "Failed PUJ repair Open",
//     "Failed stone removal",
//     "Failed Trial of Void",
//     "False Urethral Passage",
//     "Fat necrosis",
//     "Fistula",
//     "Fixation failure",
//     "Flap failure complete",
//     "Flap failure partial",
//     "Fractured stent",
//     "Gastric Band Leak",
//     "General - Adverse Drug Reaction",
//     "General - Confusion",
//     "General - Death",
//     "General - Fall",
//     "General - Fall with fracture",
//     "General - Fever requiring hospitalisation for IV antibiotics",
//     "General - Unplanned return to theatre",
//     "Genitourinary - UTI requiring further antibiotics but not IV",
//     "Graft failure complete",
//     "Graft failure partial",
//     "Haematuria - postoperative clot retention",
//     "Haemorrhage - return to theatre",
//     "Haemorrhage - transfusion required",
//     "Hepatobiliary (Bile leak, cholecystitis etc)",
//     "Hernia",
//     "Hydronephrosis - nephrostomy / stent",
//     "Hypospadias fistula",
//     "Ileus / Bowel Obstruction (conservative)",
//     "Implant failure / extrusion",
//     "Inadvertent Durotomy",
//     "Incomplete Excision",
//     "Infection - Abscess (not wound infection)",
//     "Infection - Cannula site",
//     "Infection - Clinically significant local",
//     "Infection - MRSA",
//     "Infection - VRE",
//     "Intra-abdominal abscess",
//     "Intraoperative fracture",
//     "Intussusception perforation",
//     "Intussusception recurrence",
//     "Laparoscopic Conversion to Open - Adhesions",
//     "Laparoscopic Conversion to Open - Failure to progress",
//     "Laparoscopic Conversion to Open - Organ Injury",
//     "Laparoscopic Conversion to Open - Vascular Injury",
//     "Laparoscopic Introperative complication (other)",
//     "Lymphatic system (chyle leak etc)",
//     "Lymphocoele",
//     "Major organ dysfunction - Acute renal failure",
//     "Major organ dysfunction - ARDS",
//     "Major organ dysfunction - Cholestatic jaundice",
//     "Major organ dysfunction - Hepatic failure",
//     "Major organ dysfunction - Multiorgan",
//     "Major organ dysfunction - Shock or hypotension requiring inotropic support",
//     "Malunion",
//     "Metabolic / Electrolyte imbalance",
//     "Nausea / Vomiting",
//     "Neobladder prolonged leak",
//     "Nephrostomy - blocked",
//     "Nephrostomy - dislodged",
//     "Nerve injury",
//     "Neurological defecit",
//     "Neuropraxia / pressure area",
//     "Nipple Necrosis",
//     "Non union",
//     "None",
//     "Obturator Nerve Injury",
//     "Other",
//     "Pain Syndrome",
//     "Pancreatic Abscess",
//     "Pancreatitis",
//     "PCNL Adjacent organ injury (eg colon)",
//     "PCNL Damage to Kidney requiring prolonged drainage",
//     "PCNL Embolisation",
//     "PCNL Haemorrhage requiring transfusion",
//     "PCNL Prolonged haematuria",
//     "Perforation",
//     "Peripheral vascular disease",
//     "Pleural effusion",
//     "Pneumothorax (chest drain)",
//     "Postoperative atelactasis",
//     "Postoperative Corr Calcium less than 2.0mmol/L",
//     "Postoperative fever >48hrs",
//     "Postoperative Haematoma",
//     "Postoperative Haematoma - Conservative",
//     "Postoperative Haematoma - Conservative Drainage (open or percutaneous)",
//     "Post-operative haemorrhage",
//     "Postoperative ileus",
//     "Post-operative intra-abdominal infection",
//     "Postoperative pain requiring referral to pain clinic",
//     "Postoperative Pain requiring stent insertion",
//     "Postoperative Urinoma - Conservative",
//     "Postoperative Urinoma Drainage (open/percutaneous)",
//     "Post-operative wound infection",
//     "Pressure sores",
//     "Procedure abandoned",
//     "Prolonged length of stay",
//     "Pseudo obstruction",
//     "Pseudocyst",
//     "Pulmonary Embolus",
//     "Pyloromyotomy perforation",
//     "Radiological anastomotic leak",
//     "Rectal Injury - oversewn",
//     "Rectal Injury - stoma and reoperation",
//     "Renal Failure Requiring Dialysis",
//     "Reoperation unplanned",
//     "Respiratory - Pneumonia",
//     "Respiratory Failure",
//     "Retained Stent",
//     "Retention of urine",
//     "Sepsis - Bacteraemia/septicaemia",
//     "Sepsis - Endocarditis",
//     "Sepsis - Line related",
//     "Sepsis - Septic shock",
//     "Septacemia",
//     "Seroma",
//     "Sinus",
//     "Small bowel obstruction",
//     "Splenectomy",
//     "Stent / Nephrostomy - dislodged",
//     "Stent syndrome/stent removal",
//     "Subphrenic abscess",
//     "Superficial wound dehiscence",
//     "Temporary recurrent laryngeal nerve palsy",
//     "Tendon rupture",
//     "Thromboembolism",
//     "Thrombosis - DVT",
//     "Thrombosis - PE",
//     "Total wound dehiscence",
//     "TURP syndrome",
//     "Unplanned ICU admission",
//     "Unplanned readmission after discharge",
//     "Ureteric Injury",
//     "Ureteric perforation",
//     "Ureteric transection",
//     "Urethral Stricture",
//     "Urethral Stricture late comp",
//     "Urethrolysis for retention post incontinence procedure",
//     "Urinary Retention",
//     "Urinary tract infection",
//     "Urinoma / Collection / Abscess - drainage",
//     "Urosepsis",
//     "Use of reversal agents (naloxone and flumazenil)",
//     "Wound breakdown or dehiscence",
//     "Wound erythema",
//     "Wound excessive bleeding",
//     "Wound infection (discharge of pus)",
//     "Wound infection requiring further surgery",
// }

// export enum ComplicationGrade {
//     "CD1: Deviation from normal postoperative course without need for surgical, radiological, endoscopic or pharmacological interventions, EXCEPTING anti-emetics, anti-pyretics, analgesics, diuretics, electrolytes, physiotherapy & wounds opened at bedside",
//     "CD2: Requiring pharmacological treatment (other than that allowed for CD1), including blood transfusion or TPN",
//     "CD3a: Complication which necessitates intervention, surgical, endoscopic or radiological, NOT REQUIRING GENERAL ANAESTHESIA",
//     "CD3b: Complication which necessitates intervention, surgical, endoscopic or radiological, REQUIRING GENERAL ANAESTHESIA",
//     "CD4a: Life threatening complications requiring ICU management: SINGLE ORGAN DYSFUNCTION, INCLUDING DIALYSIS",
//     "CD4b: Life threatening complications requiring ICU management: MULTIORGAN DYSFUNCTION",
//     "CD5: Death",
// }
