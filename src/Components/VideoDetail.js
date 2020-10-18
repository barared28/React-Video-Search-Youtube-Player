import React from 'react';

const VideoDetail = ({ video }) => {
    if (video === null) {
        return (
            <div>
                <div className='ui segment'>
                    Loading ...
                </div>
            </div>
        )
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`

    return (
        <div>
            <div className='ui segment'>
                <div className='ui embed'>
                    <iframe src={videoSrc} title={video.snippet.title}/>
                </div>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;