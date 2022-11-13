// import { useSelector } from 'react-redux';
import { productsApi, useGetAllProductsQuery } from '../features/productsApi';

const Home = () => {
  // const { items, status } = useSelector(state => state.products)
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <div>
      { isLoading ? (<p>Loading...</p>) : error ? (<p>An error occured...</p>) : (
        <>
        <h2>Limited Edition</h2>
        <div>
          {data?.map((product) => {
            return (
              <div key={product.id}>
                <h3>{productsApi.name}</h3>
                <img src={product.image} alt={product.name}/>
                <p>{product.price}</p>
                <p>{product.desc}</p>
                <button>Add To Cart</button>
              </div>
            )
          })}
        </div>
        </>
      )}
    </div>
  )
}

export default Home