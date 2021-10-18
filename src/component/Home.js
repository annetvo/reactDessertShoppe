import React from 'react'
import Products from './Shoppe'

// rafce

const Home = () => {
    return (
        <div className="hero">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/images/dalgona.jpeg" alt="First slide" />
                        <div className="card-img-overlay">
                            <h5 className="card-title display-1 fw-bolder mb-0 text-white" id="title">an aestheically pleasing bakery</h5>
                            <p></p>
                            <p className="card-text text-white">Created by a talented Korean Woman known as "Cooking Tree", identity was never announced (smart tbh)
                                Content can be found on her <a href="https://www.instagram.com/cooking_tree/" className="text-white" >Instagram</a> and <a href="https://www.youtube.com/channel/UCtby6rJtBGgUm-2oD_E7bzw" className="text-white">Youtube</a>!</p>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Dalgona CupCheeseCake</h2>
                            <p><a href="https://www.youtube.com/watch?v=rUawpuGuwbM" className="text-white">make it at home 🧁 </a></p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img className="d-block w-100" src="/images/lemon.jpeg" alt="Second slide" />
                        <div className="card-img-overlay">
                            <h5 className="card-title display-1 fw-bolder mb-0 text-white">checkered lemon cake</h5>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <p><a href="https://www.youtube.com/watch?v=Va-Cgdvs9_s" className="text-white">make it at home! 🍋</a></p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img className="d-block w-100" src="/images/pom.jpeg" alt="Third slide" />
                        <div className="card-img-overlay">
                            <h5 className="card-title display-1 fw-bolder mb-0 text-white">pomegranate tart</h5>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <p><a href="https://www.youtube.com/watch?v=yxte5KkHf70" className="text-white">make it at home 🍅</a></p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img className="d-block w-100" src="/images/grapefruit.jpeg" alt="Fourth slide" />
                        <div className="card-img-overlay">
                            <h5 className="card-title display-1 fw-bolder mb-0 text-white">grapefruit orange cake</h5>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <p><a href="https://www.youtube.com/watch?v=FjTi14NSf2A" className="text-white">make it at home 🍊</a></p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img className="d-block w-100" src="/images/nood.jpeg" alt="Fifth slide" />
                        <div className="card-img-overlay">
                            <h5 className="card-title display-1 fw-bolder mb-0 text-white">strawberry milk jelly noodle</h5>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <p><a href="https://www.youtube.com/watch?v=He3bLGYhdI4" className="text-white">make it at home 🍓</a></p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img className="d-block w-100" src="/images/cookie.jpeg" alt="Sixth slide" />
                        <div className="card-img-overlay">
                            <h5 className="card-title display-1 fw-bolder mb-0 text-white">soft chocolate chip cookies</h5>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <p><a href="https://www.youtube.com/watch?v=HWvxZLIT828" className="text-white">make it at home 🍪</a></p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>


    )
}

export default Home



