import nextAuth from "next-auth";
import githubAuth from "next-auth/providers/github"

const authOption = {
    providers : [
        githubAuth({
            clientId: "",
            clientSecret: ""
        })
    ]
}

const handle = nextAuth()