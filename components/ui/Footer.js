import React from "react"

const Footer = () => <footer className="page-footer font-small text-white bg-dark pt-5">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-5 pt-5">
                <h5 className="text-uppercase">SERVICIO A DOMICILIO EN TODAS LAS SUCURSALES</h5>
            </div>

            <hr className=" w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Sucursales</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Normandia</a></li>
                    <li><a href="#!">Origen</a></li>
                    <li><a href="#!">Origen</a></li>
                    <li><a href="#!">Origen</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Redes</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-1">© 2020 Copyright:
        <a> Christian Misael Figueroa Rodríguez</a>
    </div>

</footer>

export default Footer