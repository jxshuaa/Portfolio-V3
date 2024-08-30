import Layout from "../layout/layout";
import { motion } from "framer-motion";

export default function About() {
    return (
        <Layout title="About me">
            <div className="flex flex-grow items-center">
                <div className="w-full">
                    <div className="container flex mx-auto justify-center">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                            <h1 className="text-center md:text-6xl text-3xl font-bold">
                                About <span className="text-rose-500">me</span>
                            </h1>
                            <div className="container lg:w-3/5 w-11/12 mx-auto mt-4">
                                <div className="text-left md:text-justify space-y-6 text-lg font-medium text-gray-200">
                                    <p>
                                        Hey there, I am Joshua - a full-stack developer from Germany with approximately one year of back-end and two years of front-end development experience. Nowadays, I mainly use Next.js, NodeJS and Python for my projects, but I have used different frameworks in the past. I also love the open-source community. My coding knowledge is mostly based on many years of experimenting, trying and youtube tutorials. I am really happy with my progress so far. Along with the help of my friends I have recently gotten into the field of RE or Reverse Engineering, I mainly use X64DBG and other programs like binary ninja.
                                    </p>
                                    <div className="space-y-2">
                                        <p>
                                            I can use the following languages fluently:
                                        </p>
                                        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                                            <img alt="Python" src="https://img.shields.io/badge/-Python-18181b?style=for-the-badge&logo=python&logoColor=F43F5E" />
                                            <img alt="Javascript" src="https://img.shields.io/badge/-Javascript-18181b?style=for-the-badge&logo=javascript&logoColor=F43F5E" />
                                            <img alt="HTML5" src="https://img.shields.io/badge/-HTML5-18181b?style=for-the-badge&logo=html5&logoColor=F43F5E" />
                                            <img alt="CSS3" src="https://img.shields.io/badge/-CSS3-18181b?style=for-the-badge&logo=css3&logoColor=F43F5E" />
                                            <img alt="Go" src="https://img.shields.io/badge/-Go-18181b?style=for-the-badge&logo=go&logoColor=F43F5E" />
                                            <img alt="Docker" src="https://img.shields.io/badge/-Docker-18181b?style=for-the-badge&logo=docker&logoColor=F43F5E" />
                                        </div>
                                        <p>
                                            I can use the following frameworks and libraries:
                                        </p>
                                        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                                            <img alt="Bootstrap" src="https://img.shields.io/badge/-Bootstrap-18181b?style=for-the-badge&logo=bootstrap&logoColor=F43F5E" />
                                            <img alt="Flask" src="https://img.shields.io/badge/-Flask-18181b?style=for-the-badge&logo=flask&logoColor=F43F5E" />
                                            <img alt="React" src="https://img.shields.io/badge/-React-18181b?style=for-the-badge&logo=react&logoColor=F43F5E" />
                                            <img alt="Next.js" src="https://img.shields.io/badge/-Next.js-18181b?style=for-the-badge&logo=next.js&logoColor=F43F5E" />
                                            <img alt="Prisma" src="https://img.shields.io/badge/-Prisma-18181b?style=for-the-badge&logo=prisma&logoColor=F43F5E" />
                                        </div>
                                        <p>
                                            Miscellaneous tools that I use:
                                        </p>
                                        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                                            <img alt="Linux" src="https://img.shields.io/badge/-Linux-18181b?style=for-the-badge&logo=linux&logoColor=F43F5E" />
                                            <img alt="NGINX" src="https://img.shields.io/badge/-NGINX-18181b?style=for-the-badge&logo=nginx&logoColor=F43F5E" />
                                            <img alt="Git" src="https://img.shields.io/badge/-Git-18181b?style=for-the-badge&logo=git&logoColor=F43F5E" />
                                        </div>
                                        <p>
                                            Currently learning:
                                        </p>
                                        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                                            <img alt="Rust" src="https://img.shields.io/badge/-Rust-18181b?style=for-the-badge&logo=rust&logoColor=F43F5E" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
