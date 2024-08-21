import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../features/jobs";
import { addOne } from '../../features/skills';
import spinner from "../../assets/spinner.svg";
import FilterList from '../Filter/FilterList';

export default function JobsList() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.jobs);
    const skillsList = useSelector(state => state.skills);
    const dataLength = (data && data.length) ? data.length : 0;

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    const filterJobs = (jobs) => {
        if (skillsList.skills.length === 0) return jobs;
        return jobs.filter(job => {
            const jobSkills = [
                ...job.languages,
                ...job.tools,
                job.level,
                job.role
            ];
            return skillsList.skills.every(skill => jobSkills.includes(skill.name));
        });
    };

    const filteredData = data ? filterJobs(data) : [];
    let contentData;
    if (loading) contentData = <img src={spinner} alt="spinner loader" />;
    if (error) contentData = <p className="text-red-600">An error has occurred</p>;
    if (data) {
        contentData = (
            <ul className="space-y-4">
                {filteredData.map(job => (
                    <li key={job.id} className="bg-white shadow-custom rounded p-6 flex flex-col md:flex-row md:items-center justify-between hover:border-l-4 hover:border-teal-600 cursor-pointer">
                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
                            <img src={job.logo} alt={`${job.company} logo`} className="w-12 h-12 md:w-16 md:h-16" />
                            <div className="flex flex-col space-y-2">
                                <div className="flex flex-wrap items-center space-x-2">
                                    <h3 className="text-teal-600 font-semibold text-lg">{job.company}</h3>
                                    {job.new && <span className="bg-teal-600 text-white text-xs font-bold uppercase rounded-full px-2 py-1">New!</span>}
                                    {job.featured && <span className="bg-gray-900 text-white text-xs font-bold uppercase rounded-full px-2 py-1">Featured</span>}
                                </div>
                                <h2 className="font-bold text-lg text-teal-00">{job.position}</h2>
                                <p className="text-gray-500 text-sm">{job.postedAt} • {job.contract} • {job.location}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center space-x-2 mt-4 md:mt-0">
                            {job.languages.map((language, index) => (
                                <span key={index} onClick={() => dispatch(addOne(language))} className="text-teal-600 font-semibold bg-teal-50 hover:bg-teal-500 hover:text-white rounded-md px-2 py-1 cursor-pointer">
                                    {language}
                                </span>
                            ))}
                            {job.tools.map((tool, index) => (
                                <span key={index} onClick={() => dispatch(addOne(tool))} className="text-teal-600 font-semibold bg-teal-50 hover:bg-teal-500 hover:text-white rounded-md px-2 py-1 cursor-pointer">
                                    {tool}
                                </span>
                            ))}
                            <span onClick={() => dispatch(addOne(job.level))} className="text-teal-600 font-semibold bg-teal-50 hover:bg-teal-500 hover:text-white rounded-md px-2 py-1 cursor-pointer">
                                {job.level}
                            </span>
                            <span onClick={() => dispatch(addOne(job.role))} className="text-teal-600 font-semibold bg-teal-50 hover:bg-teal-500 hover:text-white rounded-md px-2 py-1 cursor-pointer">
                                {job.role}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div className="container mx-auto px-4">
            <FilterList skillsList={skillsList} dataLength={dataLength} />
            {contentData}
        </div>
    );
}
