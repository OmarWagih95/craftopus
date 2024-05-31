import React from 'react'

function CartItem({item}) {
    console.log(item.price);
  return (
    <li className="flex items-center gap-4">
    <img
      src={item.imgUrl}
      alt=""
      className="size-16 rounded object-cover"
    />

    <div>
      <h3 className="text-sm text-white">{item.title}</h3>

      <dl className="mt-0.5 space-y-px text-[10px] text-gray-400">
        <div>
          <dt className="inline">Quantity:</dt>
          <dd className="inline">{item.quantity}</dd>
        </div>

        <div>
          <dt className="inline">Price:</dt>
          <dd className="inline">{item.price}</dd>
        </div>
      </dl>
    </div>
  </li>
  )
}

export default CartItem