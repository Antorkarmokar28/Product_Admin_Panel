import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/auth/authSlice";
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [login] = useLoginMutation();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  //login handler
  const onSubmit = async (data) => {
    const userInfo = {
      username: data.username,
      password: data.password,
    };

    try {
      const res = await login(userInfo).unwrap();

      if (res?.token) {
        dispatch(setUser({ user: res.user || {}, token: res.token }));
      } else {
        console.error("No token received");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials or try again later.");
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Welcome back</CardTitle>
            <CardDescription>
              Login with your username or password
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your username"
                    required
                    {...register("username")}
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    {...register("password")}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full dark:text-white cursor-pointer"
                >
                  Login
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
