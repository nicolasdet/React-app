export const TESTACTION  		= 'On fait un test';
export const UPDATEEMAILACTION  = ' modification du champ email'; 

export const customTestAction = bool => ({
  type: TESTACTION,
  payload: bool
});

export const updateEmail = emailText => ({
  type: UPDATEEMAILACTION,
  payload: emailText
});