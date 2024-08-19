import AuthForm from '@/components/AuthForm';
import {getLoggedInUser} from '@/lib/actions/user.actions'

const SignUp = async () => {
  const loggedInUser = await getLoggedInUser();

  console.log(loggedInUser);
  
  return (
    <section className="flex size-full px-12 max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
}

export default SignUp