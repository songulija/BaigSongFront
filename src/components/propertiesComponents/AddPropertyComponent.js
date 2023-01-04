import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Space, Select, Modal } from 'antd';
import { Form } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import { ArrowLeftOutlined } from '@ant-design/icons'
import moment from 'moment';
import { getCities } from '../../redux/actions/citiesActions';
import { getUsers } from '../../redux/actions/userListActions';
import { getPropertyTypes } from '../../redux/actions/propertyTypesActions';

const { Option } = Select;
 
function AddPropertyComponent(props) {
    const dispatch = useDispatch();
    const [property, setProperty] = useState({
        userId: 0,
        propertyTypeId: 2,
        rentTypeId: 1,
        cityId: 1,
        address: 'Gedimino g. 101',
        title: 'Vilnius G101',
        description: 'Certainty listening no no behaviour existence assurance situation is. Because add why not esteems amiable him. Interested the unaffected mrs law friendship add principles. Indeed on people do merits to. Court heard which up above hoped grave do. Answer living law things either sir bed length. Looked before we an on merely. These no death he at share alone. Yet outward the him compass hearted are tedious.',
        roomNumber: 2,
        price: 599,
        date: moment().format('YYYY/MM/DD'),
    });
    const [file, setFile] = useState();
    const usersListReducer = useSelector((state) => state.usersListReducer);
    const propertyTypesReducer = useSelector((state) => state.propertyTypesReducer);
    const citiesListReducer = useSelector((state) => state.citiesListReducer);

    const onCancel = () => {
        props.onClose();
    }
    const saveChanges = () => {
        const formData = new FormData()
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

    const onDataChange = (value, inputName) => {
        setProperty(prevState => ({
            ...prevState,
            [inputName]: value
        }))
    }

    const changeFile = (e) => {
        setFile(e.target.files[0]);
    }

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getPropertyTypes())
        dispatch(getCities())
    }, [props])

    return (
        <Modal
            // onCancel={onCancel}
            // saveChanges={saveChanges}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}
            title={<Space><ArrowLeftOutlined onClick={onCancel} />Add new city</Space>}
            open={props.visible}
            footer={
                <div>
                    {/* <Button key="customCancel" onClick={onCancel}>Cancel</Button> */}
                    {/* <Button key="customSubmit" form="myForm" onClick={saveChanges} htmlType="submit" type={'primary'}>Add</Button> */}
                </div>
            }
        >
            <Form onSubmit={saveChanges}>
                <h1 className="h3 mb-3 fw-normal">Property creation</h1>
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

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Choose File</Form.Label>
                    <Form.Control type="file" onChange={changeFile} required />
                </Form.Group>
                <Button type="submit">Submit</Button>
                <Button key="customCancel" onClick={onCancel}>Cancel</Button>
            </Form>
        </Modal>
    )
}

export default AddPropertyComponent
