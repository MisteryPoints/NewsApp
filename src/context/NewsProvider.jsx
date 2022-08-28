import axios from 'axios'
import { useState, useEffect, createContext } from 'react'
// import retry from 'retry-axios'

const NewsContext = createContext()

const NewsProvider = ({children}) => {
    const [category, setCategory] = useState('general')
    const [news, setNews] = useState({})
    const [page, setPage] = useState(1)
    const [totalNews, setTotalNews] = useState(0)
    const [loading, setLoading] = useState(true)

    const options = { 
        params: {categories: `${category}`, language: 'es,en', limit: '5',  api_token: 'pN1KB0FK2ejNx1dviiU48SNKkZ8TIqIk3pcDjOba'} 
    }

    useEffect(() => {  
        setLoading(true)
        const getAPI = async () => {
            // const url = `https://gnews.io/api/v4/top-headlines?topic=${category}&lang=es&country=pe&token=${import.meta.env.VITE_API_KEY}`
            const url = ` https://api.thenewsapi.com/v1/news/top?`
            const response = await axios(url, options)
            const {data, meta} = response.data 
            setNews(data)
            setTotalNews(meta.found)
            setPage(1)
            setLoading(false)
        }
        getAPI()
    }, [category])

    useEffect(() => {  
        setLoading(true)
        const getAPI = async () => {
            // const url = `https://gnews.io/api/v4/top-headlines?topic=${category}&lang=es&country=pe&token=${import.meta.env.VITE_API_KEY}`
            const url = ` https://api.thenewsapi.com/v1/news/top?page=${page}`
            const response = await axios(url, options)
            const {data, meta} = response.data 
            setNews(data)
            setTotalNews(meta.found)
            setLoading(false)
        }
        getAPI()
    }, [page])

     

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    const handleChangePage = (e, value) => {
        setPage(value)
    }

    return (
        <NewsContext.Provider value={{
            category, 
            handleChangeCategory,
            news,
            totalNews,
            handleChangePage,
            page,
            loading
        }}>
            {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext