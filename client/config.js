const apiVersion = 'v1';
const apiUrl = `http://api.cosmicjs.com/${apiVersion}`;
export const endpointCreator = (type = '', config) =>
  `${apiUrl}/${config.bucket.slug}/${type}?read_key=${config.bucket.read_key}`;
// const errMessage = 'There was an error with this request.';
export default {
  site: {
    title: 'Aooren',
  },
  bucket: {
    slug: process.env.COSMIC_BUCKET || 'aooren',
    media_url: 'https://cosmicjs.com/uploads',
    read_key: process.env.COSMIC_READ_KEY || '',
    write_key: process.env.COSMIC_WRITE_KEY || '',
  },
};
