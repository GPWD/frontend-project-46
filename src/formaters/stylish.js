import _ from 'lodash';

const stylish = (listObjects) => {
  const stringify = (data, depth) => {
    if (!_.isObject(data)) {
      return `${data}`;
    }

    const lines = Object.entries(data).map(([key, prop]) => {
      const preparedValue = stringify(prop, depth + 1);
      const indent = ' '.repeat((depth * 4));
      return `${indent}${key}: ${preparedValue}`;
    });

    const outIndent = ' '.repeat((depth * 4) - 4);
    const rawResult = ['{', ...lines, `${outIndent}}`].join('\n');

    return rawResult;
  };

  const iter = (coll, depth) => {
    const space = ' '.repeat((depth * 4) - 2);
    const res = coll.map((obj) => {
      if (obj.type === 'added') {
        return `${space}+ ${obj.key}: ${stringify(obj.value, depth + 1)}`;
      }
      if (obj.type === 'deleted') {
        return `${space}- ${obj.key}: ${stringify(obj.value, depth + 1)}`;
      }
      if (obj.type === 'unchanges') {
        return `${space}  ${obj.key}: ${stringify(obj.value, depth + 1)}`;
      }
      if (obj.type === 'changes') {
        return `${space}- ${obj.key}: ${stringify(obj.value1, depth + 1)}\n${space}+ ${obj.key}: ${stringify(obj.value2, depth + 1)}`;
      }

      const processedData = iter(obj.children, depth + 1);
      return `${space}  ${obj.key}: ${stringify(processedData, 1)}`;
    });
    const externalIndent = ' '.repeat((depth * 4) - 4);
    return ['{', ...res, `${externalIndent}}`].join('\n');
  };

  return iter(listObjects, 1);
};

export default stylish;
