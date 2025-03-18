import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// On défini les options de l'authentification
export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY as string,
        }),
    ],
};