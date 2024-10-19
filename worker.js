// worker.js
const { parentPort } = require('worker_threads');

parentPort.on('message', (data) => {
  let result = performComplexComputation(data);
  parentPort.postMessage(result);
});

function performComplexComputation(data) {
  // Perform CPU-bound task here
  return data * 2;
}
