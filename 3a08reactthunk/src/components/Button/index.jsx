import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";

const Button = ({comments}) => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(addCommentThunk(comments))

  return (
    <button onClick={() => handleClick()}>New comment
    </button>
  )
}
export default Button
