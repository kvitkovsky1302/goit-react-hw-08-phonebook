export const isAuthorized = state => !!state.auth.isAthenticated;
export const getUserName = state => state.auth.user.name;
