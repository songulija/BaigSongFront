import React, { useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getUserTypes} from '../../redux/actions/userTypesActions';
import { Space, Select,Modal } from 'antd';
import {Form} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import {ArrowLeftOutlined} from '@ant-design/icons'


const {Option} = Select;

function AddUserComponent(props) {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        phoneNumber: '',
        email: '',
        password: '',
        typeId: 0
    });
    const userTypesReducer = useSelector((state) => state.userTypesReducer);

    const onCancel = () =>{
        props.onClose();
    }
    const saveChanges = () => {
        const postObj = JSON.parse(JSON.stringify(user));
        props.save(postObj);
    }

    const onDataChange = (value, inputName) => {
        setUser(prevState => ({
            ...prevState,
            [inputName]: value
        }))
    }
    useEffect(() => {
        dispatch(getUserTypes())
    },[props])
    return (
        <Modal
            onCancel={onCancel}
            saveChanges={saveChanges}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}
            title={<Space><ArrowLeftOutlined onClick={onCancel} />Add new user</Space>}
            open={props.visible}
            footer={
                <div>
                    <Button key="customCancel" onClick={onCancel}>Cancel</Button>
                    <Button key="customSubmit" form="myForm" onClick={saveChanges} htmlType="submit" type={'primary'}>Add</Button>
                </div>
            }
        >
            <Form onSubmit={saveChanges}>
                <h1 className="h3 mb-3 fw-normal">User Registration</h1>
                <Form.Group controlId='text'>
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                        type='phone'
                        placeholder='Enter phone number'
                        value={user.phoneNumber}
                        onChange={(e) => onDataChange(e.target.value, "phoneNumber")}
                    >

                    </Form.Control>
                </Form.Group>

                <p style={{ marginBottom: '5px' }}>User Type</p>
                <Select
                    showSearch
                    style={{ width: '320px' }}
                    placeholder="Select User Type"
                    optionFilterProp="children"
                    onChange={(e) => onDataChange(e, "typeId")}
                >
                    {userTypesReducer.userTypes.map((element) => {
                        return (<Option key={element.id} value={element.id}>{element.title}</Option>)
                    })}
                </Select>

                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={user.email}
                        onChange={(e) => onDataChange(e.target.value, "email")}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={user.password}
                        onChange={(e) => onDataChange(e.target.value, "password")}
                    >
                    </Form.Control>
                </Form.Group>
            </Form>
        </Modal>
    )
}

export default AddUserComponent
