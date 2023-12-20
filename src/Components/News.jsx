import React, { useCallback, useEffect, useState } from 'react'
import Loading from './Loading';

export default function News({ category }) {
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  let [totalResults, setTotalResults] = useState(0);
  let [loading, setLoading] = useState(false);
  const nextnews = async () => {
    setPage(++page);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=59724f12cb7a483580cb6945f53e9560&page=${page}&pageSize=18`;
    setLoading(true);
    let response = await fetch(url);
    let resdata = await response.json();
    setLoading(false);
    setData(resdata.articles)
  }

  const previousnews = async () => {
    setPage(--page);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=59724f12cb7a483580cb6945f53e9560&page=${page}&pageSize=18`;
    const response = await fetch(url);
    const resdata = await response.json();
    setLoading(false);
    setData(resdata.articles);
  }
  const fetchdata = useCallback(async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=59724f12cb7a483580cb6945f53e9560&page=${page}&pageSize=18`;
    const response = await fetch(url);
    const resdata = await response.json();
    setLoading(false);
    setData(resdata.articles)
    setTotalResults(resdata.totalResults);
  }, [nextnews, previousnews, setData])

  useEffect(() => {
    fetchdata();
  }, [category]);

  return (
    <>
      <h1 className='text-center my-5 font-semibold text-4xl capitalize'>Top Headlines - {category}</h1>
      <div className='flex justify-center items-center gap-8 flex-wrap py-5'>
        {loading && <Loading />}
        {
          data.map((element) => {
            return <div id='card' className='flex w-[300px] h-[400px] flex-col lg:flex-row lg:w-[350px] lg:h-[150px] shadow-lg shadow-black rounded-b-lg rounded-t-lg overflow-hidden' key={element.url}>
              <div className='h-[250px]  overflow-hidden lg:flex-1 lg:h-auto flex'>
                <img src={element.urlToImage ?? 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'} alt="" className="object-cover w-full h-full flex-1" />
              </div>
              <div className='p-4 lg:flex-[2] flex flex-col gap-1 bg-white flex-1 justify-around lg:px-4'>
                <div className='flex flex-col gap-1'>
                  <h1 className='line-clamp-2 text-lg font-semibold capitalize lg:line-clamp-2'>{element.title}</h1>
                  <p className=' line-clamp-3 lg:line-clamp-2'>{element.description}</p>
                </div>
                <div className='flex justify-between lg:items-end'>
                  <p className=' text-stone-400'>{element.publishedAt.slice(0, 10)}</p>
                  <p className=' text-blue-400 capitalize'><a href={element.url} target='_blank' > readmore&rarr;</a></p>
                </div>
              </div>
            </div>
          })
        }
      </div>
      <div className='flex justify-around mt-3'>
        <button type='button' className='border-2 border-black px-8 py-1 text-xl active:hover:text-white active:hover:bg-black transition-all duration-700 capitalize disabled:opacity-50 disabled:transition-none disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-black' onClick={previousnews} disabled={1 < page ? false : true}>
          &larr; previous
        </button>
        <button className='border-2 border-black px-8 py-1 text-xl active:hover:text-white active:hover:bg-black transition-all duration-700 capitalize disabled:opacity-50 disabled:transition-none disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-black' onClick={nextnews} disabled={Math.ceil(totalResults / 18) <= page ? true : false}>
          next &rarr;
        </button>
      </div>
    </>
  )
}
