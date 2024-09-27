import { useToggle } from '@mantine/hooks';
import { SignUp } from './SignUp';
import { Login } from './Login'; 
  
export function Authentication() {
  const [type, toggle] = useToggle(['login', 'register']); 

  return (
    <div>
      {type === 'register' && (
        <SignUp type={type} toggle={toggle} />
      )}
      {type === 'login' && (
        <Login type={type} toggle={toggle} />
      )}
    </div>
  );
}