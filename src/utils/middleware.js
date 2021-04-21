const logger = store => {
    return next => {
      return action => {
        console.log('[Middleware] dispatching', action);
        const result = next(action);
        console.log('[Middleware] next state', store.getState())
        return result;
      }
    }
};

export default logger;
