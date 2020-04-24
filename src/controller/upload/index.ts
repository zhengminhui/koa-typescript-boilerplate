import Koa from 'koa';

const uploadFile = async (ctx: Koa.Context, next: Function) => {
  console.log('upload large files', ctx.request, ctx.req);
  // const file = ctx.request['files'].file;

  ctx.body = {
    data: {},
    errmsg: 'success',
  };
  return next();
};

export { uploadFile };
