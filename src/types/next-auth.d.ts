declare module 'next-auth' {
    interface Session {
        user: Omit<User> & {
            id: string;
            email: string | null;
            name: string | null;
            username: string | null;
            image: string | null;
            emailVerified: Date | null;
            settings: ParsedUserSettings;
            tenants: UserTenant[];
        }
    }
}