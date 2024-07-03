"use client"

import { useLovedProducts } from "@/hooks/use-loved-products";
import LovedItemProduct from "./components/loved-item-product";

export default function Page() {
    const { lovedItems } = useLovedProducts()

    return (
        <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
            <h1 className="sm:text-2xl">Productos que me gustan</h1>
            <div>
                <div>
                    {lovedItems.length == 0 && (
                        <p>No hay productos en la seccion de me gusta</p>
                    )}
                    <ul>
                        {lovedItems.map((item) => (
                            <LovedItemProduct key={item.id} product={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}