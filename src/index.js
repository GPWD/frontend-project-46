import getParse from './parse.js';
import getReadFile from './readfile.js';


const genDiff = (filepath1, filepath2, format) => {
	const file1 = getReadFile(filepath1);
	const file2 = getReadFile(filepath2);

	return getParse(file1);
};

export default genDiff;