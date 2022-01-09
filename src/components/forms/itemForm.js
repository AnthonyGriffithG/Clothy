import '../../styles/ItemForms.css';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const ItemForm = ({ onSubmit, initialValues, formTitle }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialValues,
  });

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <thead>
            <tr>
              <td align="center" colSpan={2}>
                <h3>{formTitle}</h3>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label>Name</label>
              </td>
              <td>
                <input
                  className="input-text-item-form"
                  {...register('name', { required: true })}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Descripcion</label>
              </td>
              <td>
                <input
                  className="input-text-item-form"
                  {...register('description', { required: true })}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Price</label>
              </td>
              <td>
                <input
                  type="number"
                  className="input-number-item-form"
                  {...register('price', { required: true })}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Image</label>
              </td>
              <td>
                <input
                  {...register('image', { required: false })}
                  type="file"
                  accept="image/*"
                  className="input-file-item-form"
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="center">
                <button type="submit">Create</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default ItemForm;
