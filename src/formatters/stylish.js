import _ from 'lodash';

const stringify = (data, depth, spaceCount = 4) => {
  if (!_.isObject(data)) {
    return `${data}`;
  }

  const lines = Object.entries(data).map(([key, prop]) => {
    const preparedValue = stringify(prop, depth + 1);
    const indent = ' '.repeat((depth * spaceCount));
    return `${indent}${key}: ${preparedValue}`;
  });

  const outIndent = ' '.repeat((depth * spaceCount) - spaceCount);
  const rawResult = ['{', ...lines, `${outIndent}}`].join('\n');

  return rawResult;
};

const stylish = (listObjects) => {
  const iter = (coll, depth) => {
    const spaceCount = 4;
    const leftShift = 2;

    const space = ' '.repeat((depth * spaceCount) - leftShift);
    const res = coll.map((obj) => {
      switch (obj.type) {
        case 'added':
          return `${space}+ ${obj.key}: ${stringify(obj.value, depth + 1)}`;
        case 'deleted':
          return `${space}- ${obj.key}: ${stringify(obj.value, depth + 1)}`;
        case 'unchanged':
          return `${space}  ${obj.key}: ${stringify(obj.value, depth + 1)}`;
        case 'changed':
          return `${space}- ${obj.key}: ${stringify(obj.value1, depth + 1)}\n${space}+ ${obj.key}: ${stringify(obj.value2, depth + 1)}`;
        case 'nested':
          return `${space}  ${obj.key}: ${stringify(iter(obj.children, depth + 1), 1)}`;
        default:
          throw new Error(`Type is not defined - ${obj.type}`);
      }
    });
    const externalIndent = ' '.repeat((depth * spaceCount) - spaceCount);
    return ['{', ...res, `${externalIndent}}`].join('\n');
  };

  return iter(listObjects, 1);
};

export default stylish;
