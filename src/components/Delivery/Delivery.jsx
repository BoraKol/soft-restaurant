import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
const Delivery = () => {
  const initialValues = {
    fullName: "",
    address: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Ad ve soyad zorunludur"),
    address: Yup.string().required("Adres zorunludur"),
    phoneNumber: Yup.string().required("Telefon numarası zorunludur"),
  });

  const handleSubmit = (values) => {
    // Form değerlerini işleme al
    console.log(values);
  };

  return (
    <div>
      <h2>Teslimat Bilgileri</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Ad ve Soyad:</label>
            <Field type="text" name="fullName" />
          </div>

          <div>
            <label>Adres:</label>
            <Field type="text" name="address" />
          </div>

          <div>
            <label>Telefon Numarası:</label>
            <Field type="tel" name="phoneNumber" />
          </div>
          <Link to="/paymet">
      <button type="submit" className= "bg-red-500 px-6 py-3 text-white poppins rounded-full  focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105">Ödeme Sayfasına Git</button>
      </Link>
          <button ></button>
        </Form>
      </Formik>
    </div>
  );
};

export default Delivery;