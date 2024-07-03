"use client"
 
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
 
const Page = () => {
    const router = useRouter()
    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center md:min-w-[400px]">
                    <Image src="/success.jpg" alt="Success" width={250} height={500} className="rounded-lg" />
                </div>
                <div>
                    <h1 className="text-3xl">Gracias por su compra</h1>
                    <p className="my-3">En unos momentos nuestro equipo que pondra manos a la obre y empezara con el pedido</p>
                    <p className="my-3">Gracias pro preferir nuestra tienda</p>
                    <p className="my-3">Disfrute del cafe</p>
 
                    <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
                </div>
            </div>
        </div>
    );
}
export default Page;