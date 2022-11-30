import _ from 'lodash';

// Clone

const baseConfig = {
  apiUrl: 'http://someapi.com',
  port: 4000,
};

function createdExtendedConfig(config) {
  const cloneConfig = _.clone(config);
  cloneConfig.host = 'http://google.com';
  return cloneConfig;
}

const extendedConfig = createdExtendedConfig(baseConfig);
console.log(baseConfig);
console.log(extendedConfig);

const a = { b: { c: 1 } };
const b = _.cloneDeep(a);
b.b.foo = 'bar';

console.log(a);
console.log(b);
