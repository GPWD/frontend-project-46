import _ from 'lodash';
import getParse from './parsers.js';
import getReadFile from './readfile.js';
import stylish from './formaters/stylish.js';

const compareKeys = (key, obj1, obj2, iter) => {
  if (!Object.hasOwnProperty.call(obj2, key)) {
    return { key, type: 'deleted', value: obj1[key] };
  }

  if (!Object.hasOwnProperty.call(obj1, key)) {
    return { key, type: 'added', value: obj2[key] };
  }

  if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
    return { key, type: 'nested', children: iter(obj1[key], obj2[key]) };
  }

  if (obj1[key] !== obj2[key]) {
    return {
      key,
      type: 'changes',
      value1: obj1[key],
      value2: obj2[key],
    };
  }
  return { key, type: 'unchanges', value: obj1[key] };
};

const diff = (filePath1, filePath2, formater = stylish) => {
  const parsedData1 = getParse(filePath1, getReadFile(filePath1));
  const parsedData2 = getParse(filePath2, getReadFile(filePath2));

  const iter = (obj1, obj2) => {
    const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
    return keys.map((key) => compareKeys(key, obj1, obj2, iter));
  };

  return formater(iter(parsedData1, parsedData2));
};

export default diff;
