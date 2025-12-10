// import React from 'react'
// import { useLoaderData } from 'react-router'

// function Github() {

//     const data = useLoaderData()

//     return (
//         <div className='bg-gray-600 text-white text-3xl p-4'>
//         <h2>My followers: {data["followers"]} </h2>
//         <img src={data["avatar_url"]} alt="View Image" width={300} />
//         </div>
//     )
// }

// export default Github

// export const githubInfoLoader = async() => {
//     const res = await fetch('https://api.github.com/users/mustafakamran01')
//     return res.json();
// }

import React from 'react'
import { NavLink, Outlet } from 'react-router'
function Github() {
    return (
        <div
            className="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1 p-10"
            id="mobile-menu-2"
        >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <NavLink
                        to="mustafa"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        Mustafa Kamran
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="hitesh"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        Hitesh Choudhary
                    </NavLink>
                </li>    
            </ul>

            <Outlet />
        </div>
    )
}

export default Github

