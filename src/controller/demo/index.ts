import Koa from 'koa';
// import { sequelize } from '../../database';

async function sleep(key, delay) {
  return new Promise(function(resolve, reject) {
    const startTime = new Date().getTime();
    try {
      setTimeout(function() {
        const passTime = `${new Date().getTime() - startTime}/ms`;
        console.log(passTime);
        resolve({
          key: key,
          delay: delay,
        });
      }, delay);
    } catch (err) {
      reject('error');
    }
  });
}

/**
 *
 * @param ctx
 * @param next
 */
const helloWorld = async (ctx: Koa.Context, next: Function) => {
  const dbResp: any[] = await getUserList();
  const driverInfo = dbResp.length ? dbResp[0] : {};
  ctx.body = {
    errmsg: 'success',
    data: driverInfo,
  };
  return next();
};

const parallel = async (ctx: Koa.Context, next: Function) => {
  let data;
  const startTime = new Date().getTime();
  try {
    data = await Promise.all([
      sleep('a', 1000),
      sleep('b', 1500),
      sleep('c', 2000),
      sleep('d', 2500),
    ]);
  } catch (err) {
    console.log(err);
  }
  const json = {
    data,
    title: 'parallel async',
    usedTime: `${new Date().getTime() - startTime}/ms`,
  };
  ctx.body = JSON.stringify(json);
  return next();
};

/**
 *
 */
const getUserList = async () => {
  let res;
  try {
    // console.time('type=query||sql-query');
    // res = await sequelize.query(`SELECT * FROM user_list limit 10`, {
    //   type: sequelize.QueryTypes.SELECT,
    // });
    // console.timeEnd('type=query||sql-query');
    return res;
  } catch (e) {
    console.log('query db error', e);
  }
};

export { helloWorld, parallel };
