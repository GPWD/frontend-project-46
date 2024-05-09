import path from 'node:path';
import yaml from 'js-yaml';
import getReadFile from './readfile.js';

const getParse = (filePath, file) => {
  const formatFile = path.extname(filePath).slice(1);

  if (formatFile === 'json') {
    return JSON.parse(file);
  }

  if (formatFile === 'yml' || formatFile === 'yaml') {
    return yaml.load(getReadFile(filePath));
  }
  return file;
};

export default getParse;
