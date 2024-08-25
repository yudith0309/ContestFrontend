"use client";

//import { useGetUserQuery } from "@/redux/services/userApi"; //Import the enpoint

//import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function CardEvaluator(props) {
    //const { data, isError, isLoading, isFetching } = useGetUserQuery(null)


    // const count = useAppSelector(state => state.counterReducer.counter) //Select state
    // const dispatch = useAppDispatch //Chage State

   /* if (isLoading || isFetching) return <p>Is Loading.....</p>
    if (isError) return <p>Error</p>*/

    return (
        <>
            <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{`${props}`}</h5>
                <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{`${props}`}</p>
                <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                </div>
            </div>

        </>
    )
}