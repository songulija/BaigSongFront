import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'

import { Card } from 'react-bootstrap'

const CommentCardComponent = (props) => {
  const [comment, setComment] = useState({})
  // const usersReducer = useSelector((state) => state.usersReducer);
  // const { currentUser } = usersReducer;
  
  useEffect(() => {
    if (props.record)
      setComment(props.record)
  }, [props])

  return (
    <Card>
      <Card.Header as="h5">{moment(comment.date).format('YYYY/MM/DD')}</Card.Header>
      <Card.Body>
        <Card.Title>{comment.user? comment.user.email: ''}</Card.Title>
        <Card.Text>
          {comment.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CommentCardComponent;
