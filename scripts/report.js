const fs = require('fs');
const axios = require('axios');
const os = require('os');

const techStack = '测试框架-UT';
const url = process.env.REPORT_URL;
const input = process.env.REPORT_INPUT || '0 0 0 0';

// Read the JSON file
const jsonData = JSON.parse(fs.readFileSync('result.json', 'utf8'));

async function main() {
  const patchId_ = (process.env.CI) ? process.env.REPORT_PATCH_ID : (await axios.post(url + '/sync/benchmark/getPatchId', {})).data;
  const res = dealData(jsonData, patchId_);
  postResults(res);
}

function dealData(data, patchId_) {
  return data.results.map(({command, mean}) => ({
    projectName: getProjectInfo(command)[0],
    displayName: `${getProjectInfo(command)[0]}(${getBenchmark(input)})`,
    indexName: `${getBenchmark(input)}`,
    benchmark: `${getProjectInfo(command)[1]}_${getBenchmark(input)}`,
    techStack,
    rawValue: parseFloat(mean.toFixed(2)),
    content: {command, mean},
    patchId: patchId_,
    platform: os.platform(),
  }));
}


function getBenchmarkType(input) {
  const type = input.split(/[\s_]/).pop();
  return type === '0' ? 'CPU密集型' : 'IO密集型';
}
function getBenchmark(input) {
  const type = getBenchmarkType(input);
  const inputParts = input.split(/[\s_]/);
  return `${type}_${inputParts.join('_')}`;
}


function getProjectInfo(command) {
  const projectInfo = command.split(':').pop();
  if (projectInfo.split('-').length === 1) {
    projectMethod = 'default';
  } else {
    projectMethod = projectInfo.split('-').pop();
  }
  projectName = projectInfo.split('-').shift();

  return [projectName, projectMethod];
}

async function postResults(results) {
  for (const result of results) {
    try {
      const {data} = await axios.post(url + '/sync/benchmark', result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}

main();
