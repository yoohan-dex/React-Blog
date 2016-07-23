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
