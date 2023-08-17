import React, { useState } from 'react';

const VideoUploader = ({ onVideoUploaded } :any) => {
  const handleFileChange = async (event:any) => {
    const file = event.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      onVideoUploaded(videoUrl);
    }
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileChange} />
    </div>
  );
};

export default VideoUploader;