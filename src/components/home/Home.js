import React, { useState, useEffect, useRef } from "react";
import { ApiWebURL, ApiWebImagesURL } from "../../utils";
import { fetchData } from "../../utils/fetchData";
import { FaRegCalendarAlt, FaShoppingBasket } from "react-icons/fa";
import { BsPlay, BsFillGeoAltFill } from "react-icons/bs";
import "../../styles/home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [datos, setDatos] = useState([]);
  const [textoBuscar, setTextoBuscar] = useState("");

  const btnBuscarRef = useRef();

  useEffect(() => {
    leerServicio();
    // btnBuscar false click in 5 seconds
    setTimeout(() => {
      btnBuscarRef.current.click();
    }, 2000);
  }, []);

  const leerServicio = async () => {
    const rutaServicio = ApiWebURL;
    const data = await fetchData(rutaServicio);
    setProducts(data.slice(0, 30));
    // console.log(data.slice(0, 10))
  };

  const buscar = () => {
    let datosFiltrados = products.filter((item) => {
      return textoBuscar === ""
        ? true
        : item["idproducto"].toLowerCase().indexOf(textoBuscar.toLowerCase()) >
            -1 ||
            item["nombre"].toLowerCase().indexOf(textoBuscar.toLowerCase()) >
              -1 ||
            item["precio"].toLowerCase().indexOf(textoBuscar.toLowerCase()) >
              -1 ||
            item["preciorebajado"]
              .toLowerCase()
              .indexOf(textoBuscar.toLowerCase()) > -1 ||
            item["detalle"].toLowerCase().indexOf(textoBuscar.toLowerCase()) >
              -1;
    });
    setDatos(datosFiltrados);
  };

  const agregarCarrito = (item) => {
    item.cantidad = 1;
    console.log(item);
    let carrito = [];
    if (sessionStorage.getItem("carrito")) {
        carrito = JSON.parse(sessionStorage.getItem("carrito"));
        let index = -1;
        for (let i = 0; i < carrito.length; i++) {
            let itemCarrito = carrito[i];
            if (itemCarrito.idproducto === item.idproducto) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            carrito.push(item);//Así se agrega un elemento a un arreglo
            sessionStorage.setItem("carrito", JSON.stringify(carrito));
        }
        else {
            let iCarrito = carrito[index]
            iCarrito.cantidad++
            carrito[index] = iCarrito;
            sessionStorage.setItem("carrito", JSON.stringify(carrito));
        }
    }
    else {
        carrito.push(item);//Así se agrega un elemento a un arreglo
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
    }
}

  const hero = () => (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://www.vivatheme.com/wp-content/uploads/sites/2/2022/05/event-intro.jpg?id=" className="d-block w-100 max-height-img" alt="..." />
          <div className="carousel-overlay bg-overlay h-100"></div>
          <div className="carousel-caption carousel-text d-none d-md-block">
            <h5 className="carousel-title pb-2">Gain the experience<br/>of a lifetime </h5>
            <h6 className="carousel-subtitle pb-4">Increase your efficiencies, and create a better experience for everyone involved.</h6>
            <button className="carousel-button">Register Now</button>
          </div>
          <div className="play-video-container">
            <span className="play-video d-flex justify-content-center align-items-center"><BsPlay /></span>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://www.vivatheme.com/wp-content/uploads/sites/2/2022/05/event-intro-2.jpg" className="d-block w-100 max-height-img" alt="..." />
          <div className="carousel-overlay bg-overlay h-100"></div>
          <div className="carousel-caption carousel-text d-none d-md-block">
            <h5 className="carousel-title pb-2">Gain the experience<br/>of a lifetime</h5>
            <h6 className="carousel-subtitle pb-4">Some representative placeholder content for the second slide.</h6>
            <button className="carousel-button">Register Now</button>
          </div>
          <div className="play-video-container  ">
            <span className="play-video d-flex justify-content-center align-items-center"><BsPlay /></span>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );

  const techSpecs = () => (
    <div className="content-tech-specs d-flex justify-content-center align-items-center">
      <div className="tech-specs d-flex justify-content-evenly align-items-center">
        <div className="tech-specs__images">
          <img
            src="https://www.vivatheme.com/wp-content/uploads/sites/2/2022/05/event-about-2.jpg"
            alt="Beoplay A1 Music System"
            width="400"
            height="418"
            id="image1"
          />
          <img
            src="https://www.vivatheme.com/wp-content/uploads/sites/2/2022/05/event-about-1.jpg"
            alt="Beoplay A1 Music System"
            width="400"
            height="418"
            id="image2"
          />
        </div>
        <div className="tech-specs__text">
          <span className="overline-gradient-color">OUTPACE YOUR COMPETITION</span>
          <h2 className="tech-specs__title">
            Get access to the full
            <br />
            conference expirience.
          </h2>
          <h2 className="tech-specs__subtitle">
            Use this opportunity to hone your skills and delve into the cutting
            edge tomorrow technology.
          </h2>
          <p className="text-specs__icons">
            <BsFillGeoAltFill className="fs-1 text-danger" /> <span className="fw-bold">Where</span>
            <br />
            112 W 34th St, Manhattan, NY
          </p>
          <p className="text-specs__icons">
            <FaRegCalendarAlt className="fs-1 text-danger" /> <span className="fw-bold">When</span>
            <br />
            18-22 December 2022 10:00-17:00
          </p>
        </div>
      </div>
    </div>
  );

  const section = () => (
    <div className="content-section w-100 d-flex justify-content-center align-items-center">
      <div className="section w-100 d-flex justify-content-center align-items-center text-center">
        <div className="section__overlay w-100 h-100 gradient-overlay"></div>
        <div className="section__image">
          <img src="https://www.vivatheme.com/wp-content/uploads/sites/2/2022/05/event-intro-2.jpg" alt="Imagen" />
        </div>
        <div className="section__text">
          <p className="section__title text-white">HURRY UP & REGISTER</p>
          <div className="section__subtitle">
            <h2 className="text-center text-white">
              Not yet registered?
              <br />
              Hurry up!
            </h2>
          </div>
          <div className="section__countdown">
            <div className="countdown">
              <ul className="fs-68 text-white fw-bold d-flex justify-content-center align-items-center">
                <li className="d-flex flex-column p-4">
                  <span className="countdown__number">381</span>
                  <span className="countdown__text fs-4">Days</span>
                </li>
                <li className="d-flex flex-column p-4">
                  <span className="countdown__number">14</span>
                  <span className="countdown__text fs-4">Hours</span>
                </li>
                <li className="d-flex flex-column p-4">
                  <span className="countdown__number">33</span>
                  <span className="countdown__text fs-4">Minutes</span>
                </li>
                <li className="d-flex flex-column p-4">
                  <span className="countdown__number">47</span>
                  <span className="countdown__text fs-4">Seconds</span>
                </li>
              </ul>
            </div>
          </div>
          <button className="section__button">Register Now</button>
        </div>
      </div>
    </div>
  );

  const sectionDetails = () => (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 m-5">
      {datos.map((item) => {
        return (
          <div className="col" key={item.idproducto}>
            <div
              className={
                item.preciorebajado !== "0"
                  ? "card h-100 bg-warning"
                  : "card h-100"
              }
            >
              <img
                src={ApiWebImagesURL + item.imagenchica}
                className="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <span className="card-text me-2">
                  S/{" "}
                  {item.preciorebajado === "0"
                    ? parseFloat(item.precio).toFixed(2)
                    : parseFloat(item.preciorebajado).toFixed(2)}
                  <span className="precio-lista">
                    {item.preciorebajado !== "0"
                      ? "S/" + parseFloat(item.precio).toFixed(2)
                      : ""}
                  </span>
                </span>
                <span className="text-end cursor-pointer" onClick={() => agregarCarrito(item)}>
                  <FaShoppingBasket />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const buscadorSection = () => (
    <div className="container pt-5">
      <h2>Productos</h2>

      <div className="mb-3 d-flex">
        <input
          type="text"
          placeholder="Ingrese expresión a buscar"
          className="form-control"
          value={textoBuscar}
          onChange={(event) => {setTextoBuscar(event.target.value); buscar();}}
        />
        <button className="btn btn-primary" ref={btnBuscarRef} onClick={() => buscar()}>
          Buscar
        </button>
      </div>
    </div>
  );


  return (
    <div className="">
      <>
        {hero()}
        {techSpecs()}
        {section()}
        {buscadorSection()}
        {sectionDetails()}
      </>
    </div>
  );
}

export default Home;
