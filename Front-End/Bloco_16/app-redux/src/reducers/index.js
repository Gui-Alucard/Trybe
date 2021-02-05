const INITIAL_STATE = [];

/*
É uma função JavaScript que recebe o estado atual (current state)
e a ação corrente (current action) e retorna um novo estado (new state).
É responsabilidade dessa função decidir o que acontecerá
com o estado dada uma ação(action).
*/

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value]; // não é .push, só acrecenta o value
    default:
      return state;
  }
}

export default listReducer;

/*
É um objeto JavaScript que representa alguma mudança/alteração
que precisa acontecer no State.
*/