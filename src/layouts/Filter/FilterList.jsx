import FilterInfo from "./FilterInfo";
import { removeOne, clearOne } from '../../features/skills';
import { useDispatch } from "react-redux";

export default function FilterList({ skillsList, dataLength }) {
    const dispatch = useDispatch();

    return (
        <div>
            <FilterInfo skillsList={skillsList} dataLength={dataLength} />
            <div className={`${skillsList.skills.length === 0 ? "hidden" : "block"} bg-white shadow-custom rounded p-4 sm:p-6 mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between`}>
                <div className="flex flex-wrap space-x-2 mt-2 sm:mt-0">
                    {skillsList.skills.length > 0 && skillsList.skills.map((skill, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-2 sm:mb-0 ">
                            <span className="text-teal-600 font-semibold text-base sm:text-lg cursor-pointer">
                                {skill.name}
                            </span>
                            <div 
                                onClick={() => dispatch(removeOne(skill.name))}
                                className="flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 rounded bg-teal-600 text-white cursor-pointer hover:bg-teal-700"
                            >
                                <span className="text-lg sm:text-2xl font-bold">-</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-auto">
                    <span 
                        onClick={() => dispatch(clearOne())} 
                        className="text-teal-600 font-semibold hover:bg-teal-600 hover:text-white text-base sm:text-lg px-3 py-2 cursor-pointer rounded"
                    >
                        Clear
                    </span>
                </div>
            </div>
        </div>
    );
}
