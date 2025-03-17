import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaImage, FaSave } from 'react-icons/fa';

interface FoodForm {
  name: string;
  description: string;
  price: number;
  categoryId: number;
  available: boolean;
  images: File[];
}

type Props = {
  onSubmit: (data: FormData) => void;
};

const FoodForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Omit<FoodForm, 'images'>>();

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    setSelectedFiles(fileArray);

    // Hiển thị preview
    const previewUrls = fileArray.map(file => URL.createObjectURL(file));
    setImagePreviews(previewUrls);
  };

  const handleFormSubmit = (data: Omit<FoodForm, 'images'>) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', data.price.toString());
    formData.append('categoryId', data.categoryId.toString());
    formData.append('available', data.available ? '1' : '0');

    selectedFiles.forEach(file => {
      formData.append('images', file);
    });

    onSubmit(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Thêm món ăn</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <input
          {...register('name', { required: true })}
          placeholder="Tên món ăn"
          className="w-full p-2 border rounded text-black"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">Tên món ăn là bắt buộc</p>
        )}

        <textarea
          {...register('description')}
          placeholder="Mô tả"
          className="w-full p-2 border rounded text-black"
        ></textarea>

        <input
          {...register('price', { required: true, valueAsNumber: true })}
          type="number"
          placeholder="Giá"
          className="w-full p-2 border rounded text-black"
        />
        {errors.price && (
          <p className="text-red-500 text-sm">Giá là bắt buộc</p>
        )}

        <input
          {...register('categoryId', { required: true, valueAsNumber: true })}
          type="number"
          placeholder="ID Danh mục"
          className="w-full p-2 border rounded text-black"
        />
        {errors.categoryId && (
          <p className="text-red-500 text-sm">ID danh mục là bắt buộc</p>
        )}

        <label className="flex items-center space-x-2">
          <input type="checkbox" {...register('available')} />
          <span className="text-black">Món ăn có sẵn</span>
        </label>

        <div className="border p-2 rounded bg-gray-100 flex flex-col items-center">
          <label className="cursor-pointer flex flex-col items-center">
            <FaImage size={30} className="text-gray-500" />
            <span className="text-sm text-gray-600">Chọn ảnh</span>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {imagePreviews.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Preview ${index}`}
                className="w-16 h-16 object-cover rounded"
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center space-x-2"
        >
          <FaSave /> <span>Lưu món ăn</span>
        </button>
      </form>
    </div>
  );
};

export default FoodForm;
