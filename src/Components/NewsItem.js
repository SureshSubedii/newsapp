import React from 'react'

export default function NewsItem (props) {
  
    let { title, description, imgUrl, newsUrl, author, date,source } =props;
    return (
      <div className='my-4'>
        
        <div className="card" > 
          <img src={!imgUrl ? "https://www.alpineadventureclub.com/assets/images/langtang/langtang-valley-trek.jpg" : imgUrl} className="card-img-top" alt="..." style={{ height: '190px' }} />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p><small className='text-muted'> By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">More</a>
            
  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:1}} >
    {source}</span>
          </div>
        </div>
      </div>
      
    )
  }

