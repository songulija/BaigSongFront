import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Input, Modal, Space, Col, Row, Select } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons'
import {getUserTypes} from '../../redux/actions/userTypesActions';

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
function UpdateUserComponent(props) {
    const dispatch = useDispatch();
    const [user, setUser] = useState({});

    const userTypesReducer = useSelector((state) => state.userTypesReducer);

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
    const saveChanges = () => {
        const userClone = JSON.parse(JSON.stringify(user));
        const reducerObj = userClone;
        const postObj = reducerObj;
        props.save(postObj, reducerObj);
    }
    useEffect(() => {
        setUser(props.record)
        dispatch(getUserTypes())
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
                        <Button key="customCancel" onClick={onCancel}>Cancel</Button>
                        <Button key="customSubmit" form="myForm" onClick={saveChanges} htmlType="submit" type={'primary'}>Update</Button>
                    </div>
                }
            >
                <Form layout="vertical" id="myForm" name="myForm">
                    <Row>
                        <Col span={12} style={{ paddingLeft: '7px', paddingRight: '7px' }}>
                            <p style={{ ...textStyle }}>Phone Number</p>
                            <Input style={{ width: '100%' }} placeholder="Enter phone number" defaultValue={user.phoneNumber} value={user.phoneNumber} onChange={(e) => onDataChange(e.target.value, "phoneNumber")} />
                            <p style={{ ...textStyle }}>Email</p>
                            <Input style={{ width: '100%' }} placeholder="Enter email" defaultValue={user.email} value={user.email} onChange={(e) => onDataChange(e.target.value, "email")} />
                            <p style={{ ...textStyle }}>User Type</p>
                            <Select
                                showSearch
                                style={{ width: '320px' }}
                                defaultValue={user.typeId}
                                value={user.typeId}
                                placeholder="Select User Type"
                                optionFilterProp="children"
                                onChange={(e) => onDataChange(e, "typeId")}
                            >
                                {userTypesReducer.userTypes.map((element) => {
                                    return (<Option key={element.id} value={element.id}>{element.title}</Option>)
                                })}
                            </Select>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    )
}

export default UpdateUserComponent;