// main.js
const { Worker } = require('worker_threads');

function runWorkerTask(input) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js');
    worker.postMessage(input);

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

runWorkerTask(5)
  .then(result => console.log(`Result from worker: ${result}`))
  .catch(err => console.error(err));
