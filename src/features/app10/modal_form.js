import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { addString } from "./prodlistSlice";
import { v4 as uniqId } from 'uuid';
import validator from 'validator';



export function Formadd() {
  const dispatch = useDispatch();

  const [showModal, setModal] = useState(false);
  const [bayDate, setDate] = useState("");
  const [kioskName, setKiosk] = useState("Киоск № 11");
  const [typePay, setType] = useState(0);
  const [payDone, setPay] = useState(0);
  const [paySum, setSum] = useState(0);
  const [payStatus] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [namesList, setNames] = useState("");
  

  const [inputsValid, setValid] = useState({
    date: false,
    kiosk: validator.isLength(kioskName, {min:5, max:40}),
    pay: false,
    sum: false,
    quan: false,
    names: false,
  });



const formValid = values =>{
  if(values.date === true && values.kiosk === true && values.pay === true && values.sum === true && values.quan === true && values.names === true  ){
    return false
  }else{
    return true
  }
}



  Modal.setAppElement('#root');


  return (
    <div>
      <button onClick={() => setModal(true)} className="AddButton">
        Добавить +
      </button>

      <Modal isOpen={showModal} contentLabel="Minimal Modal Example">
        <form>
          <label>
            <span>Дата покупки:</span>
            <input
              name="bayDate"
              type="datetime-local"
              value={bayDate}
              onChange={(event) => setDate(event.target.value)}
              onInput={(event) => setValid({...inputsValid, date: validator.isISO8601(event.target.value)} )}
            />
            <span className="warning">{ inputsValid.date === true ? '' : 'Неверный формат даты'}</span>
          </label>
          <br />
          <label>
            <span>Киоск:</span>
            <input
              name="kioskName"
              type="text"
              value={kioskName}
              onChange={(event) => setKiosk(event.target.value)}
              onInput={(event) => setValid({...inputsValid, kiosk: validator.isLength(event.target.value, {min:5, max:40})} )}
            />
            <span className="warning">{ inputsValid.kiosk === true ? '' : 'Название киоска должно быть от 5 до 40 символов'}</span>
          </label>
          <br />
          <label>
            <span>Тип:</span>
            <select
              name="typePay"
              value={typePay}
              onChange={(event) => setType(event.target.value)}

            >
              <option value="0">Продажа</option>
              <option value="1">Возврат</option>
            </select>
          </label>
          <br />
          <label>
            <span>Оплата:</span>
            <input
              name="payDone"
              type="number"
              value={payDone}
              onChange={(event) => setPay(event.target.value)}
              onInput={(event) => setValid({...inputsValid, pay: validator.isInt(event.target.value+'',{min:1, max: 5000})} )}
            />
            <span className="warning">{ inputsValid.pay === true ? '' : 'Значение должно быть действительным числом от 1 до 5000'}</span>
          </label>
          <br />
          <label>
            <span>Сумма:</span>
            <input
              name="paySum"
              type="number"
              value={paySum}
              onChange={(event) => setSum(event.target.value)}
              onInput={(event) => setValid({...inputsValid, sum: validator.isInt(event.target.value+'',{min:1, max: 5000})} )}
            />
            <span className="warning">{ inputsValid.sum === true ? '' : 'Значение должно быть действительным числом от 1 до 5000'}</span>
          </label>
          <br />
          <label>
            <span>Кол-во товара:</span>
            <input
              name="quantity"
              type="number"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              onInput={(event) => setValid({...inputsValid, quan: validator.isInt(event.target.value+'',{min:1, max: 50})} )}
            />
            <span className="warning">{ inputsValid.quan === true ? '' : 'Значение должно быть действительным числом от 1 до 50'}</span>
          </label>
          <br />
          <label>
            <span>Товары:</span>
            <input
              name="namesList"
              type="text"
              value={namesList}
              onChange={(event) => setNames(event.target.value)}
              onInput={(event) => setValid({...inputsValid, names: validator.isAlpha(event.target.value, ['ru-RU']) })}
            />
            <span className="warning">{ inputsValid.names === true ? '' : 'Название товара должно быть на русском языке'}</span>
          </label>

        </form>
        <button
          onClick={() =>
            dispatch(
              addString({
                dataReg: bayDate,
                num: uniqId(),
                kioskName: kioskName,
                chequeType: typePay,
                pays: [{ sum: payDone * 100, payType: payStatus }],
                sum: paySum * 100,
                positions: [{ name: namesList, quantity: parseInt(quantity) }],
              })
            )
          }
          className="AddButton"
          disabled={formValid(inputsValid)}
        >
          Добавить
        </button>
        <button onClick={() => setModal(false)} className="closeButton"  >
          Закрыть
        </button>
      </Modal>
    </div>
  );
}
