import React, { useEffect, useState } from "react";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    setLoading(true);
    setError();
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setProducts(data);
      })
      .catch((error) => setError("에러가 발생했습니다."))
      .finally(() => setLoading(false));
    return () => {
      console.log("clean up");
    };
  }, [checked]);

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <input
        type="checkbox"
        id="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">할인 상품만 보기</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
