import React, { useEffect, useState } from 'react'
import { getUserInfo, updateUser } from "../redux/actions/usersActions";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import UpdateProfileComponent from '../components/profileComponents/UpdateProfileComponent';

function ProfileScreen() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const usersReducer = useSelector((state) => state.usersReducer);
    const userInfoReducer = useSelector((state) => state.userInfoReducer)
    const { currentUser } = usersReducer;
    const { role, info } = userInfoReducer

    const [updatePanel, setUpdatePanel] = useState({ visibility: false, record: null })

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

    useEffect(() => {
        if (currentUser)
            dispatch(getUserInfo())
        else
            navigate('/')
    }, [currentUser])
    return (
        <>
            <div className="container rounded bg-white mt-2 mb-5">
                <div className="row">
                    {info ? <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">{info.firstName ? info.firstName : ''}</span><span className="text-black-50">{info.email ? info.email : ''}</span><span> </span></div>
                    </div>
                        :
                        <dev></dev>}

                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            {info ?
                                <div>
                                    <div className="row mt-2">
                                        <div className="col-md-6"><label className="labels">Name</label><input defaultValue={info.firstName ? info.firstName : ''} disabled={true} type="text" className="form-control" placeholder="first name" value={info.firstName ? info.firstName : ''} /></div>
                                        <div className="col-md-6"><label className="labels">Surname</label><input defaultValue={info.lastName ? info.lastName : ''} disabled={true} type="text" className="form-control" value={info.lastName ? info.lastName : ''} placeholder="surname" /></div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12"><label className="labels">Mobile Number</label><input defaultValue={info.phoneNumber ? info.phoneNumber : ''} disabled={true} type="text" className="form-control" placeholder="enter phone number" value={info.phoneNumber ? info.phoneNumber : ''} /></div>
                                    </div>
                                    <div className="mt-5 text-center"><button onClick={(e) => showUpdateModal(info)} className="btn btn-primary profile-button" type="button">Edit Profile</button></div>
                                </div>
                                : <></>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {updatePanel.visibility !== false ?
                <UpdateProfileComponent visible={updatePanel.visibility} save={updateRecord}
                    onClose={unshowUpdateModal} record={updatePanel.record} />
                : null}
        </>
    )
}

export default ProfileScreen
