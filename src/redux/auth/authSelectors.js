export const isAuthorized = state => !!state.auth.isAthenticated;
export const getUserName = state => state.auth.user.name;
export const getToken = state => state.auth.token;
export const getIsGetCurrentUser = state => state.auth.isGetCurrentUser;
