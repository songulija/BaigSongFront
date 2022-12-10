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
        userId: 0,
        propertyId: 0,
        text: '',
        date: moment().format('YYYY/MM/DD')
    })

    const usersListReducer = useSelector((state) => state.usersListReducer);
    const propertiesReducer = useSelector((state) => state.propertiesReducer)
    const { users } = usersListReducer
    const { properties } = propertiesReducer

    const onCancel = () => {
        props.onClose();
    }
    const saveChanges = () => {
        const postObj = JSON.parse(JSON.stringify(comment));
        props.save(postObj);
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
    }, [props])
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
                    <Button key="customCancel" onClick={onCancel}>Cancel</Button>
                    <Button key="customSubmit" form="myForm" onClick={saveChanges} htmlType="submit" type={'primary'}>Add</Button>
                </div>
            }
        >
            <Form onSubmit={saveChanges}>
                <h1 className="h3 mb-3 fw-normal">Comment creation</h1>
                <p style={{ marginBottom: '5px' }}>User</p>
                <Select
                    showSearch
                    style={{ width: '320px' }}
                    placeholder="Select User"
                    optionFilterProp="children"
                    onChange={(e) => onDataChange(e, "userId")}
                >
                    {users.map((element) => {
                        return (<Option key={element.id} value={element.id}>{element.email}</Option>)
                    })}
                </Select>

                <p style={{ marginBottom: '5px' }}>Property</p>
                <Select
                    showSearch
                    style={{ width: '320px' }}
                    placeholder="Select Property"
                    optionFilterProp="children"
                    onChange={(e) => onDataChange(e, "propertyId")}
                >
                    {properties.map((element) => {
                        return (<Option key={element.id} value={element.id}>{element.title}</Option>)
                    })}
                </Select>

                <Form.Group controlId='text'>
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter comment'
                        value={comment.text}
                        onChange={(e) => onDataChange(e.target.value, "text")}
                    >
                    </Form.Control>
                </Form.Group>
            </Form>
        </Modal>
    )
}

export default AddCommentComponent
