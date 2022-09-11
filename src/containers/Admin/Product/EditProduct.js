import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthUser from "../../../components/AuthUser/AuthUser";

const endpoint = "http://localhost:8000/api";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState(0);
  const [categoryId, setCategoryId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const {http} = AuthUser();


  const update = async (e) => {
    e.preventDefault();
    await http.put(`${endpoint}/updateProductById/${id}`, {
      name: name,
      artist: artist,
      year: year,
      price: price,
      description: description,
      image: image,
      stock: stock,
      category_id: categoryId
    }).then((res)=>{
      console.log(res);
      if (res.data.success) {
          alert("Producto editado correctamente")   
          navigate("/products");
      } else {
          alert("Ha habido un error editando el producto")
      }
  })
  };

  useEffect(() => {
    const getProductById = async () => {
      const response = await http.get(`${endpoint}/getProductById/${id}`);
      setName(response.data.data.name);
      setArtist(response.data.data.artist);
      setYear(response.data.data.year);
      setPrice(response.data.data.price);
      setDescription(response.data.data.description);
      setImage(response.data.data.image);
      setStock(response.data.data.stock);
      setCategoryId(response.data.data.category_id);
    };
    getProductById();
  }, []);

  const [ categories, setCategories ] = useState( [] )
    
  useEffect( () => {
    getAllCategories()
    }, [])
  
  const getAllCategories = async () => {
      const response = await axios.get(`${endpoint}/categories`)
      // console.log(response)
      setCategories(response.data.data)
  }

  return (
    <div>
      <h3>Edit product</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Artist</label>
          <input
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Year</label>
          <input
            value={year}
            onChange={(e) => setYear(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            type="number"
            className="form-control"
          />
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              {categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
