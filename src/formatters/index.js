import getJsonFormat from './jsonFormat.js';
import plain from './plain.js';
import stylish from './stylish.js';

const formatDiff = (diff, formatName) => {
  switch (formatName) {
    case 'plain':
      return plain(diff);
    case 'json':
      return getJsonFormat(diff);
    case 'stylish':
      return stylish(diff);
    default:
      throw new Error(`output format ${formatName} not found`);
  }
};

export default formatDiff;
