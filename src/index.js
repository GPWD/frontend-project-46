import _ from 'lodash';
import getParse from './parse.js';
import getReadFile from './readfile.js';

const genDiff = (filePath1, filePath2) => {
  const obj1 = getParse(getReadFile(filePath1));
  const obj2 = getParse(getReadFile(filePath2));

  const sortedKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  let resultStr = '';

  for (const key of sortedKeys) {
    if (!Object.hasOwnProperty.call(obj2, key)) {
      resultStr += `\n  - ${key}: ${obj1[key]}`;
    } else if (!Object.hasOwnProperty.call(obj1, key)) {
      resultStr += `\n  + ${key}: ${obj2[key]}`;
    } else if (Object.hasOwnProperty.call(obj1, key) === Object.hasOwnProperty.call(obj2, key)) {
      if (obj1[key] === obj2[key]) {
        resultStr += `\n    ${key}: ${obj1[key]}`;
      } else {
        resultStr += `\n  - ${key}: ${obj1[key]}`;
        resultStr += `\n  + ${key}: ${obj2[key]}`;
      }
    }
  }

  return `{ ${resultStr} \n}`;
};

export default genDiff;
