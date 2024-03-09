const promiseMiddleware = () => {
  return next => action => {
    const {promise, type, ...rest}: any = action;

    if (!promise) return next(action);

    const SUCCESS = type + '_SUCCESS';
    const REQUEST = type + 'REQUEST';
    const FAILURE = type + '_FAILURE';

    next({...rest, type: REQUEST});

    return promise
      .then((response: any) => {
        next({...rest, type: SUCCESS, response});
        return true;
      })
      .catch((error: any) => {
        next({...rest, type: FAILURE, error});
        return false;
      });
  };
};

export default promiseMiddleware;
