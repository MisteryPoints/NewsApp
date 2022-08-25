import axios from 'axios'
import { useState, useEffect, createContext } from 'react'

const NewsContext = createContext()

const NewsProvider = ({children}) => {
    const [category, setCategory] = useState('breaking-news')
    const [news, setNews] = useState({})

    useEffect(() => {
        const getAPI = async () => {
            const url = `https://gnews.io/api/v4/top-headlines?topic=${category}&lang=es&country=pe&token=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNews(data.articles)
        }
        getAPI()
    }, [category])
    

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    return (
        <NewsContext.Provider value={{
            category, 
            handleChangeCategory,
            news
        }}>
            {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext