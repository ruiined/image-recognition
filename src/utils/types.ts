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

export type Modal = {
  isOpen: boolean;
  handleClose: () => void;
  isPredictionTab: boolean;
  image: FileData | undefined;
};

export type ImageDialog = {
  image: FileData | undefined;
  handleClose: () => void;
};
