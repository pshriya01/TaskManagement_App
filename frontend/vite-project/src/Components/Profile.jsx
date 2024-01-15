import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((store) => store.authReducer.user);
  console.log(user)
  return (
    <div className="max-w-md mx-auto mt-20 w-11/12 pl-8 pr-8 pb-8 pt-1 bg-custom-pink shadow-lg rounded-lg">
      <img src='https://cdn-icons-png.flaticon.com/256/345/345736.png' className='rounded-full m-auto w-24 h-24  -mt-16 '></img>
      <h2 className="text-2xl text-custom-green font-bold mb-4">Profile</h2>
      <div className="mb-4">
        <label className="block text-custom-green text-gray-600 text-sm font-semibold mb-2">Name:</label>
        <p className=" trans capitalize text-lg text-custom-darkpink font-bold">{user.name}</p>
      </div>

      <div className="mb-4">
        <label className="block text-custom-green text-gray-600 text-sm font-semibold mb-2">Username:</label>
        <p className="text-lg text-custom-darkpink font-bold">{user.username}</p>
      </div>

      <div className="mb-4">
        <label className="blocktext-custom-green text-gray-600 text-sm font-semibold mb-2">Email:</label>
        <p className="text-lg text-custom-darkpink font-bold">{user.email}</p>
      </div>

      <button  className="bg-custom-darkpink mt-2 text-white  py-2 px-4  rounded-md font-bold hover:rounded-full focus:outline-none ">
        Edit Profile
      </button>
    </div>
  )
}

export default Profile