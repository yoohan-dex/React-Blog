import _ from 'lodash';
const keyMetafields = object => {
  const { metafields } = object;
  if (metafields) {
    object.metafield = _.keyBy(metafields, 'key');
  }
  return object;
};

const parseData = response => {
  const data = {};
  const { objects } = response;
  data.objects = {};
  data.objects.all = objects;
  data.objects.type = _.groupBy(objects, 'type_slug');
  data.object = _.map(objects, keyMetafields); // ==> groupby metafield key
  data.object = _.keyBy(data.object, 'slug'); //  ==> groupby title
  return data;
};
export {
  keyMetafields,
};
export default parseData;

