import React from 'react';

function Products({ item }) {
    return (
        <>
            <div className="mt-6 my-3 p-3">
                <div className="card bg-base-100 w-72 h-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure className="h-40 w-full flex justify-center items-center bg-gray-200">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-auto object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-lg font-semibold">
                            {item.name}
                            <div className="badge badge-secondary ml-2">{item.Category}</div>
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {item.title.length > 50 ? `${item.title.slice(0, 47)}...` : item.title}
                        </p>
                        <div className="card-actions justify-between items-center mt-4">
                            <div className="badge badge-outline text-lg">₹{item.price}</div>
                            <div className="cursor-pointer px-3 py-1 rounded-full border-2 border-pink-500 hover:bg-pink-500 hover:text-white duration-200">
                                Buy Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;
