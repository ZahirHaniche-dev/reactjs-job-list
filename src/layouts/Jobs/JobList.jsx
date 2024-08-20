export default function JobList() {
return (
<div className="space-y-6">
        {/* Job 1 */}
        <div className="bg-white shadow-md rounded-md p-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
            <img src="https://via.placeholder.com/50" alt="Photosnap" className="w-12 h-12" />
            <div>
            <h2 className="font-bold text-lg text-teal-800">Senior Frontend Developer</h2>
            <div className="flex space-x-2">
                <span className="text-teal-500 font-semibold">Photosnap</span>
                <span className="text-xs text-teal-600 bg-teal-100 px-2 py-1 rounded-full">NEW!</span>
                <span className="text-xs text-white bg-teal-800 px-2 py-1 rounded-full">FEATURED</span>
            </div>
            <p className="text-gray-500 text-sm">1d ago • Full Time • USA only</p>
            </div>
        </div>
        <div className="flex space-x-2">
            <span className="text-teal-500 font-semibold bg-teal-100 px-2 py-1 rounded-full">Frontend</span>
            <span className="text-teal-500 font-semibold bg-teal-100 px-2 py-1 rounded-full">Senior</span>
            <span className="text-teal-500 font-semibold bg-teal-100 px-2 py-1 rounded-full">HTML</span>
            <span className="text-teal-500 font-semibold bg-teal-100 px-2 py-1 rounded-full">CSS</span>
            <span className="text-teal-500 font-semibold bg-teal-100 px-2 py-1 rounded-full">JavaScript</span>
        </div>
        </div>

        {/* Job 2 */}
        <div className="bg-white shadow-md rounded-md p-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
            <img src="https://via.placeholder.com/50" alt="MyHome" className="w-12 h-12" />
            <div>
            <h2 className="font-bold text-lg text-teal-800">Junior Frontend Developer</h2>
            <div className="flex space-x-2">
                <span className="text-teal-500 font-semibold">MyHome</span>
            </div>
            <p className="text-gray-500 text-sm">5d ago • Contract • USA only</p>
            </div>
        </div>
        <div className="flex space-x-2">
            <span className="text-teal-500 font-semibold bg-teal-100 px-2 py-1 rounded-full">Frontend</span>
            <span className="text-teal-500 font-semibold bg-teal-100 px-2 py-1 rounded-full">Junior</span>
            <span className="text-teal-500 font-semibold bg-teal-100 px-2 py-1 rounded-full">CSS</span>
            <span className="text-teal-500 font-semibold bg-teal-100 px-2 py-1 rounded-full">JavaScript</span>
        </div>
        </div>
    </div>
)
}
