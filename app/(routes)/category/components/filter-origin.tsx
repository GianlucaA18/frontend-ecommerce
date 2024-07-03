import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FiltersTypes } from "@/types/filters";

type FiltersOriginProps = {
    setFilerOrigin: (origin: string) => void
}


const FilterOrigin = (props: FiltersOriginProps) => {
    const { setFilerOrigin } = props
    const { result, loading }: FiltersTypes = useGetProductField()


    return (
        <div className="my-5">
            <p className="mb-3 font-bold">Origen</p>
            {loading && result == null && (
                <p>Cargando origen...</p>
            )}
            <RadioGroup onValueChange={(value) => setFilerOrigin(value)}>
                {result != null && result.schema.attributes.origin.enum.map((origin: string) => (
                    <div key={origin} className="flex items-center space-x-2">
                        <RadioGroupItem value={origin} id={origin} />
                        <Label htmlFor={origin}>{origin}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}
export default FilterOrigin;