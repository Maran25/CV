import { useState } from "react";
import { Dialog } from "@headlessui/react";

interface Item {
  item: string;
  quantity: number;
  price: number;
}

function App() {
  const [addItem, setAddItem] = useState<Item>({
    item: "",
    quantity: 0,
    price: 0,
  });
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [data, setData] = useState<Array<Item>>([
    { item: "Item 1", quantity: 29, price: 100 },
    { item: "Item 2", quantity: 47, price: 150 },
    { item: "Item 3", quantity: 80, price: 230 },
  ])
  
  function handleSetData(e: any) {
    setAddItem({...addItem, [e.target.name]: e.target.value})
  }

  return (
    <div className="App">
      <Dialog
        open={isDialogOpen}
        className="relative z-50"
        onClose={() => setIsDialogOpen(false)}
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className={"bg-white p-8 rounded-xl w-4/12"}>
            <form className="flex flex-col space-y-5 w-full">
              <input
                type="text"
                className="bg-slate-100 p-3 rounded-md"
                onChange={handleSetData}
                name="item"
                placeholder="Item Name"
                />
              <input
                type="number"
                className="bg-slate-100 p-3 rounded-md"
                onChange={handleSetData}
                name="quantity"
                placeholder="No of Quantity"
                />
              <input
                type="number"
                onChange={handleSetData}
                className="bg-slate-100 p-3 rounded-md"
                name="price"
                placeholder="Price Per Unit"
              />
            </form>
            <div className="flex justify-center items-center mt-8 space-x-5">
              <button className="bg-blue-400 px-4 py-2 text-white font-semibold rounded-md" onClick={() => {setIsDialogOpen(false); data.push(addItem)}}>Add</button>
              <button className="bg-red-400 px-4 py-2 text-white font-semibold rounded-md" onClick={() => setIsDialogOpen(false)}>Cancel</button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
      <button onClick={() => setIsDialogOpen((prev) => !prev)}>Add</button>
      <table>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        {data.map((data) => (
          <tr>
            <td>{data.item}</td>
            <td>{data.quantity}</td>
            <td>{data.price}</td>
            <td>{data.price * data.quantity}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
