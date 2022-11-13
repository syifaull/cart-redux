// import { useSelector } from 'react-redux';
import { useGetAllProductsQuery } from "../features/productsApi";
import HomeCard from "./HomeCard";

const Home = () => {
  // const { items, status } = useSelector(state => state.products)
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <div className="container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured...</p>
      ) : (
        <>
          <h2>Limited Edition</h2>
          <div className="row d-flex">
            {data?.map((product) => {
              return (
                <div key={product.id} className='col'>
                  <HomeCard
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    desc={product.desc}
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
