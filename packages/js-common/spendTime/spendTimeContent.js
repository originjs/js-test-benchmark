import * as fs from 'fs';
import axios from 'axios';

export async function spendTime() {
  let cpuTime = 0;
  let ioTime = 0;
  try {
    let data = fs.readFileSync(
      '../../testCaseFactory/config.json',
      {
        encoding: 'utf8',
        flag: 'r'
      },
      (err) => {}
    );
    let config = JSON.parse(data);
    cpuTime = config.cpuTime;
    ioTime = config.ioTime;
  } catch (err) {
    console.log(err);
  }
  let start = Date.now();
  let sum = 0;
  while (Date.now() - start < cpuTime) {
    sum = sum + Math.random() * 10;
    if (sum > 100000000) {
      sum = sum % 10000;
    }
  }

  async function postIoRequest(time) {
    try {
      const response = await axios.post(
       'http://localhost:3000/sync/benchmark/getDelayedMessage',
        {
           delay: time
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  await postIoRequest(ioTime);
}
