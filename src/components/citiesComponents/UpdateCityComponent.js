import { useState, useEffect } from 'react';
// import { Form, Button, Input, Modal, Space, Col, Row, Select, Image } from 'antd';
import { Space, Select, Modal, Image } from 'antd';
import { Form, Button } from 'react-bootstrap'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions/countriesActions';

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
    const [file, setFile] = useState();
    const [fileChanged, setFileChanged] = useState(0)
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
    const saveChanges = (event) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append('id', city.id)
        formData.append("title", city.title)
        formData.append("date", city.date)
        formData.append("countryId", city.countryId)
        formData.append("photo", city.photo)
        formData.append("file", file)
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        props.save(formData);
    }
    const deleteImage = () => {
        setCity(prevState => ({
            ...prevState,
            photo: null
        }))
    }
    const changeFile = (e) => {
        setFileChanged(1);
        setFile(e.target.files[0])
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
                        {/* <Button key="customCancel" onClick={onCancel}>Atšaukti</Button>
                        <Button key="customSubmit" form="myForm" onClick={saveChanges} htmlType="submit" type={'submit'}>Atnaujinti</Button> */}
                    </div>
                }
            >
                <Form layout="vertical" id="myForm" name="myForm" onSubmit={saveChanges}>
                    <Form.Group controlId='text'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter city title'
                            defaultValue={city.title}
                            value={city.title}
                            onChange={(e) => onDataChange(e.target.value, "title")}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Country</Form.Label>
                        <Form.Select
                            required
                            style={{ width: '320px' }}
                            placeholder="Select Country"
                            defaultValue={city.countryId}
                            value={city.countryId}
                            onChange={(e) => onDataChange(e, "countryId")}
                        >
                            {countriesListReducer.countries.map((element) => {
                                return (<option key={element.id} value={element.id}>{element.title}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>
                    {/* <p style={{ marginBottom: '5px' }}>Country</p>
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
                    </Select> */}
                    {city.photo ?
                        <div>
                            <p style={{ ...textStyle }}>Nuotrauka</p>
                            <Image src={`data:image/jpeg;base64,${city.photo}`} width={100} />
                            <br></br>
                            <Button onClick={deleteImage}>Ištrinti nuotrauką</Button>
                        </div> :
                        <div>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Choose File</Form.Label>
                            <Form.Control type="file" onChange={changeFile} required />
                        </Form.Group>
                        </div>
                    }
                    <Button type="submit">Submit</Button>
                    <Button key="customCancel" onClick={onCancel}>Cancel</Button>
                </Form>
            </Modal>
        </>
    )
}

export default UpdateCityComponent;