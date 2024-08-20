export default function Filter() {
return (
<div className="bg-white shadow-md rounded-md p-4 flex items-center space-x-4 mb-6">
    <button className="bg-teal-500 text-white px-4 py-2 rounded-full font-semibold">Frontend</button>
    <button className="bg-teal-500 text-white px-4 py-2 rounded-full font-semibold">CSS</button>
    <button className="bg-teal-500 text-white px-4 py-2 rounded-full font-semibold">JavaScript</button>
    <button className="ml-auto text-teal-500 font-semibold hover:underline">Clear</button>
</div>
)
}
