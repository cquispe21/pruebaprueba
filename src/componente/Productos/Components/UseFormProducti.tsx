import { FC } from "react";
import InputText from "../../InputText/Index";
import { ProductosRequest } from "../Domain/ProductosRequest";
import { useFormContext } from "react-hook-form";


export const UseFormProductos: FC = () => {

    const { getValues, reset } = useFormContext<ProductosRequest>();


    const handleConsultar = () => {
        const params: ProductosRequest = { ...getValues() };
        console.log("Datos" + JSON.stringify(params));
        alert(JSON.stringify(params));
      };
      const handleReset = () => {
        reset();
      };
  return (
    <div className="border  grid p-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 text-center  ">
      <InputText title="Id:" name="Id" />
      <InputText title="nombre:" name="NombreProducto" />
      <InputText title="Userma,e:" name="Categoria" />


      <div className="lg:text-right md:text-center">
        <button
          title="boton"
          className="border  rounded-xl p-2 m-2 bg-blue-400"
          onClick={handleConsultar}
        >
          Consultar
        </button>
        <button
          title="boton"
          onClick={handleReset}

          className="border  rounded-xl p-2 m-2 bg-blue-400 "
        >
          Limpiar
        </button>
      </div>
    </div>
  );
};
