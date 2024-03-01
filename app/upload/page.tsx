"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult{
    public_id: string;
}

const UploadPage = () => {
    const [public_id, setPublicId] = useState("");
    
    return (
        <>
            {public_id && 
                <CldImage src={public_id} width={270} height={180} alt="A next js logo"/>
            }
            <CldUploadWidget 
                uploadPreset="rrn0yyga"
                options={{
                    sources: ["local"],
                    multiple: false,
                    maxFiles: 5,
                }}
                onUpload={(result, widget) => {
                    if(result.event !== "success") return;
                    const info = result.info as CloudinaryResult;
                    setPublicId(info.public_id);
                }}
            >
                {({open}) => 
                    <button type="button" className="btn btn-primary" onClick={() => open()}>Upload</button>
                }
            </CldUploadWidget>
        </>
    )
}

export default UploadPage