import { useRouter } from 'next/router';

export default function SolicitaAoAdministrador() {
  
  const router = useRouter();
  const { error } = router.query; 

  return (
    <div>
      <h1>Erro de Login</h1>
      {/* <p>{error ? error : 'Houve um erro. Tente novamente mais tarde.'}</p> */}
      <p>Contate o administrador para cadastro.</p>
    </div>
  );
};


