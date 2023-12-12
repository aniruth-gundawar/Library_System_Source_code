import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Form, Input, message, Modal, Table, DatePicker, Select } from "antd";
const BookDetails = ({ books }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [ISBN, setISBN] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [id, setId] = useState("");
  const params = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/api/books/${id}`, {
        name,
        price,
        description,
        author,
        quantity,
        ISBN,
      });

      toast.success("Book updated Successfully", {
        position: "top-center",
      });

      setShowModal(false);
    } catch (error) {
      toast.error("Failed to Update book", { position: "top-center" });
    }
  };

  const handleUpdate = (id) => {
    const result = books.filter((row) => row._id === id);

    setShowModal(true);

    setId(id);

    setPrice(result[0].price);
    setName(result[0].name);
    setAuthor(result[0].author);
    setDescription(result[0].description);
    setQuantity(result[0].quantity);
    setISBN(result[0].ISBN);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/books/${id}`, {});
      toast.success("Book Deleted!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("unable to delete Book", {
        position: "top-center",
      });
    }
  };
  return (
    <>
      <h3 className="text-center mt-5 mb-5">Available Books </h3>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">SL.No</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Author</th>

            <th scope="col">ISBN</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((currElem, index) => {
            return (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>{currElem.name}</td>
                  <td>{currElem.description}</td>
                  <td>{currElem.author}</td>

                  <td>{currElem.ISBN}</td>
                  <td>{currElem.price}</td>
                  <td>{currElem.quantity}</td>
                  <td>
                    <div className="col-md-3 mt-4 mb-5 ">
                      <button
                        className="btn btn-primary "
                        onClick={() => {
                          handleUpdate(currElem._id);
                        }}
                      >
                        Update
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="col-md-3 mt-4 mb-5 ">
                      <button
                        className="btn btn-danger "
                        onClick={() => {
                          handleDelete(currElem._id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <Modal
        title="Update Book"
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={false}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label className="mb-2">Name</label>
            <Input
              required
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label className="mb-2">Description</label>
            <Input
              required
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="mb-2">Author</label>
            <Input
              required
              type="text"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="mb-2">ISBN</label>
            <Input
              required
              type="text"
              value={ISBN}
              onChange={(e) => {
                setISBN(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="mb-2">Price</label>
            <Input
              required
              type="text"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="mb-2">Quantity</label>
            <Input
              required
              type="text"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              SAVE
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default BookDetails;
