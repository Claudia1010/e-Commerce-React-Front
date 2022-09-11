import AuthUser from "../components/AuthUser/AuthUser";
import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

const endpoint = 'https://ch-laravel-react-e-commerce.herokuapp.com/api'

export const DataContext = createContext();

export const DataProvider = (props) => {
	const [products, setProducts] = useState([]);
	const [menu, setMenu] = useState(false)
	const [cart, setCart] =useState([])
	const [total, setTotal] = useState(0)

    //guardamos los headers de la llamada en http, y guarda user en getUser
    const {http, getUser} = AuthUser();

	console.log(cart)
        
        useEffect( () => {
          getAllProducts()
          }, [])
        
        const getAllProducts = async () => {
            const response = await axios.get(`${endpoint}/products`)
            setProducts(response.data.data)
        }

        
        const addOrder = async () => {
            const user = getUser();

            const arrays = cart.map((item) => {
                  return {
                    product_ids: item.id,
                    quantities: item.quantity,
                    prices: item.price * item.quantity,
                  };
              });
              
            const product_ids = arrays.map((item) => {
                return item.product_ids
            })
            const quantities = arrays.map((item) => {
                return item.quantities
            })
            const prices = arrays.map((item) => {
                return item.prices
            })

            const ammount = prices.reduce((prev, next) => prev + next, 0);
            console.log("todo", {'user_id': user.id,
            'payment_method_id': 1,
            'carrier_id': 1,
            'ammount': ammount,
            'prices': prices,
            'quantities': quantities,
            'product_ids': product_ids})
            
            //hace la llamada con los header de http y pasamos por body los campos requeridos
            http.post(`${endpoint}/addOrder`,
            { 
                'user_id': user.id,
                'payment_method_id': 1,
                'carrier_id': 1,
                'ammount': ammount,
                'prices': prices,
                'quantities': quantities,
                'product_ids': product_ids
             }
             ).then((res)=>{
                console.log(res);
                if (res.data.success) {
                    alert("Pedido realizado correctamente")
                } else {
                    alert("Ha habido un error preparando el pedido")
                }
            })
        }

 
	const addCart = (id, quantity) =>{
        //pasa por cada elemnto del carrito y si esta el id que le pasamos devuelve un booleano (every)
		const check = cart.every(item =>{
			return item.id !== id
		})
		if(check){
            //recorremos el arreglo products, filtramos el producto que coincida con el id pasado y lo devolvemos product, si es true 
			const data = products.filter(product =>{
                //añadimos el atributo quantity al objeto producto que tenemos en el carrito para poder compararlo luego con stock por ej
                product.quantity = quantity;
				return product.id === id
			})
			setCart([...cart, ...data])
            alert("Producto añadido exitosamente")
		}else{
			alert("Este producto ya estaba en el carrito")
		}
	}
    //recupera el carrito guardado en localStorage
	useEffect(() =>{
		const dataCart = JSON.parse(localStorage.getItem('dataCart'))
		if(dataCart){
			setCart(dataCart)
		}
	},[])
    //guarda el carrito en localStorage
	useEffect(() =>{
		localStorage.setItem('dataCart', JSON.stringify(cart))
	},[cart])

    //actualiza el monto total del carrito
	useEffect(() =>{
		const getTotal = () =>{
			const res = cart.reduce((prev, item) =>{
				return prev + (item.price * item.quantity)
				// return prev + (item.price)
			},0)
			setTotal(res)
		}
		getTotal()
	},[cart])
	
    //establecemos las props para el resto de sus componentes children de DataContext
	const value = {
		products : [products],
		menu: [menu, setMenu],
		cart: [cart, setCart],
		addCart: addCart,
		addOrder: addOrder,
		total: [total, setTotal]
	}
	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
};