import { useSelector, useDispatch } from "react-redux";
import { deleteString, selectMassive } from "./prodlistSlice";
import { Tempsum, Tovari, Quantity, Payornot } from "./prodlistfunc";

export function Prodlist() {
  const table = useSelector(selectMassive);
  const dispatch = useDispatch();

  var prodlist = [];
  for (let i = 0; i < table.length; i++) {
    prodlist.push(
      <tr key={table[i].num}>
        <td>{table[i].dataReg}</td>
        <td>{table[i].kioskName}</td>
        <td>{table[i].chequeType === 0 ? "Продажа" : "Возврат"}</td>
        <td>
          <Payornot pays={table[i].pays} sum={table[i].sum} />
        </td>
        <td>
          <Tempsum pays={table[i].pays} />
        </td>
        <td>{table[i].sum / 100}</td>
        <td>
          <Quantity position={table[i].positions} />
        </td>
        <td>
          <Tovari names={table[i].positions} />
        </td>
        <td>
          <button
            onClick={() => dispatch(deleteString(i))}
            className="delButton"
          >
            Удалить
          </button>
        </td>
      </tr>
    );
  }

  return prodlist;
}
