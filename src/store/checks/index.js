import {
  INSERT_CHECK,
} from '../mutation-types';

// initial state
const initialState = {
  checks: [],
};

// getters
const getters = {
  checks: state => state.checks,
};

// actions
export const insertCheck = ({ commit }) => Promise.resove(commit);
const actions = {
  insertCheck,
};

// mutations
const mutations = {
  [INSERT_CHECK](state, check) {
      state.checks.push(check); // eslint-disable-line
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
