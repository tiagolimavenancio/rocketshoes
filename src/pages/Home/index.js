import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      {[1, 2, 3, 4, 5].map((item, i) => (
        <li key={i}>
          <img
            src="https://t-static.dafiti.com.br/-cUdxcDpEwwiP7xqPY8AL4XXTN8=/fit-in/333x483/dafitistatic-a.akamaihd.net%2fp%2fskechers-t%25c3%25aanis-skechers-go-run-600-defiance-preto-0642-3854764-1-product.jpg"
            alt="Schetchers"
          />

          <strong>Tênis Rocket</strong>
          <span>$ 200,00</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> 3
            </div>
            <span>Add to Cart</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

export default Home;
