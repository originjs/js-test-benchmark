const fs = require('fs');
const axios = require('axios');
const os = require('os');

const techStack = 'unitTest';
const url = process.env.REPORT_URL;
const input = process.env.REPORT_INPUT || '0 0 0 0';

// Read the JSON file
const jsonData = JSON.parse(fs.readFileSync('result.json', 'utf8'));

async function main() {
  const { data: patchId } = await axios.post(
    url + '/sync/benchmark/getPatchId',
    {}
  );
  console.log('patchId: ', patchId)
  const res = dealdata(jsonData, patchId.toString());
  postData(res);
}

function dealdata(jsonData, patchId) {
  return jsonData.results.map((el) => ({
    projectName: getProjectInfo(el.command)[0],
    benchmark: getProjectInfo(el.command)[1] + '_' + input.split(/[\s|_]/).join('_'),
    techStack,
    score: 0,
    content: {
      input: input,
      mode: getProjectInfo(el.command)[1],
      mean: el.mean
    },
    patchId,
    platform: os.platform()
  }));
}

function getProjectInfo(command) {
  const projectInfo = command.split(':').pop();
  if ((projectInfo.split('-').length === 1)) {
    projectMethod = 'default';
  } else {
    projectMethod = projectInfo.split('-').pop();
  }
  projectName = projectInfo.split('-').shift();

  return [projectName, projectMethod];
}

async function postData(res) {
  for (const data of res) {
    try {
      const response = await axios.post(url + '/sync/benchmark', data);
      console.log(data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

main();
