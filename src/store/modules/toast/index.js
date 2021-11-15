export default {
  namespaced: true,
  state: {
    toasts: [{}, {}, {}, {}],
  },
  mutations: {
    // toast 추가 해준다.
    ADD_TOAST(state, payload) {
      state.toasts.push(payload);
    },
    // toast 삭제 해준다.
    REMOVE_TOAST(state) {
      state.toasts.shift();
    },
  },
  actions: {
    triggerToast({ commit }, message, type = "success") {
      commit("ADD_TOAST", {
        message,
        type,
        id: Date.now(),
      });

      setTimeout(() => {
        commit("REMOVE_TOAST");
      }, 10000);
    },
  },
  getters: {
    toastMessageAdd(state) {
      return state.toastMessage + "!!!";
    },
  },
};
