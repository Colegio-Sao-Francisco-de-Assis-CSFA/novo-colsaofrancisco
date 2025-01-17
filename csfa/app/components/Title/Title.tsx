
interface TitleProps{
    title: string;
    className?: string;
}

export default function Title({title, className} : TitleProps ){

    return(

           <>
              <h1 className={`relative text-3xl font-bold ${className}`}>
                 {title}
              </h1>
           </>
       
    )
}

