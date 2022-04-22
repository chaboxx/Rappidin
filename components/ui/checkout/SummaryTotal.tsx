import { FC } from "react"

import { Total } from "../../../interfaces/pedido";


interface Props {
  total : Total;
}

export const SummaryTotal:FC<Props> = ({total}) => {
  return (
    <div>
      <div>
        <p>Item Total</p>
        <p>${total.itemTotal}</p>
      </div>
      <div>
        <p>Restaurant Charges</p>
        <p>${total.charges}</p>
      </div>
      <div>
        <p>Delivery Fee</p>
        <p>${total.deliveryFee}</p>
      </div>
      <div>
        <p>Total Discount</p>
        <p>${total.total}</p>
      </div>
    </div>
  )
}
