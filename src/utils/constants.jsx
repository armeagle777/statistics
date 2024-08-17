export const perPageCount = 10;

export const MOCK_MONTHS = [
  {
    label: "Հունվար",
    value: 1,
    key: "Հունվար",
  },
  {
    label: "Փետրվար",
    value: 2,
    key: "Փետրվար",
  },
  {
    label: "Մարտ",
    value: 3,
    key: "Մարտ",
  },
  {
    label: "Ապրիլ",
    value: 4,
    key: "Ապրիլ",
  },
  {
    label: "Մայիս",
    value: 5,
    key: "Մայիս",
  },
  {
    label: "Հունիս",
    value: 6,
    key: "Հունիս",
  },
  {
    label: "Հուլիս",
    value: 7,
    key: "Հուլիս",
  },
  {
    label: "Օգոստոս",
    value: 8,
    key: "Օգոստոս",
  },
  {
    label: "Սեպտեմբեր",
    value: 9,
    key: "Սեպտեմբեր",
  },
  {
    label: "Հոկտեմբեր",
    value: 10,
    key: "Հոկտեմբեր",
  },
  {
    label: "Նոյեմբեր",
    value: 11,
    key: "Նոյեմբեր",
  },
  {
    label: "Դեկտեմբեր",
    value: 12,
    key: "Դեկտեմբեր",
  },
];

export const MOCK_YEARS = [
  2000, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
  2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
].map((year) => ({
  label: `${year}`,
  value: year,
  key: year,
}));

export const MOCK_PERIODS = [
  {
    label: "1-ին կիսամյակ",
    value: "h1",
    key: "h1",
  },
  {
    label: "2-րդ կիսամյակ",
    value: "h2",
    key: "h2",
  },
  {
    label: "տարեկան",
    value: "annual",
    key: "annual",
  },
  {
    label: "1-ին եռամսյակ",
    value: "q1",
    key: "q1",
  },
  {
    label: "2-րդ եռամսյակ",
    value: "q2",
    key: "q2",
  },
  {
    label: "3-րդ եռամսյակ",
    value: "q3",
    key: "q3",
  },
  {
    label: "4-րդ եռամսյակ",
    value: "q4",
    key: "q4",
  },
  {
    label: "9֊ամսյակ",
    value: "9monthly",
    key: "9monthly",
  },
  {
    label: "ամսական",
    value: "monthly",
    key: "monthly",
  },
];

export const periodsMap = {
  H1: "h1",
  H2: "h2",
  ANNUAL: "annual",
  Q1: "q1",
  Q2: "q2",
  Q3: "q3",
  Q4: "q4",
  "9MONTHLY": "9monthly",
  MONTHLY: "monthly",
};

export const STATISTICS_FILTERS = {
  DECISION_TYPE: "decType",
  YEAR: "year",
  PERIOD: "period",
  MONTH: "month",
  BORDERCROSS_TYPE: "borderCross",
  REPORT_TYPE: "report_type",
  CLAIM_TYPE: "claim_type",
  WP_TYPE: "wp_type",
};

export const ANT_BTN_TYPES = {
  PRIMARY: "primary",
  DEFAULT: "default",
};

export const STATISTICS_TYPE_MAPS = {
  B_CROSS_TOTAL: "borderCrossTotal",
  B_CROSS_COUNTRIES: "borderCrossCountries",
  B_CROSS_PERIOD: "borderCrossPeriod",
  ASYLUM_TOTAL: "asylumTotal",
  ASYLUM_APPLICATIONS: "asylumApplications",
  ASYLUM_DECISIONS: "asylumDecisions",
  ASYLUM_YEARS: "asylumYears",
  WP_SIMPLE: "asylumYears",
};

export const DOWNLOAD_FILE_TYPES = {
  EXCEL: "excel",
  PDF: "pdf",
};

export const FILE_MIME_TYPES = {
  EXCEL: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  PDF: "application/pdf",
};
