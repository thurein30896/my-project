import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsTrash3 } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const getContact = async () => {
    const {data} = await axios.get("http://localhost:5173/api/contacts");
    // console.log(data);
    setContacts(data)
  }

  const deleteContact = async (id) => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
            const {data} = await axios.delete(`http://localhost:5173/api/contacts/${id}`);
            getContact();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
  }

  useEffect(() => {
    getContact();
  },[])
  return (
    <>
        <Link to={"/create"} >
        <button className="px-4 py-2 rounded-lg bg-gray-700 my-5 text-white w-fit ml-auto block">Create New Contact</button>
        </Link>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email Address
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
                contacts.map((contact) => 
                    <tr key={contact.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    {contact.name}
                    </th>
                    <td className="px-6 py-4">{contact.email}</td>
                    <td className="px-6 py-4">{contact.phone}</td>
                    <td className="px-6 py-4 flex gap-5">
                    <Link to={`/edit/${contact.id}`} >
                    <AiFillEdit className="text-xl text-white " />
                    </Link>
                    <BsTrash3 onClick={() => deleteContact(contact.id)} className="text-xl text-white cursor-pointer " />
                    </td>
                </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contacts;
