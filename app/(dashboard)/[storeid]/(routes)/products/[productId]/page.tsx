import prismadb from "@/lib/prismadb";

import { ProductForm } from "./components/product-form";

const ProductPage = async ({
  params
}: {
  params: { productId: string, storeid: string }
}) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId
    },
    include: {
      images: true
    }
  });

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeid,
    }
  });

  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeid,
    }
  });

  const colours = await prismadb.colour.findMany({
    where: {
      storeId: params.storeid,
    }
  });

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm categories={categories} colours={colours} sizes={sizes} initialData={product} />
      </div>
    </div>
  );
}

export default ProductPage;