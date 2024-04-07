import getParse from './parsefile.js';
import getReadFile from './readfile.js';

const genDiff = (filePath1, filePath2) => {
	return getParse(filePath1, getReadFile(filePath1));
};

export default genDiff;