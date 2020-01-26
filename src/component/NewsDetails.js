import React from 'react';

const NewsDetails = (props) => {
    const renderList = props.newsdata.map((data, index) => {
        return(
            <div key={index}>
                <h2>{data.title}</h2>
                <div>{data.feed}</div>
            </div>
        )
    })

    return(
        <div>
            {renderList}
        </div>
    )
}

export default NewsDetails;
