import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QTY</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://t-static.dafiti.com.br/-cUdxcDpEwwiP7xqPY8AL4XXTN8=/fit-in/333x483/dafitistatic-a.akamaihd.net%2fp%2fskechers-t%25c3%25aanis-skechers-go-run-600-defiance-preto-0642-3854764-1-product.jpg"
                alt="Tênis Rocket Purple"
              />
            </td>
            <td>
              <strong>Tênis Rocket Purple</strong>
              <span>$ 129,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7169c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7169c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>$ 258,80</strong>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdDelete size={20} color="#7169c1" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finished Order</button>
        <Total>
          <span>TOTAL</span>
          <strong>$ 1.920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
