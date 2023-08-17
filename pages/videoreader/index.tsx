import React, { useState } from 'react';
import VideoUploader from '../components/V/VideoUploader';

const VideoReader = () => {
    const [videoUrl, setVideoUrl] = useState('');

    const handleVideoUploaded = (url: any) => {
        setVideoUrl(url);
        console.log(videoUrl)
    };
    console.log(videoUrl)

    return (
        <div>
            <h1>Video Uploader</h1>
            <VideoUploader onVideoUploaded={handleVideoUploaded} />
            {videoUrl && (
                <video controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
};

export default VideoReader;
