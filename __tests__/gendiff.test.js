import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'node:fs';
import diff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const getDiff = (file1Name, file2Name, format) => {
  const getPathFile1 = getFixturePath(file1Name);
  const getPathFile2 = getFixturePath(file2Name);

  return diff(getPathFile1, getPathFile2, format);
};

const testData = [
  ['file1.json', 'file2.json', 'stylish', 'stylish_file.txt'],
  ['file1.yml', 'file2.yml', 'stylish', 'stylish_file.txt'],
  ['file1.json', 'file2.json', 'plain', 'plain_file.txt'],
  ['file1.yml', 'file2.yml', 'plain', 'plain_file.txt'],
  ['file1.json', 'file2.json', 'json', 'jsonFormat_file.txt'],
  ['file1.yml', 'file2.yml', 'json', 'jsonFormat_file.txt'],
];

test.each(testData)('diff(%s, %s, format %s) equals %s', (file1, file2, format, expected) => {
  expect(getDiff(file1, file2, format)).toEqual(readFixture(expected));
});
