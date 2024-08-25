"use client";

import { useGetUserQuery } from "@/redux/services/userApi"; //Import the enpoint


import CardEvaluator from "../cards/cardEvaluator";

export default function ContentEvaluator() {
    const { data, isError, isLoading, isFetching } = useGetUserQuery(null)
    if (isLoading || isFetching) return <p>Is Loading.....</p>
    if (isError) return <p>Error</p>
   
    return (
        <>
            <div className="container">
                {data.map(user => (
                    <CardEvaluator
                        key={user.age}
                        name={user.name}
                    />
                ))}

                <div className="flex-row-reverse">
                    {
                        data.map(user => (
                            <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{`${user.age}`}</h5>
                                <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{`${user.name}`}</p>
                                <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}