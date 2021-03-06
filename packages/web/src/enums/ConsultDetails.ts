export enum Gender {
  "Male",
  "Female",
}

export enum AdmissionCategory {
  "Elective",
  "Emergency",
  "Day Case",
  "Unplanned readmission <28 days",
  "Non-Admitted",
}

export enum RotationPeriod {
  "R1.1",
  "R1.2",
  "R2.1",
  "R2.2",
  "R3.1",
  "R3.2",
  "R4.1",
  "R4.2",
  "R5.1",
  "R5.2",
  "R6.1",
  "R6.2",
  "R7.1",
  "R7.2",
}

export enum SetLevel {
  "Year One",
  "Year Two",
  "Year Three",
  "Year Four",
  "Year Five",
  "Year Six",
  "Year Seven",
  "Paediatric E1",
  "Paediatric E2",
  "Paediatric E+",
  "Paediatric M1",
  "Paediatric M2",
  "Paediatric M+",
  "Paediatric S1",
  "Paediatric S2",
  "Paediatric S+",
  "Plastic Aus Early SET",
}

export enum UnplannedReadmission {
  "No",
  "Yes - Pain",
  "Yes - Bleeding",
  "Yes - Electrolyte Imbalance",
  "Yes - Infection",
  "Yes - Pulmonary Embolism",
  "Yes - Intra-abdominal collection",
  "Yes - Organ Failure",
  "Yes - Other cause",
}

export enum FundingType {
  "Private - ACC funded (NZ)",
  "Private - DHB funded (NZ)",
  "Private - Health insurance funded (NZ)",
  "Private - Self funded",
  "Public",
  "Traffic (Aus)",
  "Veteran (Aus)",
  "Workcover (Aus)",
}

export enum ASAGrade {
  "I - Normal Healthy Patient",
  "II - Mild Systemic Disease",
  "III - Severe Systemic Disease",
  "IV - Severe Systemic Disease that is a constant threat to life",
  "V - Moribund patient who is not expected to survive without operation",
  "VI - A declared brain-dead patient whose organs are being removed for donor purposes",
}

export enum WoundInfectionRisk {
  "Clean",
  "Clean/Contaminated",
  "Contaminated",
  "Dirty",
  "N/A",
  "Other",
}

export enum TypeOfAnaesthetic { //Multiple
  "Epidural",
  "General",
  "Local",
  "Regional block",
  "Sedation",
  "Spinal",
}

export enum Prophylaxis { //Multiple
  "Antibiotics",
  "DVT Prevention",
}

export enum UnplannedIcu {
  "No",
  "Yes - Localised sepsis (wound)",
  "Yes - Generalised sepsis",
  "Yes - Pneumonia",
  "Yes - Renal failure",
  "Yes - Arrhythmia",
  "Yes - Myocardial Infarction",
  "Yes - Pulmonary Embolism",
  "Yes - Other Cause",
}

export enum ReturnToTheatre {
  "No",
  "Yes - Bleeding",
  "Yes - Collection",
  "Yes - CSF leak",
  "Yes - Wound sepsis",
  "Yes - Wound dehiscence",
  "Yes - Other organ/structure injury",
  "Yes - Other Cause",
}

export enum Outcome {
  "Died",
  "Discharged home",
  "Discharged for care or respite",
  "Transferred for more complex care",
  "Absconded/took own discharge",
  "Referred to other services",
}

export enum MortalityClassification { // Only if Outcome = Died
  "Unavoidable expected death",
  "Unavoidable death with one or more substandard factors in care",
  "Possibly preventable death",
  "Death due to complications of surgery",
  "Death due to complications of comorbidities",
}

export enum Ethnicity { //Multiple
  "Australian",
  "Australian - Australian Aboriginal",
  "Australian - Australian South Sea Islander",
  "Australian - Torres Strait Islander",
  "New Zealander",
  "New Zealander - Maori",
  "Melanesian and Papuan",
  "Melanesian and Papuan - New Caledonia",
  "Melanesian and Papuan - Ni-Vanuatu",
  "Melanesian and Papuan - Papua New Guinean",
  "Melanesian and Papuan - Solomon Islander",
  "Micronesian",
  "Micronesian - I-Kiribati",
  "Micronesian - Nauruan",
  "Polynesian",
  "Polynesian - Cook Islander",
  "Polynesian - Niuean",
  "Polynesian - Samoan",
  "Polynesian - Tongan",
  "Polynesian - Hawaiian",
  "Polynesian - Tahitian",
  "Polynesian - Tokelauan",
  "Polynesian - Tuvaluan",
  "Polynesian - French Polynesian",
  "British",
  "British - English",
  "British - Scottish",
  "British - Welsh",
  "British - Channel Islander",
  "British - Manx",
  "British - Falkland Islander",
  "Irish",
  "Western European",
  "Western European - Austrian",
  "Western European - Dutch",
  "Western European - Flemish",
  "Western European - French",
  "Western European - German",
  "Western European - Swiss",
  "Western European - Belgian",
  "Western European - Frisian",
  "Western European - Luxembourg",
  "Northern European",
  "Northern European - Danish",
  "Northern European - Finnish",
  "Northern European - Icelandic",
  "Northern European - Norwegian",
  "Northern European - Swedish",
  "Northern European - Greenlandic",
  "Southern European",
  "Southern European - Basque",
  "Southern European - Catalan",
  "Southern European - Italian",
  "Southern European - Maltese",
  "Southern European - Portuguese",
  "Southern European - Spanish",
  "Southern European - Gibraltarian",
  "South Eastern Europe",
  "South Eastern Europe - Albanian",
  "South Eastern Europe - Bosnian",
  "South Eastern Europe - Bulgarian",
  "South Eastern Europe - Croatian",
  "South Eastern Europe - Greek",
  "South Eastern Europe - Macedonian",
  "South Eastern Europe - Moldovan",
  "South Eastern Europe - Montenegrin",
  "South Eastern Europe - Romanian",
  "South Eastern Europe - Roma/Gypsy",
  "South Eastern Europe - Serbian",
  "South Eastern Europe - Slovene",
  "South Eastern Europe - Cypriot",
  "South Eastern Europe - Vlach",
  "Eastern European",
  "Eastern European - Belarusan",
  "Eastern European - Czech",
  "Eastern European - Estonian",
  "Eastern European - Hungarian",
  "Eastern European - Latvian",
  "Eastern European - Lithuanian",
  "Eastern European - Polish",
  "Eastern European - Russian",
  "Eastern European - Slovak",
  "Eastern European - Ukrainian",
  "Eastern European - Sorb/Wend",
  "Arab",
  "Arab - Algerian",
  "Arab - Egyptian",
  "Arab - Iraqi",
  "Arab - Jordanian",
  "Arab - Kuwaiti",
  "Arab - Lebanese",
  "Arab - Libyan",
  "Arab - Moroccan",
  "Arab - Palestinian",
  "Arab - Saudi Arabian",
  "Arab - Syrian",
  "Arab - Tunisian",
  "Arab - Yemeni",
  "Arab - Baggara",
  "Arab - Bedouin",
  "Arab - Omani",
  "Jewish",
  "Other North African and Middle Eastern",
  "Other North African and Middle Eastern - Assyrian/Chaldean",
  "Other North African and Middle Eastern - Berber",
  "Other North African and Middle Eastern - Coptic",
  "Other North African and Middle Eastern - Iranian",
  "Other North African and Middle Eastern - Kurdish",
  "Other North African and Middle Eastern - Sudanese",
  "Other North African and Middle Eastern - Turkish",
  "Other North African and Middle Eastern - Nubian",
  "South-East Asian",
  "South-East Asian - Anglo-Burmese",
  "South-East Asian - Burmese",
  "South-East Asian - Hmong",
  "South-East Asian - Khmer",
  "South-East Asian - Lao",
  "South-East Asian - Thai",
  "South-East Asian - Vietnamese",
  "South-East Asian - Karen",
  "South-East Asian - Mon",
  "South-East Asian - Filipino",
  "South-East Asian - Indonesian",
  "South-East Asian - Javanese",
  "South-East Asian - Madurese",
  "South-East Asian - Malay",
  "South-East Asian - Sundanese",
  "South-East Asian - Timorese",
  "South-East Asian - Acehnese",
  "South-East Asian - Balinese",
  "South-East Asian - Bruneian",
  "South-East Asian - Kadazan",
  "South-East Asian - Singaporean",
  "South-East Asian - Temoq",
  "South-East Asian - Irian Jayan",
  "South-East Asian - Sumatran",
  "Chinese Asian",
  "Chinese Asian - Chinese",
  "Other North-East Asian",
  "Other North-East Asian - Japanese",
  "Other North-East Asian - Korean",
  "Other North-East Asian - Mongolian",
  "Other North-East Asian - Tibetan",
  "Southern Asian",
  "Southern Asian - Anglo-Indian",
  "Southern Asian - Bengali",
  "Southern Asian - Burgher",
  "Southern Asian - Gujarati",
  "Southern Asian - Indian",
  "Southern Asian - Malayali",
  "Southern Asian - Nepalese",
  "Southern Asian - Pakistani",
  "Southern Asian - Punjabi",
  "Southern Asian - Sikh",
  "Southern Asian - Sinhalese",
  "Southern Asian - Tamil",
  "Southern Asian - Maldivian",
  "Central Asian",
  "Central Asian - Afghan",
  "Central Asian - Armenian",
  "Central Asian - Georgian",
  "Central Asian - Kazakh",
  "Central Asian - Pathan",
  "Central Asian - Uzbek",
  "Central Asian - Azeri",
  "Central Asian - Hazara",
  "Central Asian - Tajik",
  "Central Asian - Tatar",
  "Central Asian - Turkmen",
  "Central Asian - Uighur",
  "Central Asian - Chechen",
  "North American",
  "North American - African American",
  "North American - American",
  "North American - Canadian",
  "North American - French Canadian",
  "North American - Hispanic (North American)",
  "North American - Native North American Indian",
  "North American - Bermudan",
  "South American",
  "South American - Argentinian",
  "South American - Bolivian",
  "South American - Brazilian",
  "South American - Chilean",
  "South American - Colombian",
  "South American - Ecuadorian",
  "South American - Guyanese",
  "South American - Peruvian",
  "South American - Uruguayan",
  "South American - Venezuelan",
  "South American - Paraguayan",
  "Central American",
  "Central American - Mexican",
  "Central American - Nicaraguan",
  "Central American - Salvadoran",
  "Central American - Costa Rican",
  "Central American - Guatemalan",
  "Central American - Mayan",
  "Central American - Honduran",
  "Central American - Panamanian",
  "Caribbean Islander",
  "Caribbean Islander - Cuban",
  "Caribbean Islander - Jamaican",
  "Caribbean Islander - Trinidadian (Tobagonian)",
  "Caribbean Islander - Barbadian",
  "Caribbean Islander - Puerto Rican",
  "Caribbean Islander - Bahamian",
  "Caribbean Islander - Grenadian",
  "Caribbean Islander - Haitian",
  "Central and West African",
  "Central and West African - Akan",
  "Central and West African - Ghanaian",
  "Central and West African - Nigerian",
  "Central and West African - Yoruba",
  "Central and West African - Ivorian",
  "Central and West African - Liberian",
  "Central and West African - Sierra Leonean",
  "Central and West African - Kongo",
  "Southern and East African",
  "Southern and East African - Afrikaner",
  "Southern and East African - Angolan",
  "Southern and East African - Eritrean",
  "Southern and East African - Ethiopian",
  "Southern and East African - Kenyan",
  "Southern and East African - Malawian",
  "Southern and East African - Mauritian",
  "Southern and East African - Mozambican",
  "Southern and East African - Oromo",
  "Southern and East African - Seychellois",
  "Southern and East African - Somali",
  "Southern and East African - South African",
  "Southern and East African - Tanzanian",
  "Southern and East African - Ugandan",
  "Southern and East African - Zambian",
  "Southern and East African - Zimbabwean",
  "Southern and East African - Amhara",
  "Southern and East African - Batswana",
  "Southern and East African - Dinka",
  "Southern and East African - Hutu",
  "Southern and East African - Masai",
  "Southern and East African - Nuer",
  "Southern and East African - Tigrayan",
  "Southern and East African - Tigre",
  "Southern and East African - Zulu",
  "Southern and East African - Namibian",
  "Other",
  "Unknown",
}

// registerEnumType(UserRole, {
//     name: "UserRole", // this one is mandatory
//     description: "The basic roles a user can have", // this one is optional
// });
