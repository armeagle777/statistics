import fileDownload from "js-file-download";
import { getFileBySsn } from "../api/personsApi";

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
