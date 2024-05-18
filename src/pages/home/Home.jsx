import Products from "../../components/products/Products";
import useFetch from "../hooks/UseFetch";

const Home = () => {
  let { data } = useFetch("/products");
  let { data2 } = useFetch("/users");
  return (
    <div className="home">
      <h2>Home</h2>
      <Products isAdmin={false} data2={data2} data={data} />
    </div>
  );
};

export default Home;
