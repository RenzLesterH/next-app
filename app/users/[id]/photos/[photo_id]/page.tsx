import React from 'react';

interface Props{
    params: {
        id: number;
        photo_id: number;
    }
}

const PhotoDetails = ({params: {id, photo_id}}: Props) => {
    return (
      <div>PhotoDetails {id} {photo_id}</div>
    )
}

export default PhotoDetails