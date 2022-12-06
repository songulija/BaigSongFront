import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Space, Card, Typography, Col, Row, Popconfirm } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Button } from "react-bootstrap";
import "../../styles/Login.css";
import { tableCardStyle, tableCardBodyStyle, buttonStyle } from '../../styles/customStyles.js';
import { getUsers, createUser, updateUser, deleteUser } from '../../redux/actions/userListActions'
import { useNavigate } from 'react-router-dom'
import AddUserComponent from '../../components/register_components/AddUserComponent'
import UpdateUserComponent from '../../components/register_components/UpdateUserComponent';

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
function UsersScreen() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const usersReducer = useSelector((state) => state.usersReducer);
    const userInfoReducer = useSelector((state) => state.userInfoReducer);
    const usersListReducer = useSelector((state) => state.usersListReducer)
    const { currentUser } = usersReducer;
    const { role } = userInfoReducer;
    const { users } = usersListReducer;


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
        dispatch(updateUser(postObj, reducerObj))
        unshowUpdateModal()
    }

    const addNewRecord = (postObj) => {
        dispatch(createUser(postObj))
        setAddPanel(false)
    }

    const deleteSelectedUser = (id) => {
        dispatch(deleteUser(id))
    }

    const columns = [
        {
            title: 'Atnaujinimas',
            width: '5%',
            render: (value, record, index) => (
                <Button onClick={(e) => showUpdateModal(record)}>Atnaujinti</Button>
            )
        },
        {
            title: 'Ištrinti',
            width: '5%',
            render: (text, record, index) => (
                <Popconfirm title="Tikrai ištrinti?" onConfirm={() => deleteSelectedUser(record.id)}>
                    <Button type="primary" danger>Ištrinti</Button>
                </Popconfirm>
            )
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: '40%',
            render: (value, record, rowIndex) => (
                <p>{value ? value : ''}</p>
            )
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            width: '40%',
            render: (value, record, rowIndex) => (
                <p>{value ? value : ''}</p>
            )
        },
        {
            title: 'Role',
            dataIndex: 'UserType',
            width: '20%',
            render: (value, record, rowIndex) => (
                <p>{record !== null ? record.userType.title : ''}</p>
            )
        }
    ]

    useEffect(() => {
        if (currentUser !== null && role === "ADMINISTRATOR") {
            dispatch(getUsers())
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
                                <Typography.Title style={{ ...aboutTitleTextStyle }}>Naudotojai</Typography.Title>
                                <Typography.Text style={{ ...textStyle }}>
                                    Pridėkite naudotojus, kurie galės naudotis sveitaine.
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
                                    dataSource={users ? users : []}
                                    pagination={{ pageSize: 10 }}
                                    bordered
                                    scroll={{ x: 'calc(700px + 50%)' }}
                                // footer={() => (<Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={this.onOpenAddCompany()}><PlusOutlined />Pridėti kompaniją</Button></Space>)}
                                />
                                <Space style={{ display: 'flex', justifyContent: 'space-between' }}><Button size="large" style={{ ...buttonStyle }} onClick={showAddPanel}><PlusOutlined />Pridėti naudotoją</Button></Space>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </div>
            {addPanel !== false ?
                <AddUserComponent visible={addPanel} onClose={unshowAddPanel}
                    save={addNewRecord} />
                : null}
            {updatePanel.visibility !== false ?
                <UpdateUserComponent visible={updatePanel.visibility} save={updateRecord}
                    onClose={unshowUpdateModal} record={updatePanel.record} />
                : null}
        </>

    )
}

//connect to redux states, defining all action that we will use
export default UsersScreen
