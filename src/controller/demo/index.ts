import Koa from 'koa';
import { sequelize } from '../../database';

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

/**
 *
 */
const getUserList = async () => {
  let res;
  try {
    console.time('type=query||sql-query');
    res = await sequelize.query(
      `SELECT * FROM user_list limit 10`,
      { type: sequelize.QueryTypes.SELECT },
    );
    console.timeEnd('type=query||sql-query');
    return res;
  } catch (e) {
    console.log('query db error', e);
  }
};


export { helloWorld };
