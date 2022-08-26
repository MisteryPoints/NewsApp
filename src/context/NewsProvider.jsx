import axios from 'axios'
import { useState, useEffect, createContext } from 'react'
import retry from 'retry-axios'

const NewsContext = createContext()

const NewsProvider = ({children}) => {
    const [category, setCategory] = useState('news')
    const [news, setNews] = useState({})
    const [page, setPage] = useState(1)

    useEffect(() => {
        const raxConfig = {
            backoffType: 'exponential',
            onRetryAttempt: (err) => {
                const cfg = retry.getConfig(err);
                const status = err.response.status;
                console.log(`🔄 [${status}] Retry attempt #${cfg.currentRetryAttempt}`);
            }
        }
        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/latest_headlines',
            params: {when: '7d', lang: 'es', countries: 'us', topic: `${category}`, page : '1', page_size : '10'},
            raxConfig,
            headers: {
                'x-api-key': 'rnfpXuax0ExZEYdu3n2B2VYTG4Xs-J8569aQjBHiyEs'
        }
        };
          
        const getAPI = async () => {
            // const url = `https://gnews.io/api/v4/top-headlines?topic=${category}&lang=es&country=pe&token=${import.meta.env.VITE_API_KEY}`
            const url = `https://api.newscatcherapi.com/v2/latest_headlines`
            const { data } = await axios(options)
            console.log(data)
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