import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurentUser = createSelector (
    [selectUser],
    (user) => user.currentUser
);

