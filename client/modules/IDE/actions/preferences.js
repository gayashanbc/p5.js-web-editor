import axios from 'axios';
import * as ActionTypes from '../../../constants';

const __process = (typeof global !== 'undefined' ? global : window).process;
const ROOT_URL = __process.env.API_URL;

function updatePreferences(formParams, dispatch) {
  axios.put(`${ROOT_URL}/preferences`, formParams, { withCredentials: true })
    .then(() => {
    })
    .catch(response => dispatch({
      type: ActionTypes.ERROR,
      error: response.data
    }));
}

export function setFontSize(value) {
  return (dispatch, getState) => { // eslint-disable-line
    dispatch({
      type: ActionTypes.SET_FONT_SIZE,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          fontSize: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setIndentation(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_INDENTATION,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          indentationAmount: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function indentWithTab() {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.INDENT_WITH_TAB
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          isTabIndent: true
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function indentWithSpace() {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.INDENT_WITH_SPACE
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          isTabIndent: false
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setAutosave(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_AUTOSAVE,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          autosave: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setLintWarning(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_LINT_WARNING,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          lintWarning: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setTextOutput(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_TEXT_OUTPUT,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          textOutput: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setGridOutput(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_GRID_OUTPUT,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          gridOutput: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setSoundOutput(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_SOUND_OUTPUT,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          soundOutput: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setTheme(value) {
  // return {
  //   type: ActionTypes.SET_THEME,
  //   value
  // };
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_THEME,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          theme: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setAutorefresh(value) {
  // return {
  //   type: ActionTypes.SET_AUTOREFRESH,
  //   value
  // };
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_AUTOREFRESH,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          autorefresh: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setAllAccessibleOutput(value) {
  return (dispatch) => {
    dispatch(setTextOutput(value));
    dispatch(setGridOutput(value));
    dispatch(setSoundOutput(value));
  };
}

