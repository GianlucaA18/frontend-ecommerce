import { useRouter } from "next/navigation";

interface ProductImageMiniature{
    slug: string;
    url: string;

}

const ProductImageMiniature = (props:ProductImageMiniature)=>{
    const{slug, url} = props 
    const router = useRouter();
    return(
        <div onClick={() => router.push(`/product/${slug}`)} className="cursor-pointer">
        <img
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`}
            alt="Imagen producto"
            className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
        />
    </div>

    );
}
export default ProductImageMiniature