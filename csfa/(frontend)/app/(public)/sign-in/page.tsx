import Image from "next/image";

export default function SignIN(){
    return(
        <section className="w-dvw h-dvh">
                {/* Background */}
                <div>
                    <Image alt="" src={""} />
                </div>
                <form>
                     {/* Title form */}
                    <h2>Titulo</h2>

                    <Image alt="" src={""} />

                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="seu.email@email.com.br" 
                        />
                    </div>


                </form>
        </section>
    )
} 