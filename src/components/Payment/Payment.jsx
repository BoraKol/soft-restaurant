import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Payment = () => {
  const initialValues = {
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  };

  const validationSchema = Yup.object({
    cardNumber: Yup.string().required("Kart numarası zorunludur"),
    expiryDate: Yup.string().required("Son kullanma tarihi zorunludur"),
    cvv: Yup.string().required("CVV zorunludur"),
  });

  const handleSubmit = (values) => {
    // Form değerlerini işleme al
    console.log(values);
  };

  return (
    <div>
      <h2>Ödeme Bilgileri</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Kart Numarası:</label>
            <Field type="text" name="cardNumber" />
          </div>

          <div>
            <label>Son Kullanma Tarihi:</label>
            <Field type="text" name="expiryDate" />
          </div>

          <div>
            <label>CVV:</label>
            <Field type="text" name="cvv" />
          </div>

          <button type="submit">Siparişi Tamamla</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Payment;