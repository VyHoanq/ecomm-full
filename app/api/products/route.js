import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      barcode,
      categoryId, 
      farmerId,   
      isWholesale,
      productCode,
      productPrice,
      salePrice,
      slug,
      sku,
      title,
      description,
      imageUrl,
      isActive,
      tags,
      unit,
      wholesalePrice,
      wholesaleQty,
      productStock,
      qty,
    } = await req.json();

    const parsedWholesaleQty = parseInt(wholesaleQty) || 0;
    const parsedProductStock = parseInt(productStock) || 0;
    const parsedQty = parseInt(qty) || 0;

    const existingProduct = await db.product.findUnique({
      where: { slug },
    });

    if (existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: "Product already exists",
        },
        { status: 409 }
      );
    }

    const newProduct = await db.product.create({
      data: {
        barcode,
        productCode,
        productPrice: parseFloat(productPrice),
        salePrice: parseFloat(salePrice),
        slug,
        sku,
        title,
        description,
        imageUrl,
        isActive,
        tags,
        unit,
        isWholesale,
        wholesalePrice: parseFloat(wholesalePrice),
        wholesaleQty: parsedWholesaleQty,
        productStock: parsedProductStock,
        qty: parsedQty,
        category: {
          connect: {
            id: categoryId
          }
        },
        user: {
          connect: {
            id: farmerId
          }
        }
      },
    });

    return NextResponse.json(
      { data: newProduct, message: "Product created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error.message);
    return NextResponse.json(
      { message: "Failed to create product", error: error.message },
      { status: 500 }
    );
  }
}