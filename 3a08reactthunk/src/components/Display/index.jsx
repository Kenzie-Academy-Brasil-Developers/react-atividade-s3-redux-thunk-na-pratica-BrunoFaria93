import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../Button";

const Display = () => {

  const [comments, setComments] = useState('');
  const newComment = useSelector((state) => state.user.comments)

  return (
    <div className="container">
           <div className='comment'>
              {newComment.map((item) => <span>{item}</span>)}
          </div>

           <div>
             <input
                       value={comments}
                       onChange={(e) => setComments(e.target.value)}
                     />
                     <Button comments={comments}/>
           </div>
        </div>
  );
};

export default Display;
