import fileDownload from "js-file-download";

export const downloadPdf = async (url, fileName, personInfo) => {
  try {
    const file = await getFileBySsn(url, personInfo);
    fileDownload(file, fileName);
  } catch (error) {
    console.log("error:::::: ", error);
  }
};

export const formatDates = (date) => {
  return date;
};

export const addTotals = (arr) => {
  if (arr.length === 0) return arr;

  const totals = Object.keys(arr[0]).reduce((acc, key) => {
    if (typeof arr[0][key] === "number") {
      acc[key] = 0;
    } else {
      acc[key] = key === "key" ? "total" : "Ընդամենը";
    }
    return acc;
  }, {});

  arr.forEach((obj) => {
    for (const key in totals) {
      if (typeof obj[key] === "number") {
        totals[key] += obj[key];
      }
    }
  });

  return [totals, ...arr];
};
