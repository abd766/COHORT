import { Quote } from "../components/Quote";
import { SignupBox } from "../components/SignupBox";
export function Signup() {
  return (
    <div className="grid grid-rows-1 lg:grid-cols-2">
    <div>
      <SignupBox />
      </div>
      <div className="bg-slate-200 h-screen text-balance hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}
