/* eslint-disable no-console */
// un middleware est une fonction triple flêchée (double closure)
// il va gérer les effets (listener, timer, appel API ...)
// La 1ère prend le store en param
// La 2e prend next en param
// La 3e prend l'action courante en param
// On utilise la technique du currying, une fonction par paramètre
const logger = (store) => (next) => (action) => {
  // Si il n'y a pas d'action
  if(!action.type) {
    // Je veux laisser passer l'action au prochain MW ou au reducer
    // On utilise la fonction next avec l'action en argument
    return next(action);
  }
  console.log('Type : ', action.type);
  console.log('Payload : ', action.payload);
  console.log('CurrentState : ', store.getState());

  next(action);
  console.log('Next state : ', store.getState());

};
  
  export default logger;