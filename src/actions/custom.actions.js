export const TESTACTION = 'On fait un test';

export const customTestAction = bool => ({
  type: TESTACTION,
  payload: bool
});
