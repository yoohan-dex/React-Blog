import { polyfill } from 'es6-promise';
import fetch from 'isomorphic-fetch';
polyfill();
import _ from 'lodash';

const apiVersion = 'v1';
const apiUrl = `http://api.cosmicjs.com${apiVersion}`;
const endpointCreator = (type = '', config) =>
  `${apiUrl}/${config.bucket.slug}/${type}?read_key=${config.bucket.read_key}`;
const errMessage = 'There was an error with this request.';
function getBucket(config, cb) {
  fetch(endpointCreator())
    .then(response => {
      if (response.status >= 400) {
        const err = {
          message: errMessage,
        };
        return cb(err, false);
      }
      return response.json();
    }).then(response =>
      cb(false, response));
}

function getObjects(config, cb) {
  fetch(endpointCreator('objects'))
    .then(response => {
      if (response.status >= 400) {
        const err = {
          message: errMessage,
        };
        return response.json();
      }
    }).then(response => {
      const cosmic = {};
      const objects = response.objects;
      cosmic.objects = {};
      cosmic.objects.all = objects;
      cosmic.objects.type = _.groupBy(objects, 'type_slug');
      cosmic.objects = _.map(objects, keyMetafields);
      cosmic.objects = _.indexBy(cosmic.object, 'slug');
      return cb(false, cosmic);
    });
}

function getObject(config, object, cb) {
  let endpoint;
  if (object._id) {
    endpoint = endpointCreator('object-by-id');
  } else {
    endpoint = endpointCreator('object');
  }
  fetch(endpoint)
    .then(response => {
      if (response.status >= 400) {
        const err = {
          message: errMessage,
        };
        return cb(err, false);
      }
      return response.json();
    });
}

function keyMetafields(object) {
  const metafields = object.metafields;
  if (metafields) {
    object.metafields = _.indexBy(metafields, 'key');
  }
  return object;
}

export {
  keyMetafields,
  getBucket,
  getObjects,
  getObject,
};
