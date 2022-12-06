import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Space, Select,Modal } from 'antd';
import {Form} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import {ArrowLeftOutlined} from '@ant-design/icons'
import moment from 'moment';
import {getCountries} from '../../redux/actions/countriesActions';

const {Option} = Select;

function AddCityComponent(props) {
    const dispatch = useDispatch();
    const [city, setCity] = useState({
        title: '',
        date: moment().format('YYYY/MM/DD'),
        countryId: 0
    });
    const countriesListReducer = useSelector((state) => state.countriesListReducer);

    const onCancel = () =>{
        props.onClose();
    }
    const saveChanges = () => {
        const postObj = JSON.parse(JSON.stringify(city));
        props.save(postObj);
    }

    const onDataChange = (value, inputName) => {
        setCity(prevState => ({
            ...prevState,
            [inputName]: value
        }))
    }

    useEffect(() => {
        dispatch(getCountries())
    },[props])

    return (
        <Modal
            onCancel={onCancel}
            saveChanges={saveChanges}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}
            title={<Space><ArrowLeftOutlined onClick={onCancel} />Add new city</Space>}
            open={props.visible}
            footer={
                <div>
                    <Button key="customCancel" onClick={onCancel}>Cancel</Button>
                    <Button key="customSubmit" form="myForm" onClick={saveChanges} htmlType="submit" type={'primary'}>Add</Button>
                </div>
            }
        >
            <Form onSubmit={saveChanges}>
                <h1 className="h3 mb-3 fw-normal">City creation</h1>
                <Form.Group controlId='text'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter city title'
                        value={city.title}
                        onChange={(e) => onDataChange(e.target.value, "title")}
                    >
                    </Form.Control>
                </Form.Group>
                <p style={{ marginBottom: '5px' }}>Country</p>
                <Select
                    showSearch
                    style={{ width: '320px' }}
                    placeholder="Select Country"
                    optionFilterProp="children"
                    onChange={(e) => onDataChange(e, "countryId")}
                >
                    {countriesListReducer.countries.map((element) => {
                        return (<Option key={element.id} value={element.id}>{element.title}</Option>)
                    })}
                </Select>
            </Form>
        </Modal>
    )
}

export default AddCityComponent
