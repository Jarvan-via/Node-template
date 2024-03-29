import Redis from 'ioredis';
import axios from 'axios';

import config from './src/config/environment';
import env from './src/utils/env';
import { Service } from './src/types/common';
import logger from './src/utils/logger';

axios.defaults.timeout = 200000;

const servicesConf = config.SERVICE;

export default async function init() {
  // init service
  for (const key in servicesConf) {
    const conf = servicesConf[key as Service];
    env._serv[key as Service] = axios.create({ baseURL: conf.baseURL, headers: conf.headers });
  }

  env._redis = new Redis({ 
    host: config.REDIS_HOST, 
    port: config.REDIS_PORT, 
    reconnectOnError: function (e) {
      logger.error(e);
      return false;
    },
    retryStrategy: () => null,
  });
}