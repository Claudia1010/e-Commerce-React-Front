import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "../../../components/AuthUser/AuthUser";

const endpoint = "https://ch-laravel-react-e-commerce.herokuapp.com/api";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState(0);
  const [categoryId, setCategoryId] = useState(1);
  const navigate = useNavigate();
  const {http} = AuthUser();

  const [ categories, setCategories ] = useState( [] )
    
    useEffect( () => {
      getAllCategories()
      }, [])
    
    const getAllCategories = async () => {
        const response = await axios.get(`${endpoint}/categories`)
        // console.log(response)
        setCategories(response.data.data)
    }

  const store = async (e) => {
    e.preventDefault();
    await http.post(`${endpoint}/addProduct`, {
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
          alert("Producto creado correctamente")   
          navigate("/products");
      } else {
          alert("Ha habido un error creando el producto")
      }
  })
  };

  return (
    <div>
      <h3>Create product</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Artist</label>
          <input
            required
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Year</label>
          <input
            required
            value={year}
            onChange={(e) => setYear(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            required
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select className='form-select' value={categoryId} onChange={(e)=>setCategoryId(e.target.value)}>
          { categories.map( (category) => (
                <option value={category.id} key={category.id}>{category.name}</option>
          ))}
         </select>     
        </div>
        <button type="submit" className="btn btn-primary">
          Store
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
