import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserAdressAsync } from "../redux/slices/usersSlice";
import alertify from "alertifyjs";
import 'alertifyjs/build/css/alertify.css';

const User = () => {
    const { loggedInUser } = useSelector((state) => state.users.loggedInUser); // Assuming you store the logged-in user's information in `loggedInUser`
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const handleAddAddress = async (e) => {
      e.preventDefault(); // Form submitini engellemek için

      try {
          await dispatch(addUserAdressAsync({
              name,
              lastName,
              phoneNumber,
              description,
          }));

        //   console.log("Adres eklendi!");
        //   alertify.success("Adres ekleme başarılı!");
          
      } catch (error) {
          alertify.error("Bir hata oluştu:", error);
      }
  };

    return (
        <div>
            <h2>Users</h2>
            {loggedInUser && (
                <ul>
                    <li>{loggedInUser.addNewAdress.name} {loggedInUser.addNewAdress.lastName}</li>
                    <li>{loggedInUser.addNewAdress.phoneNumber} {loggedInUser.addNewAdress.description}</li>
                </ul>
            )}
            <h2>Yeni Adres Ekle</h2>
            <form onSubmit={handleAddAddress}>
                <input
                    type="text"
                    placeholder="Ad"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    placeholder="Soyad"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <br />
                <input
                    type="tel"
                    placeholder="Telefon Numarası"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    placeholder="Adres Açıklaması"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <button type="submit" style={{backgroundColor: "green" , color: "white" , padding: 5 }} onClick={handleAddAddress} >Adres Ekle</button>
            </form>
        </div>
    );
};

export default User;
