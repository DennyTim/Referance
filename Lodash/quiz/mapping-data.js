import _ from 'lodash';

const locationConfig = [
  {
    locationKey: [32, 22, 11],
    autoassign: 1,
  },
  {
    locationKey: [41, 42],
    autoassign: 1,
  },
];

const bulkConfig = [
  {
    dataValues: {
      configKey: 100,
    },
  },
  {
    dataValues: {
      configKey: 200,
    },
  },
];

//solve
const newArray = _.map(locationConfig, function (locEl, index) {
  return _.map(locEl.locationKey, function (locationKey) {
    return {
      locationKey: locationKey,
      configKey: bulkConfig[index].dataValues.configKey,
      autoassign: locEl.autoassign,
    };
  });
});

console.log('newArray', _.flatten(newArray));
