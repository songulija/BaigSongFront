import { useState, useEffect } from 'react';
import { Form, Button, Input, Modal, Space, Col, Row, Select } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons'
import {useDispatch,useSelector} from 'react-redux';
import {getCountries} from '../../redux/actions/countriesActions';

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
function UpdateCityComponent(props) {
    const dispatch = useDispatch()
    const [city, setCity] = useState({});
    const countriesListReducer = useSelector((state) => state.countriesListReducer);

    const onBack = () => {
        props.onClose();
    }
    const onCancel = () => {
        props.onClose();
    }
    const onDataChange = (value, inputName) => {
        setCity(prevState => ({
            ...prevState,
            [inputName]: value
        }))
    }
    const saveChanges = () => {
        const cityClone = JSON.parse(JSON.stringify(city));
        const reducerObj = cityClone;
        const postObj = reducerObj;
        props.save(postObj, reducerObj);
    }
    useEffect(() => {
        dispatch(getCountries())
        setCity(props.record)
    }, [props])

    return (
        <>
            <Modal
                onCancel={onCancel}
                saveChanges={saveChanges}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: false }}
                title={<Space><ArrowLeftOutlined onClick={onBack} />Update city</Space>}
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
                            <Input style={{ width: '100%' }} placeholder="Enter city title" defaultValue={city.title} value={city.title} onChange={(e) => onDataChange(e.target.value, "title")} />
                            <p style={{ marginBottom: '5px' }}>Country</p>
                            <Select
                                showSearch
                                style={{ width: '320px' }}
                                defaultValue={city.countryId}
                                value={city.countryId}
                                placeholder="Select User Type"
                                optionFilterProp="children"
                                onChange={(e) => onDataChange(e, "typeId")}
                            >
                                {countriesListReducer.countries.map((element) => {
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

export default UpdateCityComponent;