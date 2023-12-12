import React, { useEffect, useState } from "react";
import axios from "axios";
import BookDetails from "./components/BookDetails";
import { ToastContainer, toast } from "react-toastify";
import { Form, Input, message, Modal, Table, DatePicker, Select } from "antd";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const getAllBooks = async () => {
    try {
      const { data } = await axios.get(`/api/books`);

      setBooks(data.books);
    } catch (error) {}
  };
  useEffect(() => {
    getAllBooks();
  }, []);
  const handleSubmit = async (values) => {
    try {
      const book = await axios.post(`/api/books`, {
        ...values,
      });
      toast.success("Book Added Successfully", {
        position: "top-center",
      });
      setBooks([...books, book]);
      setShowModal(false);
    } catch (error) {
      toast.error("Failed to add Book", { position: "top-center" });
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-3">Library Management System</h1>
        <div className="  col-md-3 mt-4 mb-5 mr-auto ">
          <button
            className="float-right me-4 btn btn-primary "
            onClick={() => setShowModal(true)}
          >
            Add New Book
          </button>
        </div>
        <BookDetails className="mt-5" books={books} />
        <Modal
          title="Add Book"
          open={showModal}
          onCancel={() => setShowModal(false)}
          footer={false}
        >
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Name" name="name">
              <Input required type="text" />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <Input required type="text" />
            </Form.Item>
            <Form.Item label="Author" name="author">
              <Input required type="text" />
            </Form.Item>
            <Form.Item label="ISBN" name="ISBN">
              <Input required type="text" />
            </Form.Item>
            <Form.Item label="Price" name="price">
              <Input required type="text" />
            </Form.Item>
            <Form.Item label="Quantity" name="quantity">
              <Input required type="text" />
            </Form.Item>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                SAVE
              </button>
            </div>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default Home;
