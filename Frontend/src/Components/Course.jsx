import React, { useEffect, useState } from 'react'
import Products from "../Components/Products"
import axios from "axios"; 
import {Link} from "react-router-dom"
function Course() {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data)
            } catch (error) {
                console.log(error);
                
            }
        }
        getBook();
    },[])
  return (  
      <>
          <div className="dark:bg-gray-900 dark:text-white min-h-screen">
              <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 overflow-hidden">
                  <div className="mt-28 items-center justify-center text-center">
                      <h1 className="text-2xl md:text-4xl mb-4">
                          We're delighted to have you{" "}
                          <span className="text-pink-500">Here! :)</span>
                      </h1>
                      <p className="mt-5">
                          Welcome to our online bookstore, where a world of knowledge...
                      </p>
                      <p className="mt-10">
                          Welcome to our online bookstore, where a world of knowledge and entertainment awaits you! Dive into our collection of free books, handpicked for readers who love exploring diverse genres. From fiction to non-fiction, self-help to fantasy, there’s something for everyone to enjoy.
                      </p>

                      <p className="mt-5">
                          Want more? Unlock unlimited access to a treasure trove of premium books by subscribing to our premium membership. With this, you’ll gain exclusive access to a wide range of captivating titles, updated regularly, so you never run out of options.
                      </p>

                      <p className="mt-5">
                          Enjoy the convenience of reading anytime, anywhere, on any device. Whether you’re at home, traveling, or on a coffee break, our digital library is always within reach. Join our community of book lovers today and immerse yourself in stories, knowledge, and inspiration.
                      </p>

                      <p className="mt-5">
                          Sign up now and turn every moment into a reading adventure! Explore. Enjoy. Elevate your reading experience with us.
                      </p>
                      <Link to="/">
                          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700">
                              Back
                          </button>
                      </Link>
                  </div>
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                      {book.map((item) => (
                          <Products key={item.id} item={item} />
                      ))}
                  </div>
              </div>
          </div>


      </>
  )
}

export default Course