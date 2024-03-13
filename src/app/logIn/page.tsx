import { login, signup } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <>
      {/* Convert this form to shadcn Form before we roll out for Beta testing */}
      <div className="h-screen w-screen flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        {/* <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      /> */}
        <div className="bg-white rounded-lg flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          {/* convert this into a card component to make this a lot easier down the line */}
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h1 className="text-center text-2xl font-bold leading-tight text-black">
              Welcome to the Beta Test!
              <br />
              (if your login does not work, call us!)
            </h1>
            <div className="flex flex-col gap-2 my-10">
            <form>
              <label className="text-black font-bold">Email</label>
              <Input
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="flex flex-col gap-2 my-10">
              <label className="text-black font-bold">Password</label>
              <Input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="flex justify-center items-center gap-4 mt-[3rem]">
              <Button onClick={handleSignUp}>Sign up</Button>
              <Button onClick={handleSignIn}>Sign in</Button>
              <Button onClick={handleSignOut}>Sign out</Button>
            </div>
          </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  // the sample code that runs the login page
  /* <form>
<label htmlFor="email">Email:</label>
<input id="email" name="email" type="email" required />
<label htmlFor="password">Password:</label>
<input id="password" name="password" type="password" required />
<button formAction={login}>Log in</button>
<button formAction={signup}>Sign up</button>
</form> */
}
