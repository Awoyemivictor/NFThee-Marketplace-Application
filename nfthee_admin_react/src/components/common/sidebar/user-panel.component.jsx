import React,{useState,useEffect} from 'react';
import man from '../../../assets/images/user/1.jpg'

const UserPanel = () => {
    const [profile, setProfile] = useState('');
    const [name, setName] = useState('')
    
    useEffect(() => {
        setProfile(localStorage.getItem('profileURL' || man));
        setName(localStorage.getItem('Name'))
    },[]);
    
    return (
        <div className="sidebar-user text-center">
            <div>
                <img className="img-50 rounded-circle" src={profile} alt="not found" />
            </div>
            <h6 className="mt-3 f-12">{name}</h6>
            <a href="#javaScript"><i className="fa fa-circle text-success"></i> Online</a>
        </div>
    );
}

export default UserPanel