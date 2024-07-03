import FilterOrigin from "./filter-origin";

type FiltersControlsCategoryProps = {
    setFilerOrigin: (origin: string) => void
}

const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
    const { setFilerOrigin } = props
    return (
        <div className="sm:w-[350px] sm:mt-5 p-6 ">
            <FilterOrigin setFilerOrigin={setFilerOrigin} />
        </div>
    );
}
export default FiltersControlsCategory;