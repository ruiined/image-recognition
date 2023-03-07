export type Columns = { header: string; accessor: string }[];

export type Table = {
  title: string;
  columns: Columns;
  fileData: FileData[];
};

export type FileData = {
  [key: string]: any;
  fileName: string;
  fileSize: number;
  uploadTimestamp: Date;
};

export type Prediction = {
  bbox: { x1: number; y1: number; x2: number; y2: number };
  label: string;
  score: number;
};

export type PredictionData = {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  prediction: any;
};

export type Modal = {
  isOpen: boolean;
  handleClose: () => void;
  isPredictionTab: boolean;
  image: FileData | undefined;
  setPredictionData: (data: PredictionData) => void;
};

export type ImageDialog = {
  image: FileData | undefined;
  handleClose: () => void;
  savePredictionData: (title: string, description: string) => void;
};

export type PredictionDialog = {
  image: FileData | undefined;
};

export type BoxOverlay = {
  prediction: Prediction;
  imageRatio: number;
};

export type Box = {
  top: number;
  left: number;
  width: number;
  height: number;
};
