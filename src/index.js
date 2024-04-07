import _ from 'lodash';
import getParse from './parsefile.js';
import getReadFile from './readfile.js';

const genDiff = (filePath1, filePath2) => {
		const readFileOne = getReadFile(filePath1);
		const readFileTwo = getReadFile(filePath2);
	
		const obj1 = getParse(filePath1, readFileOne);
		const obj2 = getParse(filePath2, readFileTwo);
	
		const sortedKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
		let resultStr = '';
	
		for (const key of sortedKeys) {
			if (!Object.hasOwn(obj2, key)) {
				resultStr += `\n  - ${key}: ${obj1[key]}`;
			} else if (!Object.hasOwn(obj1, key)) {
				resultStr += `\n  + ${key}: ${obj2[key]}`;
			} else if (Object.hasOwn(obj1, key) === Object.hasOwn(obj2, key) && obj1[key] === obj2[key]) {
				resultStr += `\n    ${key}: ${obj1[key]}`;
			} else {
				resultStr += `\n  - ${key}: ${obj1[key]}`;
				resultStr += `\n  + ${key}: ${obj2[key]}`;
			}
		}
	
	return `{${resultStr}\n}`;
};

export default genDiff;