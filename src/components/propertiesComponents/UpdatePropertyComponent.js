import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Space, Select, Modal, Image } from 'antd';
import { Form } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import { ArrowLeftOutlined } from '@ant-design/icons'
import { getCities } from '../../redux/actions/citiesActions';
import { getUsers } from '../../redux/actions/userListActions';
import { getPropertyTypes } from '../../redux/actions/propertyTypesActions';

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
function UpdatePropertyComponent(props) {
    const dispatch = useDispatch()
    const [property, setProperty] = useState({});
    const [file, setFile] = useState();
    // const [fileChanged, setFileChanged] = useState(0)
    const usersListReducer = useSelector((state) => state.usersListReducer);
    const propertyTypesReducer = useSelector((state) => state.propertyTypesReducer);
    const citiesListReducer = useSelector((state) => state.citiesListReducer);

    const onBack = () => {
        props.onClose();
    }
    const onCancel = () => {
        props.onClose();
    }
    const onDataChange = (value, inputName) => {
        setProperty(prevState => ({
            ...prevState,
            [inputName]: value
        }))
    }
    const saveChanges = (event) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append("id", property.id)
        formData.append("userId", property.userId)
        formData.append("propertyTypeId", property.propertyTypeId)
        formData.append("rentTypeId", property.rentTypeId)
        formData.append("cityId", property.cityId)
        formData.append("address", property.address)
        formData.append("title", property.title)
        formData.append("description", property.description)
        formData.append("roomNumber", property.roomNumber)
        formData.append("price", property.price)
        formData.append("date", property.date)
        formData.append("file", file)
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        props.save(formData);
    }
    const deleteImage = () => {
        setProperty(prevState => ({
            ...prevState,
            photo: null
        }))
    }
    const changeFile = (e) => {
        deleteImage();
        setFile(e.target.files[0])
    }
    useEffect(() => {
        dispatch(getUsers())
        dispatch(getPropertyTypes())
        dispatch(getCities())
        setProperty(props.record)
    }, [props])

    return (
        <>
            <Modal
                onCancel={onCancel}
                saveChanges={saveChanges}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: false }}
                title={<Space><ArrowLeftOutlined onClick={onBack} />Update property</Space>}
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
                    <h1 className="h3 mb-3 fw-normal">Property update</h1>
                    {/* <Form.Group className="mb-3">
                        <Form.Label>User</Form.Label>
                        <Form.Select
                            required
                            style={{ width: '320px' }}
                            placeholder="Select User"
                            defaultValue={property.userId}
                            value={property.userId}
                            onChange={(e) => onDataChange(e.target.value, "userId")}
                        >
                            {usersListReducer.users.map((element) => {
                                return (<option key={element.id} value={element.id}>{element.email}</option>)
                            })}
                        </Form.Select>
                    </Form.Group> */}

                    <Form.Group className="mb-3">
                        <Form.Label>Property Type</Form.Label>
                        <Form.Select
                            required
                            style={{ width: '320px' }}
                            placeholder="Select Property Type"
                            defaultValue={property.propertyTypeId}
                            value={property.propertyTypeId}
                            onChange={(e) => onDataChange(e.target.value, "propertyTypeId")}
                        >
                            {propertyTypesReducer.propertyTypes.map((element) => {
                                return (<option key={element.id} value={element.id}>{element.title}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Rent Type</Form.Label>
                        <Form.Select
                            required
                            style={{ width: '320px' }}
                            placeholder="Select Rent Type"
                            defaultValue={property.rentTypeId}
                            value={property.rentTypeId}
                            onChange={(e) => onDataChange(e.target.value, "rentTypeId")}
                        >
                            <option key={'property-add-1'} value={1}>Long Term</option>
                            <option key={'property-add-2'} value={2}>Short Term</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Select
                            required
                            style={{ width: '320px' }}
                            placeholder="Select City"
                            defaultValue={property.cityId}
                            value={property.cityId}
                            onChange={(e) => onDataChange(e.target.value, "cityId")}
                        >
                            {citiesListReducer.cities.map((element) => {
                                return (<option key={element.id} value={element.id}>{element.title}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId='title'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter title'
                            defaultValue={property.title}
                            value={property.title}
                            onChange={(e) => onDataChange(e.target.value, "title")}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='address'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter address'
                            defaultValue={property.address}
                            value={property.address}
                            onChange={(e) => onDataChange(e.target.value, "address")}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='roomNumber'>
                        <Form.Label>Room Number</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter room number'
                            defaultValue={property.roomNumber}
                            value={property.roomNumber}
                            onChange={(e) => onDataChange(e.target.value, "roomNumber")}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='price'>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter price'
                            defaultValue={property.price}
                            value={property.price}
                            onChange={(e) => onDataChange(e.target.value, "price")}
                        >
                        </Form.Control>
                    </Form.Group>

                    {property.photo ?
                        <div>
                            <p style={{ ...textStyle }}>Photo</p>
                            <Image src={`data:image/jpeg;base64,${property.photo}`} width={100} />
                            <br></br>
                            <Button onClick={deleteImage}>Delete photo</Button>
                        </div> :
                        <div>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Choose File</Form.Label>
                                <Form.Control required type="file" onChange={changeFile}  />
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

export default UpdatePropertyComponent;