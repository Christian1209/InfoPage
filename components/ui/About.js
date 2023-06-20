import React from 'react'
import { Image } from 'react-bootstrap'

export const About = () => {
  return (
    <div className='d-flex w-100 mt-5 align-items-center bg-dark'>
        <div className='w-100 px-5 position-relative bg-light'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 mb-4 mb-lg-0'>
                        <div className='text-center'>
                        <Image
                            className='img-fluid py-5'  style={{ marginLeft: '5%'}}
                            src={"/assets/img/about.jpg"}
                            width={600}
                            height={600}
                        />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 py-5'>
                        <h2 className='fs-1 text-muted  border-start  my-4 px-3 border-dark'>
                            CONOCE MAS DE NOSOTROS
                        </h2>
                        <div className='mb-2'></div>
                        <div className='col-12 col-md-4 mb-2 mb-md-0 w-75'>
                            <div>
                                <h4 className=' mx-3 w-100'>SOMOS UNA EMPRESA BLABNLKA BLA BLA BLA BLA BLA  BLA BLA BLA BLA bla bla bla bla blaBLA BLA BLA BLA BLA  BLA BLA BLA BLA  </h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
