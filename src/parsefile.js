import path from 'node:path';

const getParse = (filePath, file) => {
  if (path.extname(filePath) === '.json') {
    return JSON.parse(file);
  }

  return file;
};

export default getParse;
