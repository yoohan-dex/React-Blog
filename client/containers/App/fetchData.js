import c from '../../../server/config';
import _ from 'lodash';
import Cosmic from 'cosmicjs';
const config = c.default;

const getTitle = () =>
  Cosmic.getObjects(config, (err, response) => {
    // const objects = respones.objects;
    
    const text = response.object.text;
    const metafields = text.metafields;
    const key = _.findKey(metafields, { key: 'menu_title' });
    return metafields[key].value;
  });


export { getTitle };
