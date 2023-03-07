import { FILE_PATH } from "@/utils/constants";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

const fetchFiles = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  fs.readdir(`.${FILE_PATH}`, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading directory.");
      return;
    }

    const fileList: any[] = [];

    files.forEach((fileName) => {
      const filePath = `.${FILE_PATH}/${fileName}`;

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error reading file stats.");
          return;
        }

        const fileData = {
          fileName,
          fileSize: stats.size,
          uploadTimestamp: stats.mtime,
        };

        fileList.push(fileData);

        if (fileList.length === files.length) {
          res.status(200).json({
            files: fileList,
          });
        }
      });
    });
  });
};

export default fetchFiles;
