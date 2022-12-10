import { useState, useEffect } from 'react';
import { Form, Button, Input, Modal, Space, Col, Row, Select } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons'
import { getUsers } from '../../redux/actions/userListActions';
import { getProperties } from '../../redux/actions/propertiesActions';
import { useDispatch, useSelector } from 'react-redux';


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
function UpdateCommentComponent(props) {
    const dispatch = useDispatch();
    const [comment, setComment] = useState({});

    const usersListReducer = useSelector((state) => state.usersListReducer);
    const propertiesReducer = useSelector((state) => state.propertiesReducer)
    const { users } = usersListReducer
    const { properties } = propertiesReducer

    const onBack = () => {
        props.onClose();
    }
    const onCancel = () => {
        props.onClose();
    }
    const onDataChange = (value, inputName) => {
        if(inputName === 'userId'){
            const user = users.find(x => x.id === value)
            setComment(prevState => ({
                ...prevState,
                [inputName]: value,
                user: {
                    ...user
                }
            }))
        } else if(inputName === 'propertyId'){
            const property = properties.find(x => x.id === value)
            setComment(prevState => ({
                ...prevState,
                [inputName]: value,
                property: {
                    ...property
                }
            }))
        }else{
            setComment(prevState => ({
                ...prevState,
                [inputName]: value
            }))
        }
    }
    const onEmailChange = (value, inputName) => {
        
    }
    const saveChanges = () => {
        const commentClone = JSON.parse(JSON.stringify(comment));
        const reducerObj = commentClone;
        const postObj = reducerObj;
        props.save(postObj, reducerObj);
    }
    useEffect(() => {
        dispatch(getUsers())
        dispatch(getProperties())
        setComment(props.record)
    }, [props])
    return (
        <>
            <Modal
                onCancel={onCancel}
                saveChanges={saveChanges}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: false }}
                title={<Space><ArrowLeftOutlined onClick={onBack} />Update Comment</Space>}
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
                            <p style={{ marginBottom: '5px' }}>User</p>
                            <Select
                                showSearch
                                style={{ width: '320px' }}
                                defaultValue={comment.userId}
                                value={comment.userId}
                                placeholder="Select User"
                                optionFilterProp="children"
                                onChange={(e) => onDataChange(e, "userId")}
                            >
                                {users.map((element) => {
                                    return (<Option key={element.email} value={element.id}>{element.email}</Option>)
                                })}
                            </Select>

                            <p style={{ marginBottom: '5px' }}>Property</p>
                            <Select
                                showSearch
                                style={{ width: '320px' }}
                                defaultValue={comment.propertyId}
                                value={comment.propertyId}
                                placeholder="Select Property"
                                optionFilterProp="children"
                                onChange={(e) => onDataChange(e, "propertyId")}
                            >
                                {properties.map((element) => {
                                    return (<Option key={element.id} value={element.id}>{element.title}</Option>)
                                })}
                            </Select>
                            <p style={{ ...textStyle }}>Text</p>
                            <Input style={{ width: '100%' }} placeholder="Enter comment" defaultValue={comment.text} value={comment.text} onChange={(e) => onDataChange(e.target.value, "text")} />
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    )
}

export default UpdateCommentComponent;