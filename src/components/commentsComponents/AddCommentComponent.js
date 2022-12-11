import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Space, Select, Modal } from 'antd';
import { Form } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import { ArrowLeftOutlined } from '@ant-design/icons'
import moment from 'moment';
import { getUsers } from '../../redux/actions/userListActions';
import { getProperties } from '../../redux/actions/propertiesActions';

const { Option } = Select;

function AddCommentComponent(props) {
    const dispatch = useDispatch();
    const [comment, setComment] = useState({
        userId: 1,
        propertyId: 1,
        text: '',
        date: moment().format('YYYY/MM/DD')
    })

    const usersListReducer = useSelector((state) => state.usersListReducer);
    const userInfoReducer = useSelector((state) => state.userInfoReducer);
    const propertiesReducer = useSelector((state) => state.propertiesReducer)
    const { users } = usersListReducer
    const { role } = userInfoReducer;
    const { properties } = propertiesReducer

    const onCancel = () => {
        props.onClose();
    }
    const saveChanges = (event) => {
        event.preventDefault()
        const postObj = JSON.parse(JSON.stringify(comment));
        if (role !== 'ADMINISTRATOR')
            postObj.userId = 0
        props.save(postObj);
        // console.log(postObj)
    }

    const onDataChange = (value, inputName) => {
        setComment(prevState => ({
            ...prevState,
            [inputName]: value
        }))
    }

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getProperties())
        if (props.propertyId) {
            setComment(prevState => ({
                ...prevState,
                propertyId: props.propertyId
            }))
        }
    }, [])
    return (
        <Modal
            onCancel={onCancel}
            saveChanges={saveChanges}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}
            title={<Space><ArrowLeftOutlined onClick={onCancel} />Add comment</Space>}
            open={props.visible}
            footer={
                <div>
                    {/* <Button key="customCancel" onClick={onCancel}>Cancel</Button>
                    <Button key="customSubmit" form="myForm" onClick={saveChanges} htmlType="submit" type={'primary'}>Add</Button> */}
                </div>
            }
        >
            <Form onSubmit={saveChanges}>
                <h1 className="h3 mb-3 fw-normal">Comment creation</h1>
                {role === 'ADMINISTRATOR' ?
                    <Form.Group className="mb-3">
                        <Form.Label>User</Form.Label>
                        <Form.Select
                            required
                            style={{ width: '320px' }}
                            placeholder="Select User"
                            defaultValue={comment.userId}
                            value={comment.userId}
                            onChange={(e) => onDataChange(e.target.value, "userId")}
                        >
                            {users.map((element) => {
                                return (<option key={element.id} value={element.id}>{element.email}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>
                    :
                    <></>}
                {props.propertyId ?
                    <></>
                    :
                    <Form.Group className="mb-3">
                        <Form.Label>Property</Form.Label>
                        <Form.Select
                            required
                            style={{ width: '320px' }}
                            placeholder="Select Property"
                            defaultValue={comment.propertyId}
                            value={comment.propertyId}
                            onChange={(e) => onDataChange(e.target.value, "propertyId")}
                        >
                            {properties.map((element) => {
                                return (<option key={element.id} value={element.id}>{element.title}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>}


                <Form.Group controlId='text'>
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter comment'
                        value={comment.text}
                        onChange={(e) => onDataChange(e.target.value, "text")}
                    >
                    </Form.Control>
                </Form.Group>
                <Button type="submit">Submit</Button>
                <Button key="customCancel" onClick={onCancel}>Cancel</Button>
            </Form>
        </Modal>
    )
}

export default AddCommentComponent
