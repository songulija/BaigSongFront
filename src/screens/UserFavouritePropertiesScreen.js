import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Space, Typography, Col, Row, Popconfirm, Image, Pagination } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Card } from "react-bootstrap";
import { tableCardStyle, tableCardBodyStyle, buttonStyle } from '../styles/customStyles.js';
import { getPropertiesByUserId, createProperty, updateProperty, deleteProperty, getUserFavouriteProperties } from '../redux/actions/propertiesActions'
import { useNavigate, useParams } from 'react-router-dom'
import moment from 'moment';
import AddPropertyComponent from '../components/propertiesComponents/AddPropertyComponent';
import UpdatePropertyComponent from '../components/propertiesComponents/UpdatePropertyComponent';
import PropertyCard from '../components/cardComponent/PropertyCard.jsx';
import MyPropertyCard from '../components/cardComponent/MyPropertyCard.jsx';

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
function UserFavouritePropertiesScreen() {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const usersReducer = useSelector((state) => state.usersReducer);
    const userInfoReducer = useSelector((state) => state.userInfoReducer);
    const propertiesReducer = useSelector((state) => state.propertiesReducer)
    const { currentUser } = usersReducer;
    const { role } = userInfoReducer;
    const { favouriteProperties, pagination } = propertiesReducer;


    const [addPanel, setAddPanel] = useState(false)
    const [updatePanel, setUpdatePanel] = useState({ visibility: false, record: null })
    const pageNumber = params.pageNumber ? params.pageNumber : 1;
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

    const onShowSizeChange = (data) => {
        navigate(`/user/favourite-properties/${data}`)
    };

    useEffect(() => {
        if (currentUser !== null) {
            dispatch(getUserFavouriteProperties(10, pageNumber))
        } else {
            navigate('/')
        }
    }, [currentUser, navigate, pageNumber])
    return (
        <>
            {favouriteProperties ? <Row>
                <Button size="large" style={{ marginBottom: '4px' }} onClick={showAddPanel}><PlusOutlined />Add Property</Button>
                {favouriteProperties.map((fproperty, i) => (
                    <Col xl={22} style={{ marginBottom: 20 }}>
                        <MyPropertyCard record={fproperty.property} favouriteProperties={true} fpId={fproperty.id} />
                        {/* <div className="card mb-3 py-5">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="..." className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </Col>
                ))}
            </Row>
                :
                <div></div>}
            {pagination ?
                <Pagination
                    onChange={onShowSizeChange}
                    pageSize={10}
                    current={pagination.currentPage}
                    total={pagination.totalCount}
                />
                :
                <div></div>}

            {/* <div style={{ marginTop: 45, marginBottom: 45 }}>
                <Col span={24} offset={2}>
                    <Row gutter={16}>
                        <Col span={16}>
                            <div style={{ marginRight: '40px' }}>
                                <Typography.Title style={{ ...aboutTitleTextStyle }}>My Properties</Typography.Title>
                                <Typography.Text style={{ ...textStyle }}>
                                    Add Property.
                                </Typography.Text>
                            </div>
                        </Col>
                    </Row>
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
            </div> */}
            {addPanel !== false ?
                <AddPropertyComponent visible={addPanel} onClose={unshowAddPanel}
                    save={addNewRecord} />
                : null}
            {/* {updatePanel.visibility !== false ?
                <UpdatePropertyComponent visible={updatePanel.visibility} save={updateRecord}
                    onClose={unshowUpdateModal} record={updatePanel.record} />
                : null} */}
        </>
    )
}

//connect to redux states, defining all action that we will use
export default UserFavouritePropertiesScreen
