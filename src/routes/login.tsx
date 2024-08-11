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
    <div className="w-screen h-screen flex justify-center items-center px-4">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">로그인</TabsTrigger>
          <TabsTrigger value="register">회원가입</TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="mt-2">
          <Card>
            <CardHeader>
              <CardTitle>로그인</CardTitle>
              <CardDescription>여기서 로그인하세요.</CardDescription>
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
        </TabsContent>
        <TabsContent value="register" className="mt-2">
          <Card>
            <CardHeader>
              <CardTitle>회원가입</CardTitle>
              <CardDescription>여기서 가입하세요.</CardDescription>
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
                        <FormLabel>성함</FormLabel>
                        <FormControl>
                          <Input placeholder="사용자 성함" {...field} />
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
