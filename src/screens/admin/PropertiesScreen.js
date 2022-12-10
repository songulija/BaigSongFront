import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Space, Card, Typography, Col, Row, Popconfirm } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Button } from "react-bootstrap";
import "../../styles/Login.css";
import { tableCardStyle, tableCardBodyStyle, buttonStyle } from '../../styles/customStyles.js';
import { getProperties, createProperty, updateProperty, deleteProperty } from '../../redux/actions/propertiesActions'
import { useNavigate } from 'react-router-dom'
import moment from 'moment';

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
function PropertiesScreen() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const usersReducer = useSelector((state) => state.usersReducer);
    const userInfoReducer = useSelector((state) => state.userInfoReducer);
    const propertiesReducer = useSelector((state) => state.propertiesReducer)
    const { currentUser } = usersReducer;
    const { role } = userInfoReducer;
    const { properties } = propertiesReducer;


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

    const updateRecord = (postObj, reducerObj) => {
        dispatch(updateProperty(postObj, reducerObj))
        unshowUpdateModal()
    }

    const addNewRecord = (postObj) => {
        dispatch(createProperty(postObj))
        setAddPanel(false)
    }

    const deleteRecord = (id) => {
        dispatch(deleteProperty(id))
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
            title: 'Email',
            dataIndex: 'user',
            width: '40%',
            render: (value, record, rowIndex) => (
                <p>{record ? record.user.email : ''}</p>
            )
        },
        {
            title: 'Property Type',
            dataIndex: 'propertyType',
            width: '40%',
            render: (value, record, rowIndex) => (
                <p>{record ? record.propertyType.title : ''}</p>
            )
        },
        {
            title: 'Rent Type',
            dataIndex: 'rentType',
            width: '20%',
            render: (value, record, rowIndex) => (
                <p>{record ? record.rentType.title : ''}</p>
            )
        },
        {
            title: 'City',
            dataIndex: 'city',
            width: '20%',
            render: (value, record, rowIndex) => (
                <p>{record ? record.city.title : ''}</p>
            )
        },
        {
            title: 'Title',
            dataIndex: 'title',
            width: '20%',
            render: (value, record, rowIndex) => (
                <p>{value ? value : ''}</p>
            )
        },
        {
            title: 'Address',
            dataIndex: 'address',
            width: '20%',
            render: (value, record, rowIndex) => (
                <p>{value ? value : ''}</p>
            )
        },
        {
            title: 'Price',
            dataIndex: 'price',
            width: '20%',
            render: (value, record, rowIndex) => (
                <p>{value ? value : ''}</p>
            )
        }
    ]

    useEffect(() => {
        if (currentUser !== null && role === "ADMINISTRATOR") {
            dispatch(getProperties())
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
                                <Typography.Title style={{ ...aboutTitleTextStyle }}>Properties</Typography.Title>
                                <Typography.Text style={{ ...textStyle }}>
                                    Add Properties.
                                </Typography.Text>
                            </div>
                        </Col>
                    </Row>
                    {/* returns second column with table */}
                    {/* <FixedCostTable data={obj.types} countryVats={this.props.countryVats} category_title={obj.category_title} category_id={obj.category_id} /> */}
                    <Row gutter={16}>
                        <Col span={22}>
                            <Card size={'small'} style={{ ...tableCardStyle }} bodyStyle={{ ...tableCardBodyStyle }}>
                                <Table
                                    rowKey="id"
                                    columns={columns}
                                    dataSource={properties ? properties : []}
                                    pagination={{ pageSize: 10 }}
                                    bordered
                                    scroll={{ x: 'calc(700px + 50%)' }}
                                // footer={() => (<Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.onOpenAddCompany()}><PlusOutlined />Pridėti kompaniją</Button></Space>)}
                                />
                                <Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={showAddPanel}><PlusOutlined />Add Property</Button></Space>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </div>
            {addPanel !== false ?
                <AddCommentComponent visible={addPanel} onClose={unshowAddPanel}
                    save={addNewRecord} />
                : null}
            {updatePanel.visibility !== false ?
                <UpdateCommentComponent visible={updatePanel.visibility} save={updateRecord}
                    onClose={unshowUpdateModal} record={updatePanel.record} />
                : null}
        </>
    )
}

//connect to redux states, defining all action that we will use
export default PropertiesScreen
