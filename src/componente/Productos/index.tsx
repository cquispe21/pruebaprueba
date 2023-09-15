import { FormProvider, useForm } from "react-hook-form";
import { UseFormProductos } from "./Components/UseFormProducti";
import { ProductosRequest } from "./Domain/ProductosRequest";


function ProductosPage() {

  const initialStateFormProduct: ProductosRequest = {
    Id: 0,
    NombreProducto: "",
    Categoria: "",
  };

  const methods = useForm<ProductosRequest>({
    defaultValues: initialStateFormProduct,
  });

  return (
    <>
      <FormProvider {...methods}>
        <div className="border text-center p-2 gap-2 justify-start bg-white">
          Formulario
          <UseFormProductos />
        </div>
      </FormProvider>
    </>
  );
}

export default ProductosPage;
