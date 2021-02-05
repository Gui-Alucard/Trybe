export const FORM_RESULT = 'FORM_RESULT';

export const actionCreator = (forms) => ({
  type: FORM_RESULT,
  forms,
});