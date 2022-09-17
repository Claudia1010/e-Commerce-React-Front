import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import "./Cart.scss";
import { Button, Image, Modal,Table } from "react-bootstrap";

export const Cart = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [cart, setCart] = value.cart;
  const [total] = value.total;

  const tooglefalse = () => {
    setMenu(false);
  };
//iconos agregar y quitar del carro
  const reduce = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
      setCart([...cart]);
    });
  };
  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id && item.quantity < item.stock) {
        item.quantity += 1;
      }
      setCart([...cart]);
    });
  };

  const removeProduct = (id) => {
    if (window.confirm("¿Quieres quitar del carrito este producto?")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);//el método splice quita del array el elemento en la pos indicada en index
        }
      });
      setCart([...cart]);
    }
  };

  const addOrder = value.addOrder;

  return (
    <Modal show={menu} onHide={tooglefalse} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length === 0 ? (
          <h6 style={{ textAlign: "center", fontSize: "1.5rem" }}>
            Carrito Vacio
          </h6>
        ) : (
          <>
            <Table className="cart__table">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Producto</th>
                  <th>Precio unitario</th>
                  <th>Subtotal</th>
                  <th>Cantidad</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <>
                    <tr>
                      <td>
                        <Image
                          fluid
                          width="50"
                          src={product.image}
                          alt={product.title}
                        />
                      </td>
                      <td>
                        <b>{product.name}</b>
                      </td>
                      <td>
                        <b className="price">€{product.price}</b>
                      </td>
                      <td>
                        <b className="price">
                          €{product.price * product.quantity}
                        </b>
                      </td>
                      <td>
                        <box-icon
                          onClick={() => increase(product.id)}
                          name="up-arrow"
                          type="solid"
                        />
                        <h4 className="quantity">{product.quantity}</h4>
                        <box-icon
                          onClick={() => reduce(product.id)}
                          name="down-arrow"
                          type="solid"
                        />
                      </td>
                      <td>
                        <Button
                          size={"sm"}
                          variant="danger"
                          onClick={() => removeProduct(product.id)}
                        >
                          <box-icon name="trash" color="white" />
                        </Button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <b>Total: €{total}</b>
        {cart.length > 0 && 
          <Button onClick={() => addOrder()} variant="success">
            Pagar
          </Button>
        }
      </Modal.Footer>
    </Modal>
  );
};
