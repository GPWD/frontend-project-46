import _ from 'lodash';
import getParse from './parsefile.js';
import getReadFile from './readfile.js';

const genDiff = (filePath1, filePath2) => {
  const parsedData1 = getParse(filePath1, getReadFile(filePath1));
  const parsedData2 = getParse(filePath2, getReadFile(filePath2));

  const keys = _.sortBy(_.union(Object.keys(parsedData1), Object.keys(parsedData2)));

  const listData = keys.map((key) => {
    if (!Object.hasOwnProperty.call(parsedData2, key)) {
      return `  - ${key}: ${parsedData1[key]}`;
    }
    if (!Object.hasOwnProperty.call(parsedData1, key)) {
      return `  + ${key}: ${parsedData2[key]}`;
    }
    if (parsedData1[key] === parsedData2[key]) {
      return `    ${key}: ${parsedData1[key]}`;
    }
    return `  - ${key}: ${parsedData1[key]}\n  + ${key}: ${parsedData2[key]}`;
  });

  const strData = listData.join('\n');
  return `{\n${strData}\n}`;
};

export default genDiff;
