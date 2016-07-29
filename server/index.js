import express from 'express';
import path from 'path';
import ngrok from 'ngrok';
import logger from './logger';
import frontendMiddles from './middlewares/frontend';

const isDev = process.env.NODE_ENV !== 'production';
const useTunnel = isDev && process.env.ENABLE_TUNNEL;
const app = express();


const webpackConfig = isDev
  ? require('../webpack.config.dev').default
  : require('../webpack.prod.babel').default;
app.use(frontendMiddles(webpackConfig));


// app.use(express.static(path.resolve(__dirname, '../client/static')));
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'));
// });
const port = process.env.PORT || 2333;

// app.listen(port);
app.listen(port, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  if (isDev && useTunnel) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, url);
      return 0;
    });
  } else {
    logger.appStarted(port);
    return 0;
  }

  return 0;
});
