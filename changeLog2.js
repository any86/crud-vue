import JSON5 from 'json5';
import { exec, execSync } from 'child_process'
import fs from 'fs';



function getLog() {
    const keys = ['refactor', 'fix', 'perf', 'feat']
    const END_TAG = '--END--'
    const SEPARATOR_TAG = '--SEPARATOR--'
    const cmd = `git log --after="2022-1-3"  --no-merges --date=format:"%Y-%m-%d %H:%M:%S"  --pretty=format:"%B${SEPARATOR_TAG}%cd${SEPARATOR_TAG}%h${SEPARATOR_TAG}%H${END_TAG}"`
    const logString = execSync(cmd).toString().trim();
    const log = logString.split(END_TAG);
    // 删除最后一行空数据
    log.pop();
    return _groupLogByTime(log, keys, SEPARATOR_TAG);

}

function _groupLogByTime(logArray, keys, SEPARATOR_TAG) {
    // 分组
    const group = {};

    // 遍历数据到组
    for (const row of logArray) {
        const rowArray = row.split(SEPARATOR_TAG);
        // 删除描述中开头结尾的\n
        rowArray[0] = rowArray[0].replace(/^\n/, '').replace(/\s*$/, '');
        const [message, time, shortHash, hash] = rowArray;
        if (!group[time]) {
            group[time] = [];
        }

        // const rule = RegExp(`^${key}\\s*:\\s*`)
        group[time].push({
            message, time, shortHash, hash
        });
    }
    return group;
}


function _groupLog(logArray, keys, SEPARATOR_TAG) {
    // 分组
    const group = {};
    for (const key of keys) group[key] = [];

    // 遍历数据到组
    for (const row of logArray) {
        const rowArray = row.split(SEPARATOR_TAG);
        // 删除描述中开头结尾的\n
        rowArray[0] = rowArray[0].replace(/^\n/, '').replace(/\s*$/, '');
        const [message, time, shortHash, hash] = rowArray;
        for (const key of keys) {
            if (message.includes(key)) {
                const rule = RegExp(`^${key}\\s*:\\s*`)
                group[key].push({
                    message: message.replace(rule, ''), time, shortHash, hash
                });
            }
        }
    }
    return group;
}

function genMD(group, title = '更新日志') {
    const md = [`# ${title}`];

    if (group.feat.length) {
        md.push(`## 新增功能(${group.feat.length}项)`);
        for (const { message } of group.feat) {
            md.push(message);
        }
    }

    if (group.refactor.length) {
        md.push(`## 功能重构(${group.refactor.length}项)`);
        for (const { message } of group.refactor) {
            md.push(message);
        }
    }

    if (group.perf.length) {
        md.push(`## 功能优化(${group.perf.length}项)`);
        for (const { message } of group.perf) {
            md.push(message);
        }
    }
    if (group.fix.length) {
        md.push(`## 修复Bug(${group.fix.length}项)`);
        for (const { message } of group.fix) {
            md.push(message);
        }
    }

    fs.writeFileSync('test.md', md.join('\n'))
}


const g = getLog()

console.log(g);
// genMD(g)




