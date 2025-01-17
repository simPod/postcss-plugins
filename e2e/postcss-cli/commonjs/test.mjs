import assert from 'assert';
import fs from 'fs/promises';

const result = await fs.readFile('./result.css');
const expect = await fs.readFile('./expect.css');

assert.equal(result.toString(), expect.toString());
