import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../features/jobs";
import { addOne } from '../../features/skills';
import spinner from "../../assets/spinner.svg";
import FilterList from '../Filter/FilterList';

export default function JobList() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.jobs);

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    let contentData;
    if (loading) contentData = <img src={spinner} alt="spinner loader" />;
    if (error) contentData = <p className="text-red-600">An error has occurred</p>;
    if (data) {
        contentData = (
            <div>
                {data.map(job => (
                    <div>
                        <li key={ job.id } className="text-slate-50 text-xl flex-col items-start mb-4">       
                            <div className="bg-white shadow-custom rounded-md p-6 flex items-center justify-between">
                                <div className="flex items-center space-x-10">
                                    <img src={ job.logo } alt={`${ job.company } logo`}  className="p-2" />
                                    <div>
                                        <div className="flex space-x-2 pb-5">
                                            <h3 className="text-teal-500 font-semibold text-lg mr-2">{ job.company }</h3>
                                            <span className={`${!job.new?"hidden":"block"}  flex items-center text-xs text-teal-50 bg-teal-600 px-1 py-1 justify-center pt-1 rounded-md`}>NEW !</span>
                                            <span className={`${!job.featured?"hidden":"block"} flex items-center text-xs text-white bg-slate-900 px-1 py-1 rounded-md pt-1 align-middle`}>FEATURED</span>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-lg text-teal-800 pb-5">{job.position}</h2>
                                            <p className="text-gray-500 text-sm">{ job.postedAt } • { job.contract } • { job.location }</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="flex space-x-4 mt-2">
                                        { job.languages.map(language => (
                                        <span key={ language.id }
                                        onClick={() => dispatch(addOne(language))}
                                        className='text-teal-500 font-semibold hover:bg-teal-600 
                                        hover:text-slate-50 text-lg px-2 py-1 cursor-pointer'>{ language }</span>
                                        ))}
                                        { job.tools.map(tool => (
                                        <span key={ tool.id }
                                        onClick={() => dispatch(addOne(tool))}
                                        className="text-teal-500 font-semibold hover:bg-teal-600 
                                        hover:text-slate-50 text-lg px-2 py-1 cursor-pointer">{ tool }</span>

                                        ))} 
                                        <span 
                                        onClick={() => dispatch(addOne(job.level))}
                                        className="text-teal-500 font-semibold hover:bg-teal-600 
                                        hover:text-slate-50 text-lg px-2 py-1 cursor-pointer">{ job.level }</span>
                                        <span 
                                        onClick={() => dispatch(addOne(job.role))}
                                        className="text-teal-500 font-semibold hover:bg-teal-600 
                                        hover:text-slate-50 text-lg px-2 py-1 cursor-pointer">{ job.role }</span>
                                </div>
                            </div>
                        </li>
                    </div>
                    
                ))}
            </div>
        );
    }

    const skillsList = useSelector(state => state.skills)
    const dataLength = (data && data.length) ? data.length : 0;

    return (
        <div>
            <FilterList skillsList={skillsList} dataLength={dataLength} />
            {contentData}
        </div>
    );
}
