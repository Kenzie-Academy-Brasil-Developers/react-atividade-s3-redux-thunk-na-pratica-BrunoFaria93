import { addComment } from "./actions";

export const addCommentThunk = (commentsNew) => {
    return (dispatch, getState) => {

      // aqui estamos pegando o state user 
        const { user } = getState();
    
      // aqui adicionamos o comentário que entrou como parâmetro lá em cima
        const updatedUser = { ...user, comments: [...user.comments, commentsNew] }

    dispatch(addComment(updatedUser));
  };
};
