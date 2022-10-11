import * as React from 'react';
import { useState, useEffect } from 'react';
// import img from './img/name.jpg'
const FetchApi = () => {

    const [data, setData] = useState('')
    const [input, setInput] = useState('')
    // let id = 'https://app.abstractapi.com/'
    var url = `https://screenshot.abstractapi.com/v1/?api_key=f6db76d092a2414389f15d39ce00f77c&url=${input}`;

    async function handleFetchAwait() {
        let response = await fetch(url);
        let screenShot = response.url;
        setData(screenShot);
    }


    useEffect(() => {
        handleFetchAwait()
    }, [])
    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 ">
                        Get ScreenShot of any given URL
                    </h1>
                    <div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleFetchAwait()
                        }}>
                            <label
                                htmlFor="url"
                                className="pt-[50px] block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                ENTER URL
                            </label>
                            <input
                                type="url"
                                id="url"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="https://www.youtube.com/"
                                required
                                value={input} onChange={e => setInput(e.target.value)}
                            />
                            <button type="submit" className="mt-[20px] bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="h-100vh rounded-lg border-4 border-dashed border-gray-200" >
                            <img src={data} alt="" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default FetchApi;