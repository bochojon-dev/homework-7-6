import { useState } from "react";
import Products from "../../../components/products/Products";
import useFetch from "../../hooks/UseFetch";

const ManageProducts = () => {
  const [reload, setReload] = useState(true);
  let { data } = useFetch("/products", reload);
  return (
    <div>
      <h2 style={{ paddingTop: 40 }}>ManageProducts</h2>
      <Products setReload={setReload} isAdmin={true} data={data} />
    </div>
  );
};

export default ManageProducts;
