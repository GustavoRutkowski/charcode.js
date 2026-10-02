import { readFileSync } from 'fs';

let txt = [];

if (!process.env.JEST_WORKER_ID) {
    txt = readFileSync(0, 'utf-8')
        .trim()
        .split(/\r?\n/);
}

let line = 0;

export const input = () => txt[line++];
export const output = (...data) => console.log(...data); // console.log alias...
