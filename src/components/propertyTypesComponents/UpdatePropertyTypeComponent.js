import { useState, useEffect } from 'react';
import { Form, Button, Input, Modal, Space, Col, Row, Select } from 'antd';
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
function UpdatePropertyTypeComponent(props) {
    const [propertyType, setPropertyType] = useState({});
    const onBack = () => {
        props.onClose();
    }
    const onCancel = () => {
        props.onClose();
    }
    const onDataChange = (value, inputName) => {
        setPropertyType(prevState => ({
            ...prevState,
            [inputName]: value
        }))
    }
    const saveChanges = () => {
        const propertyTypeClone = JSON.parse(JSON.stringify(propertyType));
        const reducerObj = propertyTypeClone;
        const postObj = reducerObj;
        props.save(postObj, reducerObj);
    }
    useEffect(() => {
        setPropertyType(props.record)
    }, [props])

    return (
        <>
            <Modal
                onCancel={onCancel}
                saveChanges={saveChanges}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: false }}
                title={<Space><ArrowLeftOutlined onClick={onBack} />Update Property Type</Space>}
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
                            <p style={{ ...textStyle }}>Title</p>
                            <Input style={{ width: '100%' }} placeholder="Enter title" defaultValue={propertyType.title} value={propertyType.title} onChange={(e) => onDataChange(e.target.value, "title")} />
                            <p style={{ marginBottom: '5px' }}>Country</p>
                            <Input style={{ width: '100%' }} placeholder="Enter photo url" defaultValue={propertyType.photo} value={propertyType.photo} onChange={(e) => onDataChange(e.target.value, "photo")} />
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    )
}

export default UpdatePropertyTypeComponent;