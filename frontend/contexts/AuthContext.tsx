import { createContext, ReactNode, useState } from "react";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import Router from "next/router";

import { api } from "@/services/apiClient";

type AuthContextData = {
    user: UserProps | undefined;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>,
    signOut: () => void;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
}


type SignInProps = {
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}


export function signOut() {
    try {
        destroyCookie(undefined, '@app.token');
        Router.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {


    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;

    async function signIn({ email, password }: SignInProps) {
        try {
            const resp = await api.post('/login', {
                email,
                password
            })

            const { id, name, token } = resp.data;
            setCookie(undefined, '@app.token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path:'/'
            })

            setUser({
                id,
                name,
                email
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            Router.push('/dashboard');

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}