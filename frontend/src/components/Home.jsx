// import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/CartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";
import HomeCard from "./HomeCard";

const Home = () => {
  // const { items, status } = useSelector(state => state.products)
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured...</p>
      ) : (
        <>
          <h2 className="text-center">Limited Edition</h2>
          <div className="row d-flex">
            {data?.map((product) => {
              return (
                <div key={product.id} className='col px-4 justify-content-between'>
                  <HomeCard
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    desc={product.desc}
                    addCart = {() => handleAddToCart(product)}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
