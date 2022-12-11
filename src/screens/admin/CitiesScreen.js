import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Space, Card, Typography, Col, Row, Popconfirm, Image} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Button } from "react-bootstrap";
import "../../styles/Login.css";
import { tableCardStyle, tableCardBodyStyle, buttonStyle } from '../../styles/customStyles.js';
import { getCities, createCity, updateCity, deleteCity } from '../../redux/actions/citiesActions'
import { useNavigate } from 'react-router-dom'
import moment from 'moment';
import AddCityComponent from '../../components/citiesComponents/AddCityComponent';
import UpdateCityComponent from '../../components/citiesComponents/UpdateCityComponent';

const aboutTitleTextStyle = {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    marginBottom: '16px',
}

const textStyle = {
    fontSize: '14px',
    color: '#8C8C8C',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '22px',
    marginRight: '40px',
}
function CitiesScreen() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const usersReducer = useSelector((state) => state.usersReducer);
    const userInfoReducer = useSelector((state) => state.userInfoReducer);
    const citiesListReducer = useSelector((state) => state.citiesListReducer)
    const { currentUser } = usersReducer;
    const { role } = userInfoReducer;
    const { cities } = citiesListReducer;


    const [addPanel, setAddPanel] = useState(false)
    const [updatePanel, setUpdatePanel] = useState({ visibility: false, record: null })
    const showAddPanel = () => {
        setAddPanel(true)
    }
    const unshowAddPanel = () => {
        setAddPanel(false)
    }

    // FOR UpdateTransportationComponent
    const showUpdateModal = (record) => {
        setUpdatePanel(prevState => ({
            ...prevState,
            visibility: true,
            record: record
        }))
    }
    const unshowUpdateModal = () => {
        setUpdatePanel(prevState => ({
            ...prevState,
            visibility: false,
            record: null
        }))
    }

    const updateRecord = (postObj) => {
        dispatch(updateCity(postObj))
        unshowUpdateModal()
    }

    const addNewRecord = (postObj) => {
        dispatch(createCity(postObj))
        setAddPanel(false)
    }

    const deleteRecord = (id) => {
        dispatch(deleteCity(id))
    }

    const columns = [
        {
            title: 'Update',
            width: '5%',
            render: (value, record, index) => (
                <Button onClick={(e) => showUpdateModal(record)}>Update</Button>
            )
        },
        {
            title: 'Delete',
            width: '5%',
            render: (text, record, index) => (
                <Popconfirm title="Tikrai ištrinti?" onConfirm={() => deleteRecord(record.id)}>
                    <Button type="primary" danger>Delete</Button>
                </Popconfirm>
            )
        },
        {
            title: 'Title',
            dataIndex: 'title',
            width: '40%',
            render: (value, record, rowIndex) => (
                <p>{value ? value : ''}</p>
            )
        },
        {
            title: 'Country',
            dataIndex: 'country',
            width: '20%',
            render: (value, record, rowIndex) => (
                <p>{record !== null ? record.country.title : ''}</p>
            )
        },
        {
            title: 'Image',
            dataIndex: 'photo',
            width: '20%',
            render: (value, record, rowIndex) => {
                if (value)
                    return (
                        <Image src={`data:image/jpeg;base64,${value}`} width={100}/>
                    )
                else
                return (<Image src={'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484366.jpg'} width={100}/>)
            }
        },
        {
            title: 'Date',
            dataIndex: 'date',
            width: '20%',
            render: (value, record, rowIndex) => (
                <p>{value ? moment(value).format("YYYY/MM/DD") : ''}</p>
            )
        }
    ]

    useEffect(() => {
        if (currentUser !== null && role === "ADMINISTRATOR") {
            dispatch(getCities())
        } else {
            navigate('/')
        }
    }, [currentUser, navigate])
    return (
        <>
            <div style={{ marginTop: 45, marginBottom: 45 }}>
                <Col span={24} offset={2}>
                    <Row gutter={16}>
                        <Col span={16}>
                            <div style={{ marginRight: '40px' }}>
                                <Typography.Title style={{ ...aboutTitleTextStyle }}>Cities</Typography.Title>
                                <Typography.Text style={{ ...textStyle }}>
                                    Add Cities.
                                </Typography.Text>
                            </div>
                        </Col>
                    </Row>
                    {/* returns second column with table */}
                    <Row gutter={16}>
                        <Col span={22}>
                            <Card size={'small'} style={{ ...tableCardStyle }} bodyStyle={{ ...tableCardBodyStyle }}>
                                <Table
                                    rowKey="id"
                                    columns={columns}
                                    dataSource={cities ? cities : []}
                                    pagination={{ pageSize: 10 }}
                                    bordered
                                    scroll={{ x: 'calc(700px + 50%)' }}
                                // footer={() => (<Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.onOpenAddCompany()}><PlusOutlined />Pridėti kompaniją</Button></Space>)}
                                />
                                <Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={showAddPanel}><PlusOutlined />Add City</Button></Space>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </div>
            {addPanel !== false ?
                <AddCityComponent visible={addPanel} onClose={unshowAddPanel}
                    save={addNewRecord} />
                : null}
            {updatePanel.visibility !== false ?
                <UpdateCityComponent visible={updatePanel.visibility} save={updateRecord}
                    onClose={unshowUpdateModal} record={updatePanel.record} />
                : null}
        </>

    )
}

//connect to redux states, defining all action that we will use
export default CitiesScreen
