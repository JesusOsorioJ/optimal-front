import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeContextProvider } from '../context/ThemeContext';
import Header from './components/Header';
import ItemsTable from './components/ItemsTable';
import ItemModal from './components/ItemModal';
import { deleteItem, getItems } from '../api/items';
import Loading from './components/Loading';

const itemsInit = [{
  _id: "123",
  name: "name1",
  description: "Description1"
}]

function App() {
  const storedTheme = localStorage.getItem('theme');
  const { t } = useTranslation();

  const [items, setItems] = useState(itemsInit);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if (item ==null) getAllItems()
  },[item])

  const getAllItems = async () => {
    setLoading(true);
    const res = await getItems()
    if (Array.isArray(res)) setItems(res)
    setLoading(false);
  }

  const onDelete = async(itemID) => {
    const isConfirmed = window.confirm(`${t("items.sureToDelete")} ${itemID}?`);
    if (isConfirmed) {
      await deleteItem(itemID)
      await getAllItems()
    }
  };


  return (
    <ThemeContextProvider>
      <div id={storedTheme ?? "dark"} className="bg-[var(--bg-color1)] text-[var(--text-color)] min-h-screen w-full p-5">
        {loading && <Loading />}
        <Header />
        <button  onClick={()=>setItem({})} className='py-2 px-4 bg-[#2b5ac0] text-white rounded mt-6 m-1 hover:scale-110 transition duration-300'>{t("items.createItem")}</button>
        <ItemsTable items={items} setItem={setItem} onDelete={onDelete}/>
        {item && <ItemModal item={item} setItem={setItem} setLoading={setLoading}/>}
      </div>
    </ThemeContextProvider>
  )
}

export default App
