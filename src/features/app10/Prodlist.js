import { useSelector, useDispatch } from "react-redux";
import { deleteString, selectMassive } from "./prodlistSlice";
import { Tempsum, Tovari, Quantity, Payornot } from "./prodlistfunc";

export function Prodlist() {
  const table = useSelector(selectMassive);
  const dispatch = useDispatch();

  return table.map(function (item) {
    return (
      <tr key={item.num}>
        <td>{item.dataReg}</td>
        <td>{item.kioskName}</td>
        <td>{item.chequeType === 0 ? "Продажа" : "Возврат"}</td>
        <td>
          <Payornot pays={item.pays} sum={item.sum} />
        </td>
        <td>
          <Tempsum pays={item.pays} />
        </td>
        <td>{item.sum / 100}</td>
        <td>
          <Quantity position={item.positions} />
        </td>
        <td>
          <Tovari names={item.positions} />
        </td>
        <td>
          <button
            onClick={() => dispatch(deleteString(item.num))}
            className="delButton"
          >
            Удалить
          </button>
        </td>
      </tr>
    );
  });
}
