import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import session from 'koa-session';
import helmet from 'koa-helmet';
import logger from 'koa-logger';
import { router } from './src/router';

const app = new Koa();
app.use(helmet());

const port = process.env.PORT || 8080;

// for the purpose of key rotation.
app.keys = ['some secret hurr'];

// session默认三小时
const session_config = {
  key: 'koa-boilerplate:sess',
  // 3h
  maxAge: 3 * 3600 * 1000,
  /** (boolean) can overwrite or not (default true) */
  overwrite: true,
  /** (boolean) httpOnly or not (default true) */
  httpOnly: true,
  /** (boolean) signed or not (default true) */
  signed: true,
  /**
   * (boolean)
   * Force a session identifier cookie to be set on every response.
   * The expiration is reset to the original maxAge,
   * resetting the expiration countdown. default is false
   * @type {Boolean}
   */
  rolling: false,
};

app.proxy = true;
app.use(session(session_config, app));

app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

app.use(bodyParser());
app.use(router.middleware());
app.use(logger());

app.listen(port, () => {
  console.log(`server started: localhost:${port}`);
});
