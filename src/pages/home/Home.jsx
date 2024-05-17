import Products from "../../components/products/Products";
import useFetch from "../hooks/UseFetch";

const Home = () => {
  let { data } = useFetch("/products");
  return (
    <div className="home">
      <h2>Home</h2>
      <Products isAdmin={false} data={data} />
    </div>
  );
};

export default Home;
