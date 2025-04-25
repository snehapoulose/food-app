import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
    providers:[
        Credentials({
            name:'Credentials',
            credentials: {
                email:{label:'Email',type:'text'},
                password:{label:'Password',type:'password'},
            },
            async authorize(credentials){
                const {email,password} = credentials as {email : string, password:string};
                if(email === "raj123@gmail.com" && password === '123456'){
                    return{id:'1',name:'Raj',email};
                }
                return null;
            },
        }),
    ],
    pages:{
       signIn:'/auth/signin', 
    },
    session:{
        strategy:'jwt',
    },
    secret:process.env.NEXTAUTH_SECRET,
});
export {handler as GET , handler as POST}