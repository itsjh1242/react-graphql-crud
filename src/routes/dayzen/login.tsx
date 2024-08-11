import { PHONE_NUMBERING, PHONE_REGEX } from "@/common/regex";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { TabsContent } from "@radix-ui/react-tabs";
import { useForm } from "react-hook-form";
import { z } from "zod";
// gql
import { useLoginMutation } from "@/graphql/generated";
import { setToken } from "@/lib/token-helper";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

// login form schema
const loginFormSchema = z.object({
  id: z.string().email({ message: "아이디는 이메일 형식으로 작성해야합니다." }),
  password: z.string().min(4, { message: "비밀번호는 최소 4글자 이상이어야합니다." }),
});

// register form schema
const registerFormSchema = z.object({
  id: z.string().email({ message: "아이디는 이메일 형식으로 작성해야합니다." }),
  name: z.string().min(1, { message: "한 글자 이상 입력하세요." }),
  phoneNumber: z.string().regex(PHONE_REGEX, "유효하지 않은 번호 형식입니다."),
  password: z.string().min(4, { message: "비밀번호는 최소 4글자 이상이어야합니다." }),
});

export const Login = () => {
  // gql
  const [loginGql] = useLoginMutation();

  // tool
  const navigate = useNavigate();

  // login form init
  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      id: "",
      password: "",
    },
  });
  // register form init
  const registerForm = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      id: "",
      password: "",
      name: "",
      phoneNumber: "",
    },
  });

  // login trigger
  const onLoginSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    try {
      console.log(values);
      const res = await loginGql({
        variables: {
          input: {
            id: values.id,
            password: values.password,
          },
        },
      });

      const { ok, token, error } = res.data?.login || {};

      if (ok && token) {
        setToken(token);
        navigate("/");
      } else {
        toast.error("아이디 또는 비밀번호를 확인해주세요.", { richColors: true });
        console.log("Login Error with, ", error);
      }
    } catch (e) {
      console.error(e);
    }
  };
  // register trigger
  const onRegisterSubmit = async (values: z.infer<typeof registerFormSchema>) => {
    try {
      console.log(values);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">로그인</TabsTrigger>
          <TabsTrigger value="register">회원가입</TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="mt-2">
          <Card>
            <CardHeader>
              <CardTitle>로그인</CardTitle>
              <CardDescription className="tracking-tighter">dayzen에 오신 것을 환영합니다</CardDescription>
            </CardHeader>
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(onLoginSubmit)}>
                <FormField
                  control={loginForm.control}
                  name="id"
                  render={({ field }) => (
                    <CardContent className="space-y-2">
                      <FormItem>
                        <FormLabel>아이디</FormLabel>
                        <FormControl>
                          <Input placeholder="아이디(이메일)" {...field} />
                        </FormControl>
                        {/* <FormDescription>사용하실 아이디(이메일)을 입력하세요.</FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    </CardContent>
                  )}
                />
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <CardContent className="space-y-2">
                      <FormItem>
                        <FormLabel>비밀번호</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="비밀번호" {...field} />
                        </FormControl>
                        {/* <FormDescription>사용하실 비밀번호를 입력하세요.</FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    </CardContent>
                  )}
                />
                <CardFooter>
                  <Button type="submit">로그인</Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
          <div className="flex justify-center items-center max-w-[400px] overflow-hidden my-4">
            <Separator className="my-4" />
            <p className="flex-shrink-0 px-4 text-gray-400">또는</p>
            <Separator className="my-4" />
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="flex justify-center items-center rounded-lg w-[400px] border px-4 py-3 hover:bg-[#ffeb00] cursor-pointer transition-all duration-300">
              <p className="text-sm">카카오로 로그인하기</p>
            </div>
            <div className="flex justify-center items-center rounded-lg w-[400px] border px-4 py-3 hover:bg-[#03c75b] cursor-pointer hover:text-white transition-all duration-300">
              <p className="text-sm">네이버로 로그인하기</p>
            </div>
            <div className="flex justify-center items-center mt-4">
              <p className="text-sm text-gray-400">
                비밀번호를 잊으셨나요? <span className="text-black underline cursor-pointer">비밀번호 재설정</span>
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="register" className="mt-2">
          <Card>
            <CardHeader>
              <CardTitle>회원가입</CardTitle>
              <CardDescription>dayzen에 오신 것을 환영합니다</CardDescription>
            </CardHeader>
            <Form {...registerForm}>
              <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)}>
                <FormField
                  control={registerForm.control}
                  name="id"
                  render={({ field }) => (
                    <CardContent className="space-y-2">
                      <FormItem>
                        <FormLabel>아이디</FormLabel>
                        <FormControl>
                          <Input placeholder="아이디(이메일)" {...field} />
                        </FormControl>
                        {/* <FormDescription>사용하실 아이디(이메일)을 입력하세요.</FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    </CardContent>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="password"
                  render={({ field }) => (
                    <CardContent className="space-y-2">
                      <FormItem>
                        <FormLabel>비밀번호</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="비밀번호" {...field} />
                        </FormControl>
                        {/* <FormDescription>사용하실 비밀번호를 입력하세요.</FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    </CardContent>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="name"
                  render={({ field }) => (
                    <CardContent className="space-y-2">
                      <FormItem>
                        <FormLabel>이름</FormLabel>
                        <FormControl>
                          <Input placeholder="사용자 이름" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </CardContent>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <CardContent className="space-y-2">
                      <FormItem>
                        <FormLabel>휴대전화 번호</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="010-1234-5678"
                            {...field}
                            onChange={(e) => {
                              const formattedValue = PHONE_NUMBERING(e.target.value);
                              field.onChange(formattedValue);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </CardContent>
                  )}
                />
                <CardFooter>
                  <Button type="submit">가입하기</Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
