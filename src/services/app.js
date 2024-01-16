import constants from "@/utils/constants";


export const checkTokenExist = () => !!localStorage.getItem(constants.token);
export const checkUserExist = () => !!localStorage.getItem(constants.user);

export const clearLocal = () => {
    localStorage.removeItem(constants.token);
    localStorage.removeItem(constants.user);
}

export const setLocalToken = (value) => localStorage.setItem(constants.token, value);

export const setLocalUser = (value) => localStorage.setItem(constants.user, JSON.stringify(value));


export const getLocalUser = () => {
    if (checkTokenExist()) {
        try {
            return JSON.parse(
                (localStorage.getItem(constants.user))
            );
        } catch (e) {
            localStorage.removeItem(constants.user);
            window.location.replace("/login");
        }
    }
    return null;
};

export const getLocalToken = () => {
    if (checkTokenExist()) {
        try {
            return (localStorage.getItem(constants.token))
        } catch (e) {
            localStorage.removeItem(constants.token);
            window.location.replace("/login");
        }
    }
    return "";
};

export const logger = (type, ...params) => {
    switch (type) {
      case appState().error:
        import.meta.env.NODE_ENV !== "production" && console.error(...params);
        break;
      default:
        import.meta.env.NODE_ENV !== "production" && console.log(...params);
    }
  };
  
  export const infoLogger = (...params) => logger(appState().info, params);
  export const errorLogger = (...params) => logger(appState().error, params);

  export const appState = () =>{
    return {
        idle: 'idle',
        success: 'success',
        error: 'error',
        error_404: 'error_404',
        loading: 'loading',
        loaded: 'loaded',
        error_input : 'error_input',
        loading_more: 'loading_more',
        info: 'info',
        warning: 'warning',
        data_refresh: 'data_refresh',
        retry: 'retry',
      }
  }