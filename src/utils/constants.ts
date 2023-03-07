export const FILE_PATH = "/public/uploads";

export const SIZE_LIMIT_IN_MB = 5;

export const IMAGE_COLUMNS = [
  {
    header: "Filename",
    accessor: "fileName",
  },
  { header: "Size", accessor: "fileSize" },
  { header: "Uploaded at", accessor: "uploadTimestamp" },
  { header: "", accessor: "predictButton" },
];

export const PREDICTION_COLUMNS = [
  {
    header: "Title",
    accessor: "title",
  },
  { header: "Description", accessor: "description" },
  { header: "Predicted at", accessor: "predictionTimestamp" },
  { header: "", accessor: "viewButton" },
];

export const CATEGORIES = [
  {
    title: "Images",
    columns: IMAGE_COLUMNS,
  },
  {
    title: "Predictions",
    columns: PREDICTION_COLUMNS,
  },
];
