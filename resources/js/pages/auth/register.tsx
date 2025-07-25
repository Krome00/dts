import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import logo from './../../../image/logo.png';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BackgroundIcons } from '@/components/background-icon';
import SecureNotice from '@/components/secure-notice';
import AllRightsReserved from '@/components/all-rights-reserved';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {

    const [showPassword, setShowPassword] = useState(false)
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
            <Head title="Log in" />
            {/* Animated Background Icons */}
            <BackgroundIcons />

            {/* Animated Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full animate-pulse-slow blur-xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200/15 rounded-full animate-float-slow blur-2xl"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-slate-300/25 rounded-full animate-bounce-slow blur-lg"></div>
                <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-purple-200/20 rounded-full animate-float-medium blur-xl"></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Header with Animation */}
                <div className="text-center mb-8 animate-fade-in-up">
                    <div className="flex items-center justify-center mb-4">
                        {/* <div className="bg-blue-600 p-0 rounded-xl shadow-lg animate-float-gentle hover:scale-110 transition-transform duration-300"> */}
                        <Avatar className="h-20 w-20  rounded-b-full shadow-lg animate-float-gentle hover:scale-110 transition-transform duration-300">
                            <AvatarImage src={logo} alt='Logo' />
                        </Avatar>
                        {/* </div> */}
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                        Document Tracking System
                    </h1>
                    <p className="text-slate-600 mt-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                        Secure document management and tracking
                    </p>
                </div>

                {/* Login Card with Animation */}
                <Card
                    className="shadow-xl border-0 backdrop-blur-sm bg-white/95 animate-fade-in-up"
                    style={{ animationDelay: "0.6s" }}
                >
                    <CardHeader className="space-y-1 pb-6">
                        <CardTitle className="text-2xl font-semibold text-center">Create an account</CardTitle>
                        <CardDescription className="text-center">Enter your details below to create your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-4">
                            <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: "0.8s" }}>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    disabled={processing}
                                    placeholder="Full name"
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>
                            <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: "0.8s" }}>
                                <Label htmlFor="email">Email address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    disabled={processing}
                                    placeholder="email@example.com"
                                />
                                <InputError message={errors.email} />
                            </div>
                            <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: "0.8s" }}>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    tabIndex={3}
                                    autoComplete="new-password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    disabled={processing}
                                    placeholder="Password"
                                />
                                <InputError message={errors.password} />
                            </div>
                            <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: "0.8s" }}>
                                <Label htmlFor="password_confirmation">Confirm password</Label>
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    required
                                    tabIndex={4}
                                    autoComplete="new-password"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    disabled={processing}
                                    placeholder="Confirm password"
                                />
                                <InputError message={errors.password_confirmation} />
                            </div>
                            {/* <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: "1s" }}>
                                    <Label htmlFor="password">Password</Label>
                                    <div className="relative">
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            required
                                            tabIndex={2}
                                            autoComplete="current-password"
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            placeholder="Password"
                                            className="h-11 pr-10 transition-all duration-300 focus:scale-[1.02] focus:shadow-md"

                                        />


                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent transition-transform hover:scale-110"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-4 w-4 text-slate-500" />
                                            ) : (
                                                <Eye className="h-4 w-4 text-slate-500" />
                                            )}
                                        </Button>
                                    </div>

                                    <InputError message={errors.password} />
                                </div> */}



                            <Button
                                type="submit"
                                className="w-full h-11 bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg animate-fade-in"
                                style={{ animationDelay: "1.4s" }}
                                disabled={processing}
                            >
                                {processing ? (
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Signing in...</span>
                                    </div>
                                ) : (
                                    "Sign In"
                                )}
                            </Button>
                            <div className="text-center text-sm text-muted-foreground">
                                Already have an account?{' '}
                                <TextLink href={route('login')} tabIndex={6}>
                                    Log in
                                </TextLink>
                            </div>
                        </form>
                        {status && <div className="my-4 text-center text-sm font-medium text-green-600">{status}</div>}


                    </CardContent>
                </Card>

                <SecureNotice />
                <AllRightsReserved />
            </div>
        </div>
    );
}
