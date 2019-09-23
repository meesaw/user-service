// import * as reqTracer from 'cls-rtracer';
// import * as compression from 'compression';
import { json, RequestHandler, urlencoded } from 'express';
//import * as helmet from 'helmet';
// import * as morgan from 'morgan';

//const requestLogFormat = ':remote-addr [:method]:url - [:req[authorization]]';
//const responseLogFormat = ':remote-addr [:method]:url :status :res[content-length] - :response-time[0]ms';

//const morganLog = (isRequestLogger: boolean) =>
  //  morgan.default(isRequestLogger ? requestLogFormat : responseLogFormat, {
    //    immediate: isRequestLogger,
      //  stream: { write: msg => console.log(isRequestLogger ? 'IN:' : 'OUT:', msg.trim()) },
    //});

export const commonMiddleWares = (): RequestHandler[] => [
   // compression.default(),
    // helmet.default(),
    json(),
    urlencoded({ extended: true }),
    //reqTracer.expressMiddleware({ useHeader: true }),
    // request logger
    //morganLog(true),
    // response logger
    //morganLog(false),
];
