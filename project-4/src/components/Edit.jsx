import React, { useEffect, useState, useRef } from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom'
import axios from "axios";

const Edit = () => {
    const {id} = useParams();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();

    const nav = useNavigate();
    const formRef = useRef();
    const handleForm = (e) => {
        e.preventDefault();
        const newContact = {
            name : formRef.current[0].value,
            email : formRef.current[1].value,
            phone : formRef.current[2].value
        }
        // console.log(newContact);
        createContact(newContact);

    }
    const createContact = async (newContact) => {
        const {data} = await axios.put(`http://localhost:5173/api/contacts/${id}`,newContact);
        // console.log(data);
        nav("/");
    }


    const singleContact = async () => {
        const {data} = await axios.get(`http://localhost:5173/api/contacts/${id}`);
        // console.log(data);
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
    }

    useEffect(() => {
       singleContact(); 
    },[])
  return (
    <form onSubmit={handleForm} ref={formRef} className="max-w-sm mx-auto p-5 bg-gray-900 mt-10 shadow-2xl rounded-lg">
      <div className="text-center mb-5">
        <h1 className="text-white text-2xl font-bold">Edit Contact</h1>
      </div>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Name
        </label>
        <input
        defaultValue={name}
          type="text"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Hello World"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
        defaultValue={email}
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="hello@gmail.com"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Phone
        </label>
        <input
        defaultValue={phone}
          type="number"
          id="phone"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="09xxxxxxxx"
          required
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            defaultValue
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="terms"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I agree with the{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
        </label>
      </div>
      <button
        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Update
      </button>
      <Link to={"/"} >
      <button
        className="ml-3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        Cancel
      </button>
      </Link>
    </form>
  )
}

export default Edit