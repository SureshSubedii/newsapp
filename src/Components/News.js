import React from 'react';
import { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";





export default function News(props){
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page, setpage] = useState(1);
  const [totalArticles, settotalArticles] = useState(0)
  document.title=`${ props.category} - NewsNow`;
  

 
    
  
   const updateNews=()=>{
    document.title=`${ props.category} - NewsNow`;
//  let url='https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw&apiKey=27ae7991bbmsh8a0807e9d2abe6fp10bc31jsn9eb728809de2';
    let url=`https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=${ props.ap}&page=${page}&pagesize=${ props.pgSize}`;
    setLoading(true);
    fetch(url).then((res) => {
      res.json().then((result) => {
        setArticles(result.articles);
        settotalArticles(result.totalResults);
        setLoading(false);

      
      })
    })
    
    


  }

   
    useEffect(() => {
      updateNews();
    }, [])
    
    
 
  const fetchMorearticles=()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=${ props.ap}&page=${page+1}&pagesize=${ props.pgSize}`;
    setpage(page+1)
    fetch(url).then((res) => {
      res.json().then((result) => {
        setArticles(articles.concat(result.articles))
        settotalArticles(result.totalResults)
      
      })
    })
  }

  
    return (
      <>
        
          <h1 className="text-center" style={{ margin: "60px"}}>
            NewsNow - Top  { props.category} Headlines

          </h1>
          {loading && <Spinner />}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMorearticles}
          hasMore={totalArticles!==articles.length}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {articles
              ? 
                articles.map((element) => (
                  
                  
                  <div className="col-md-4" key={element.url} >
                    
                    
                    
                    <NewsItem
                      title={element.title?.slice(0, 60)}
                      description={element.description?.slice(0, 88)}
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                    
                  </div>
                ))
              
                
              : null}

          </div>
          
         
        </div>
        </InfiniteScroll>
      </>
    );
  }

News.defaultProps = {
  country: "us",
  pgSize: 12,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pgSize: PropTypes.number,
  category: PropTypes.string,
};
