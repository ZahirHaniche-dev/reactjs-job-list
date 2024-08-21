
export default function FilterList({skillsList, dataLength}) {

    return (
        <div>
            {
                skillsList.skills.length === 0 && 
                <span className='text-slate-900   text-lg px-2 py-1 cursor-pointer'>
                    Select one or more skill filters from the <span className='font-extrabold'>{dataLength} job listings</span> below
                </span>
            }

            <div className={`${skillsList.skills.length === 0 ? "hidden" : "block"} space-x-6 bg-white shadow-custom rounded-md p-6 my-6 flex items-center justify-between`}>
                <div className="flex space-x-2 mt-2">
                    { skillsList.skills.length > 0 && skillsList.skills.map(skill => (
                        <>
                            <span className="text-teal-500 font-semibold text-xl px-2 py-1 cursor-pointer mt-1">
                                {skill.name}
                            </span>
                            <div onClick={() => dispatch(removeOne(skill.name))} 
                            className="flex items-center justify-center mt-1 w-8 h-8 rounded bg-teal-600 text-slate-50 cursor-pointer bg-teal-500 hover:bg-slate-900 ">
                                <span className="text-4xl font-bold text-white">-</span>
                            </div>
                        </>
                    ))}
                </div>
                <div className="mt-2 ml-auto">
                    <span onClick={() => dispatch(clearOne())} 
                    className="text-teal-500 font-semibold hover:bg-teal-600 hover:text-slate-50 text-lg px-2 py-1 cursor-pointer">
                        Clear
                    </span>
                </div>
            </div>
        </div>
    );
}
