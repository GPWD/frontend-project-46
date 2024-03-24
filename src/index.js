import getParse from './parse.js';
import getReadFile from './readfile.js';
import _ from 'lodash';


const genDiff = (filepath1, filepath2, format) => {
	const obj1 = getParse(getReadFile(filepath1));
	const obj2 = getParse(getReadFile(filepath2));

	const sortedKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
	let resultStr = '';

	for (const key of sortedKeys) {
		if (!obj2.hasOwnProperty(key)) {
			resultStr += `\n  - ${key}: ${obj1[key]}`
		} else if (!obj1.hasOwnProperty(key)) {
		  resultStr += `\n  + ${key}: ${obj2[key]}`
		}

		if (obj1.hasOwnProperty(key) === obj2.hasOwnProperty(key)) {
			if (obj1[key] === obj2[key]) {
				resultStr += `\n    ${key}: ${obj1[key]}`
			} else {
				resultStr += `\n  - ${key}: ${obj1[key]}`
				resultStr += `\n  + ${key}: ${obj2[key]}`
			}
		}
  }

	return `{ ${resultStr} \n}`;
};

export default genDiff;