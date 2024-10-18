import { useTranslation } from 'react-i18next';

import { Delete, Edit } from './Icons';

export default function ItemsTable({ items, setItem, onDelete }) {
  const { t } = useTranslation();

  return (
    <>
      {items.length === 0 ? (
        <p className="text-center">{t('global.noRecordsFound')}</p>
      ) : (
        <>
          <table className="w-full border-collapse hidden md:table">
            <thead className="uppercase bg-gray-700 text-gray-400">
              <tr>
                <th className="border p-2">ID</th>
                <th className="border p-2">{t('items.name')}</th>
                <th className="border p-2">{t('items.description')}</th>
                <th className="border p-2">{t('items.actions')}</th>

              </tr>
            </thead>
            <tbody>
              {items.map(note => (
                <tr key={note._id}>
                  <td className="border p-2">{note._id}</td>
                  <td className="border p-2">{note.name}</td>
                  <td className="border p-2">{note.description}</td>
                  <td className="border p-2 flex justify-center">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setItem(note)} 
                        className="p-2 rounded hover:scale-110 transition duration-300"
                      >
                       <Edit color="#2b5ac0"/>
                      </button>
                      <button 
                        onClick={() => onDelete(note._id)} 
                        className="p-2 rounded hover:scale-110 transition duration-300"
                      >
                        <Delete color="#c02b2b"/>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="grid gap-5 md:hidden">
            {items.map(note => (
              <div key={note._id} className="bg-gray-100 border border-gray-300 rounded-lg p-4 shadow">
                <div className="flex justify-between">
                  <div>
                    <strong>ID:</strong> {note._id}
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setItem(note)} 
                      className="p-2 rounded hover:scale-110 transition duration-300"
                    >
                      <Edit color="#2b5ac0"/>
                    </button>
                    <button 
                      onClick={() => onDelete(note._id)} 
                      className="p-2 rounded hover:scale-110 transition duration-300 "
                    >
                      <Delete color="#c02b2b"/>
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  <div><strong>{t('items.name')}:</strong> {note.name}</div>
                  <div><strong>{t('items.description')}:</strong> {note.description}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};