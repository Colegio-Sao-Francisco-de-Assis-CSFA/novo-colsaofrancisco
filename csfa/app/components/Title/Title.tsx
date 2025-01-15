
interface TitleProps{
    title: string;
}

export default function Title({title} : TitleProps ){

    return(

           <>
              <h1 className="text-white relative text-3xl font-bold">
                 {title}
              </h1>
           </>
       
    )
}

