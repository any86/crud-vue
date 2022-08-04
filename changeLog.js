const JSON5 = require('json5');
const exec = require('child_process').exec; //异步子进程
const execSync = require('child_process').execSync; //同步子进程
const fs = require('fs'); //文件读取模块
let log = '[' + execSync(`git log --after="2021-1-1" --date=format:"%Y-%m-%d %H:%M:%S"  --pretty=format:"{commit":"'%B'","date":"'%cd'"},`).toString().trim() + [']'];
log = log.replace(/\n/g, '');
fs.writeFileSync('git-log.js', log);
const json = JSON5.parse(log);
const map = {
    refactor: [],
    fix: [],
    perf: [],
    feat: [],
};
for (const { commit } of json) {
    if (/^refactor:/.test(commit)) {
        map.refactor.push(commit.replace(/^refactor:/, '').trim());
    } else if (/^perf:/.test(commit)) {
        map.perf.push(commit.replace(/^perf:/, '').trim());
    } else if (/^fix:/.test(commit)) {
        map.fix.push(commit.replace(/^fix:/, '').trim());
    }
}


const md = ['## 运维监控5.0'];
md.push('工作内容如下:');

if (map.feat.length) {
    md.push(`### 新增功能(${map.feat.length}项)`);
    md.push(map.feat.join('\n'));
}

if (map.refactor.length) {
    md.push(`### 功能重构(${map.refactor.length}项)`);
    md.push(map.refactor.join('\n'));
}

if (map.perf.length) {
    md.push(`### 功能优化(${map.perf.length}项)`);
    md.push(map.perf.join('\n'));
}
if (map.fix.length) {
    md.push(`### 修复Bug(${map.fix.length}项)`);
    md.push(map.fix.join('\n'));
}

fs.writeFileSync('t.md', md.join('\n'))
