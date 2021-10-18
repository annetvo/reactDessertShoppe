import { React, useState, useEffect } from 'react';
import Butter from "buttercms";
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';

const butter = Butter(process.env.REACT_APP_BUTTER_ECOMMERCE);

const Shoppe = () => {


    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }


    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await butter.content.retrieve(["goodies"], {
                order: "id",
            });
            const { data } = await res.data;
            const allProducts = data.goodies;
            setProducts(allProducts);
        }
        fetchData();
    }, []);


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 my-1 py-5">
                        <h1 className="display-6 fw-bolder text-center">some sweets that aren't as sweet as you 🥺👉👈</h1>
                        <div>
                            {products.map((product) => (
                                <div className="col-lg-12 my-5">
                                    <div class="card h-100 text-center p-4" key={product.id}>
                                        <img class="card-img-top" src={product.image} alt="Card image cap"/>
                                        <div class ="card-body">
                                        <h5 class ="card-title">{product.name}</h5>
                                        <p class ="card-text">{product.description}</p>
                                        <p class ="card-text">{product.pun}</p>
                                        <p class ="card-text">${product.price}</p>
                                        <button className="btn btn-outline-dark" onClick={()=>addProduct(product)}>
                                        Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shoppe;
