const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const [, script] = html.match(/<script>([\s\S]+?)<\/script>/);
const cases = [
  ['2024-04-25T08:29:00-04:00', false, 'Unpublished', 'No estimate'],
  ['2024-04-25T08:30:00-04:00', false, '1.6%', 'Signal on.'],
  ['2024-05-30T08:30:00-04:00', false, '1.3%', 'Signal off.'],
  ['2024-06-27T08:30:00-04:00', false, '1.4%', 'Signal off.'],
  ['2024-04-25T08:30:00-04:00', true, 'Unknown', 'Release evidence is missing.'],
];
function element() {
  return {addEventListener() {}, replaceChildren() {}, append() {}};
}
const nodes = Object.fromEntries(['when', 'missing', 'number', 'result', 'evidence'].map(id => [id, element()]));
const context = {document: {getElementById: id => nodes[id], createElement: element}};
vm.runInNewContext(script, context);
for (const [time, missing, value, signal] of cases) {
  nodes.when.value = time;
  nodes.missing.checked = missing;
  context.render();
  assert.equal(nodes.number.textContent, value);
  assert.ok(nodes.result.textContent.startsWith(signal));
  console.log(time, missing ? 'no release evidence' : 'archived release', value, signal);
}
