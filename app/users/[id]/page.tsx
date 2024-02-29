import { notFound } from 'next/navigation';
import React from 'react';

interface Props{
    params: {
        id: number
    }
}

const UserDetials = ({params: {id}}: Props) => {
    if (id > 10) notFound();
    
    return (
            <>
                <div>UserDetials {id}</div>
            </>
    )
}

export default UserDetials