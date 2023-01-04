import { useState, useEffect } from 'react';
// import { Form, Button, Input, Modal, Space, Col, Row, Select, Image } from 'antd';
import { Space, Select, Modal, Image } from 'antd';
import { Form, Button } from 'react-bootstrap'
import { ArrowLeftOutlined } from '@ant-design/icons'

const { Option } = Select;
const textStyle = {
    fontSize: '18px',
    color: '#8C8C8C',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '22px',
    marginRight: '40px',
    marginBottom: '4px',
    marginTop: '10px',
    paddingBottom: '5px'
}
function UpdateProfileComponent(props) {
    const [user, setUser] = useState({});

    const onBack = () => {
        props.onClose();
    }
    const onCancel = () => {
        props.onClose();
    }
    const onDataChange = (value, inputName) => {
        setUser(prevState => ({
            ...prevState,
            [inputName]: value
        }))
    }
    const saveChanges = (event) => {
        event.preventDefault();
        const postObj = JSON.parse(JSON.stringify(user));
        console.log(postObj)
        props.save(postObj, postObj);
    }
    useEffect(() => {
        setUser(props.record)
    }, [props])

    return (
        <>
            <Modal
                onCancel={onCancel}
                saveChanges={saveChanges}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: false }}
                title={<Space><ArrowLeftOutlined onClick={onBack} />Update user</Space>}
                open={props.visible}
                width={1000}
                footer={
                    <div>
                        {/* <Button key="customCancel" onClick={onCancel}>Atšaukti</Button>
                        <Button key="customSubmit" form="myForm" onClick={saveChanges} htmlType="submit" type={'submit'}>Atnaujinti</Button> */}
                    </div>
                }
            >
                <Form layout="vertical" id="myForm" name="myForm" onSubmit={saveChanges}>
                    <Form.Group controlId='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            placeholder='Enter email'
                            defaultValue={user.email}
                            value={user.email}
                            onChange={(e) => onDataChange(e.target.value, "email")}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='firstName'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter first name'
                            defaultValue={user.firstName}
                            value={user.firstName}
                            onChange={(e) => onDataChange(e.target.value, "firstName")}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='lastName'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter last name'
                            defaultValue={user.lastName}
                            value={user.lastName}
                            onChange={(e) => onDataChange(e.target.value, "lastName")}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='phoneNumber'>
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter phone number'
                            defaultValue={user.phoneNumber}
                            value={user.phoneNumber}
                            onChange={(e) => onDataChange(e.target.value, "phoneNumber")}
                        >
                        </Form.Control>
                    </Form.Group>
                   
                    <Button type="submit">Submit</Button>
                    <Button key="customCancel" onClick={onCancel}>Cancel</Button>
                </Form>
            </Modal>
        </>
    )
}

export default UpdateProfileComponent;