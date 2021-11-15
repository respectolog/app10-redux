import React from "react";
import { Prodlist } from "./features/app10/Prodlist";
import { Formadd } from "./features/app10/modal_form.js";
//import { FormNew } from './features/app10/form.js';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <table>
          <thead>
            <tr>
              <th>Дата покупки</th>
              <th>Киоск</th>
              <th>Тип</th>
              <th>Статус оплаты</th>
              <th>Оплата</th>
              <th>Сумма</th>
              <th>Кол-во товара</th>
              <th>Товары</th>
            </tr>
          </thead>
          <tbody>
            <Prodlist />
          </tbody>
        </table>
        <Formadd />
      </div>
    </div>
  );
}

export default App;
