import Contact from "./Contact";
import React from 'react';
import Form from "./Form";

export default function SectionForm(){
    return(
        <section className="w-full h-auto bg-white md:p-6"> 
            <div className="w-full mx-auto min-w-80 max-w-6xl h-auto flex flex-col-reverse overflow-hidden sm:rounded-md md:rounded-lg md:flex-row md:border md:border-blue-600">
                <Contact />
                <Form />
            </div>
        </section>
    )
}