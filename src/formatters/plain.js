import _ from 'lodash';

const stringify = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  if (value === null) {
    return 'null';
  }
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  return `${value}`;
};

const plain = (data) => {
  const iter = (tree, parent) => {
    const filtredTree = tree.filter((node) => node.type !== 'unchanged');
    const lines = filtredTree.map((obj) => {
      const property = parent ? `${parent}.${obj.key}` : obj.key;
      switch (obj.type) {
        case 'added':
          return `Property '${property}' was added with value: ${stringify(obj.value)}`;
        case 'deleted':
          return `Property '${property}' was removed`;
        case 'changed':
          return `Property '${property}' was updated. From ${stringify(obj.value1)} to ${stringify(obj.value2)}`;
        case 'nested':
          return iter(obj.children, property);
        default:
          throw new Error(`Type is not defined - ${obj.type}`);
      }
    });
    return lines.join('\n');
  };
  return iter(data, 0);
};

export default plain;
