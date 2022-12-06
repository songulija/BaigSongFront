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
function UpdateCountryComponent(props) {
    const [country, setCountry] = useState({});

    const onBack = () => {
        props.onClose();
    }
    const onCancel = () => {
        props.onClose();
    }
    const onDataChange = (value, inputName) => {
        setCountry(prevState => ({
            ...prevState,
            [inputName]: value
        }))
    }
    const saveChanges = () => {
        const countryClone = JSON.parse(JSON.stringify(country));
        const reducerObj = countryClone;
        const postObj = reducerObj;
        props.save(postObj, reducerObj);
    }
    useEffect(() => {
        setCountry(props.record)
    }, [props])

    return (
        <>
            <Modal
                onCancel={onCancel}
                saveChanges={saveChanges}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: false }}
                title={<Space><ArrowLeftOutlined onClick={onBack} />Update country</Space>}
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
                            <Input style={{ width: '100%' }} placeholder="Enter country title" defaultValue={country.title} value={country.title} onChange={(e) => onDataChange(e.target.value, "title")} />
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    )
}

export default UpdateCountryComponent;