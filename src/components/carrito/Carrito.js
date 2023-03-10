import React, { useEffect, useState } from 'react';
import { ApiWebImagesURL } from '../../utils';

function Carrito() {
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    leerDatosCarrito();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const leerDatosCarrito = async () => {
    let datosCarrito = await JSON.parse(sessionStorage.getItem("carrito"));
    setItemsCarrito(datosCarrito);
    calcularTotal(datosCarrito);
    
  }

  const dibujarTabla = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th className='text-end'>Precio</th>
            <th className='text-center'>Cantidad</th>
            <th className='text-end'>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {itemsCarrito.map(item =>
            <tr key={item.idproducto}>
              <td>{item.idproducto}</td>
              <td><img src={ ApiWebImagesURL + item.imagenchica } alt={item.nombre} width="50" /></td>
              <td>{item.nombre}</td>
              <td className='text-end'>{parseFloat(item.precio).toFixed(2)}</td>
              <td className='text-center'>{item.cantidad}</td>
              <td className='text-end'>{(item.precio * item.cantidad).toFixed(2)}</td>
              <td><i className="bi bi-x-lg btnEliminar"
                onClick={() => eliminarItemCarrito(item)}></i></td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr><th colSpan="5" className='text-end'>Total</th><th className='text-end'>S/ {total.toFixed(2)}</th></tr>
        </tfoot>
      </table>
    )
  }

  const eliminarItemCarrito = (item) => {
    //console.log(item);
    let carritoMenos = itemsCarrito.filter(itemC => itemC.idproducto !== item.idproducto);
    setItemsCarrito(carritoMenos);
    sessionStorage.setItem("carrito", JSON.stringify(carritoMenos));
    calcularTotal(carritoMenos);
  }  

  const vaciarCarrito = () => {
    sessionStorage.removeItem("carrito");
    setItemsCarrito(null);
    setTotal(0);
  }

  const calcularTotal = (datosCarrito) => {
    /*
    let acumulador = 0;
    for( let i=0 ; i<datosCarrito.length ; i++){
      acumulador += datosCarrito[i].cantidad * datosCarrito[i].precio 
    }*/
    let totalCarrito = datosCarrito.reduce((acumulador, item) => acumulador + item.cantidad * item.precio, 0);

    setTotal(totalCarrito);
  }


  return (
    <section className='padded'>
      <div className="container">
        <h2>Carrito de compras</h2>
        <div className="row">
          <div className="col-md-10">
            {itemsCarrito === null || itemsCarrito.length === 0
              ?"El carrito está vacío"
              : dibujarTabla()}
          </div>
          <div className="col-md-2">
            <button className='btn btn-danger' onClick={() => vaciarCarrito()}>
              Vaciar carrito</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carrito;