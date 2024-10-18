import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";

import { createItem, updateItem } from '../../api/items';

export default function ItemModal({ item, setItem }){
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const onSubmit = async (formData) => {
    try {
      if (item._id) {
        await updateItem({
          _id: item._id,
          name: formData.name,
          description: formData.description
        });
      } else {
        await createItem({
          name: formData.name,
          description: formData.description
        });
      }
      setItem(null);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[var(--bg-color1)] p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl mb-4">
          {item._id ? `${t('items.editItem')} #${item._id}` : t('items.createItem')}
        </h2>
        <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="text"
            defaultValue={item.name}
            placeholder={t("items.name")}
            {...register("name", {
              required: t("global.inputRequired"),
              minLength: {
                value: 5,
                message: t("items.nameRequirements"),
              },
              maxLength: {
                value: 20,
                message: t("items.nameRequirements"),
              },
            })}
            className="border border-gray-300 p-2 rounded"
          />
          {errors.name && (
            <span className="text-red-500 text-xs">
              {errors.name.message}
            </span>
          )}
          <textarea
            type="text"
            defaultValue={item.description}
            placeholder={t("items.description")}
            {...register("description", {
              required: t("global.inputRequired"),
              minLength: {
                value: 5,
                message: t("items.descriptionRequirements"),
              },
              maxLength: {
                value: 100,
                message: t("items.descriptionRequirements"),
              },
            })}
            className="border border-gray-300 p-2 rounded"
          />
          {errors.description && (
            <span className="text-red-500 text-xs">
              {errors.description.message}
            </span>
          )}
          
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={()=>setItem(null)}
              className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500"
            >
              {t('global.close')}
            </button>
            <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
              {t('global.save')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

