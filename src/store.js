import { createStore, bindActionCreators } from 'redux'

const Actions = {
  CHANGE_VAL: val => ({ type: 'CHANGE_VAL', val })
}

const rootReducer = (store = {}, action = { type: '', val: '' }) => {
  console.info('rootReducer', { action })
  switch (action.type) {
    case 'CHANGE_VAL': {
      return { val: action.val }
    }
    default: {
      return store
    }
  }
}


const storeConfigure = () => {
  return createStore(rootReducer)
}

export const store = storeConfigure()

const { dispatch } = store

export const actions = bindActionCreators(Actions, dispatch)