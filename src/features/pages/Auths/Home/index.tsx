import React, { useMemo, useState } from "react";
const HomePage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState<any>([]);

  const submit = () => {
    setProducts([...products, { name, price: +price }]);
  };

  const total = useMemo(() => {
    products.reduce((prev: any, curr: any) => {
      console.log("tinh toan lai....");

      return prev + curr.price;
    }, 0);
  }, [products]);

  return (
    <>
      <div>
        <input
          value={name}
          type="text"
          placeholder="name.."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={price}
          type="text"
          placeholder="price.."
          onChange={(e) => setPrice(e.target.value)}
        />
        {products.map((item: any) => {
          return (
            <div>
              {item.name} - {item.price}
            </div>
          );
        })}
        total : {total}
        <button onClick={submit}>submit</button>
      </div>
    </>
  );
};
export default HomePage;
