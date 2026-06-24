import { useState, useEffect } from "react";

type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    isLoggedIn: boolean;
};

function useUser() {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (id: number) => {
        setIsLoading(true);

        try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const data = await response.json();

        setUser({
            id: data.id,
            name: data.name,
            email: data.email,
            age: 0,
            isLoggedIn: true,
        });
        } finally {
        setIsLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
    };

    const updateUser = (updated: Partial<User>) => {
        setUser((prev) => {
        if (!prev) return null;

        return {
            ...prev,
            ...updated,
        };
        });
    };

    useEffect(() => {
        console.log("현재 유저:", user);
    }, [user]);

    return {
        user,
        isLoading,
        login,
        logout,
        updateUser,
    };
}

export default useUser;