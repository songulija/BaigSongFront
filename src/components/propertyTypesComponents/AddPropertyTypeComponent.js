import { useState,useEffect } from 'react';
import { Space, Select,Modal } from 'antd';
import {Form} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import {ArrowLeftOutlined} from '@ant-design/icons'
import moment from 'moment';

const {Option} = Select;

function AddCommentTypeComponent(props) {
    const [propertyType, setPropertyType] = useState({
        title: '',
        date: moment().format('YYYY/MM/DD'),
        photo: ''
    });
    
    const onCancel = () =>{
        props.onClose();
    }
    const saveChanges = () => {
        const postObj = JSON.parse(JSON.stringify(propertyType));
        props.save(postObj);
    }

    const onDataChange = (value, inputName) => {
        setPropertyType(prevState => ({
            ...prevState,
            [inputName]: value
        }))
    }
    return (
        <Modal
            onCancel={onCancel}
            saveChanges={saveChanges}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}
            title={<Space><ArrowLeftOutlined onClick={onCancel} />Add property type</Space>}
            open={props.visible}
            footer={
                <div>
                    <Button key="customCancel" onClick={onCancel}>Cancel</Button>
                    <Button key="customSubmit" form="myForm" onClick={saveChanges} htmlType="submit" type={'primary'}>Add</Button>
                </div>
            }
        >
            <Form onSubmit={saveChanges}>
                <h1 className="h3 mb-3 fw-normal">Property type creation</h1>
                <Form.Group controlId='text'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter property type'
                        value={propertyType.title}
                        onChange={(e) => onDataChange(e.target.value, "title")}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='text'>
                    <Form.Label>Photo</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter photo'
                        value={propertyType.photo}
                        onChange={(e) => onDataChange(e.target.value, "photo")}
                    >
                    </Form.Control>
                </Form.Group>
            </Form>
        </Modal>
    )
}

export default AddCommentTypeComponent
