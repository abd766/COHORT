import { Quote } from "../components/Quote";
import { SigninBox } from "../components/SigninBox";
export function Signin() {
  return (
    <div className="grid grid-rows-2 md:grid-cols-2">
    <div className="flex items-center justify-center">
      <SigninBox />
      </div>
      <div className="bg-slate-200 h-screen text-balance">
        <Quote />
      </div>
    </div>
  );
}
