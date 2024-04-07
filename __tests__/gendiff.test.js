import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'node:fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const getPathFile1 = getFixturePath('file1.json');
const getPathFile2 = getFixturePath('file2.json');
const readExpectedFile = readFixture('expected_file.txt');

test('genDiff', () => {
  expect(genDiff(getPathFile1, getPathFile2)).toEqual(readExpectedFile);
});
