import '../../styles/ItemForms.css';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

const ItemForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <thead>
            <tr>
              <td align="center" colSpan={2}>
                <h3>New Item Form</h3>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label>Name</label>
              </td>
              <td>
                <input {...register('name', { required: true })} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Descripcion</label>
              </td>
              <td>
                <input {...register('description', { required: true })} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Price</label>
              </td>
              <td>
                <input
                  type="number"
                  {...register('price', { required: true })}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Image</label>
              </td>
              <td>
                <input {...register('image', { required: true })} type="file" />
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
