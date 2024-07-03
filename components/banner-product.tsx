import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <>
            <div className="mt-4 text-center">
                <p>Sumergete en una experiencia unica</p>
                <h4 className="mt-2 text-5xl font-extrabold upperce">Cafe exquisito</h4>
                <p className="my-2 text-lg">Despierta tu sentidos con cada sorbo</p>
                <Link href="#" className={buttonVariants()}>Comprar</Link>
            </div>
            <div className="h-[350px] bg-cover lg:h-[600px] bg-[url('/cafe.jpg')] bg-center mt-5"/>
        </>
    );
}
export default BannerProduct;