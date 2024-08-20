import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../features/jobs";
import spinner from "../../assets/spinner.svg";

export default function JobList() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.jobs);

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    let content;
    if (loading) content = <img src={spinner} alt="spinner loader" />;
    if (error) content = <p className="text-red-600">An error has occurred</p>;
    if (data) {
        content = (
            <ul>
                {data.map(job => (
                    <li key={job.id} className="text-slate-50 text-xl flex flex-col items-start mb-4">
                        <img src={job.logo} alt={`${job.company} logo`} className="mb-2"/>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}
