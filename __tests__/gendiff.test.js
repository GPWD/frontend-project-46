import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'node:fs';
import diff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('genDiff', () => {
  test('stylish formatter test (json file)', () => {
    const getPathFile1 = getFixturePath('file1.json');
    const getPathFile2 = getFixturePath('file2.json');
    const readExpectedFile = readFixture('stylish_file.txt');

    expect(diff(getPathFile1, getPathFile2)).toEqual(readExpectedFile);
  });

  test('stylish formatter test (yml file)', () => {
    const getPathFile1 = getFixturePath('file1.yml');
    const getPathFile2 = getFixturePath('file2.yml');
    const readExpectedFile = readFixture('stylish_file.txt');

    expect(diff(getPathFile1, getPathFile2)).toEqual(readExpectedFile);
  });

  test('plain formater test (json file)', () => {
    const getPathFile1 = getFixturePath('file1.json');
    const getPathFile2 = getFixturePath('file2.json');
    const readExpectedFile = readFixture('plain_file.txt');

    expect(diff(getPathFile1, getPathFile2, 'plain')).toEqual(readExpectedFile);
  });

  test('plain formater test (yml file)', () => {
    const getPathFile1 = getFixturePath('file1.yml');
    const getPathFile2 = getFixturePath('file2.yml');
    const readExpectedFile = readFixture('plain_file.txt');

    expect(diff(getPathFile1, getPathFile2, 'plain')).toEqual(readExpectedFile);
  });

  test('jsonFormat formater test (json file)', () => {
    const getPathFile1 = getFixturePath('file1.json');
    const getPathFile2 = getFixturePath('file2.json');
    const readExpectedFile = readFixture('jsonFormat_file.txt');

    expect(diff(getPathFile1, getPathFile2, 'json')).toEqual(readExpectedFile);
  });

  test('jsonFormat formater test (yml file)', () => {
    const getPathFile1 = getFixturePath('file1.yml');
    const getPathFile2 = getFixturePath('file2.yml');
    const readExpectedFile = readFixture('jsonFormat_file.txt');

    expect(diff(getPathFile1, getPathFile2, 'json')).toEqual(readExpectedFile);
  });
});
