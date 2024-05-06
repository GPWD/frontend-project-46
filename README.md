### Hexlet tests and linter status:
[![Actions Status](https://github.com/GPWD/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/GPWD/frontend-project-46/actions)

### Maintainability status from Codeclimate.com:
[![Maintainability](https://api.codeclimate.com/v1/badges/b29ab4110895bf583eb5/maintainability)](https://codeclimate.com/github/GPWD/frontend-project46/maintainability)

### Test Coverage:
[![Test Coverage](https://api.codeclimate.com/v1/badges/b29ab4110895bf583eb5/test_coverage)](https://codeclimate.com/github/GPWD/frontend-project46/test_coverage)

### Node CI:
[![Node CI](https://github.com/GPWD/frontend-project46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/GPWD/frontend-project46/actions)


# Difference calculator

This program finds differences between two files in json and yaml format.  
By default, the result of the comparison is displayed in a convenient format

## Requirement

Node.js 19+

## Installation

Run next commands:
```sh
git clone git@github.com:GPWD/frontend-project46.git
```
```sh
cd frontend-project-46/
```
```sh
make install
```
```sh
sudo npm link
```

## Helper
```sh
gendiff -h
```

## Start program
Default format
```sh
gendiff <name of file1> <name of file2> 
```

Plain format
```sh
gendiff --format plain <name of file1> <name of file2>
```

JSON format
```sh
gendiff --format json <name of file1> <name of file2>
```

## Demonstration

### Compare flat json-files in defaul format:
[![asciicast](https://asciinema.org/a/u110FMaDNFdovC8SlPhgy21Ls.svg)](https://asciinema.org/a/u110FMaDNFdovC8SlPhgy21Ls)

### Compare nested files json and yaml in default format:
[![asciicast](https://asciinema.org/a/ZA50uZzdCHivpw1CGzSgXoSlr.svg)](https://asciinema.org/a/ZA50uZzdCHivpw1CGzSgXoSlr)

### Compare nested files json and yaml in palin format:
[![asciicast](https://asciinema.org/a/XtMnqi26BWxFv06y9iSpP66mI.svg)](https://asciinema.org/a/XtMnqi26BWxFv06y9iSpP66mI)

### Compare nested files json and yaml in json format
[![asciicast](https://asciinema.org/a/OLN3EJJl1AjcJ6a8Fxmqe8RCF.svg)](https://asciinema.org/a/OLN3EJJl1AjcJ6a8Fxmqe8RCF)