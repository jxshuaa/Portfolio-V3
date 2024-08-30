import {useState} from 'react';
import Layout from "../layout/layout";
import {motion} from "framer-motion";
import { siGithub, siDiscord, siTwitter, siInstagram } from 'simple-icons/icons';
import { Linkedin, Mail } from 'lucide-react';

export default function Contact() {
    const initialDiscordText = 'jxshuaa';
    const [discordText, setDiscordText] = useState(initialDiscordText);

    function handleDiscordClick() {
        navigator.clipboard.writeText("jxshuaa").then(r => {
            setDiscordText('Copied to clipboard!');

            setTimeout(() => {
                setDiscordText(initialDiscordText);
            }, 1000);
        });
    }

    return (
        <Layout title="Contact me">
            <div className="flex flex-grow items-center">
                <div className="w-full">
                    <div className="container flex mx-auto justify-center">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                            <div className="text-center">
                                <h1 className="md:text-6xl text-3xl font-bold">
                                    Contact <span className="text-rose-500">me</span>
                                </h1>
                                <p className="text-gray-200 text-lg font-medium px-4">
                                    Want to get in touch with me? I can contact in a variety of platforms provided below
                                </p>
                            </div>
                            <div className="mx-auto overflow-auto mt-4">
                                <div className="grid gap-8 px-4 md:px-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                                    <a href="mailto:me@jxshua.dev" className="bg-gray-800 text-white p-4 text-center rounded space-y-0.5">
                                        <Mail className="mx-auto max-h-12" size={48}>
                                            <title>Email</title>
                                        </Mail>
                                        <p className="text-white text-xl overflow-ellipsis">me@jxshua.dev</p>
                                    </a>
                                    <a href="https://github.com/jxshuaa" className="bg-gray-800 text-white p-4 text-center rounded space-y-0.5" target="_blank" rel="noopener noreferrer">
                                        <svg
                                            fill="currentColor"
                                            className="mx-auto max-h-12"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>{siGithub.title}</title>
                                            <path d={siGithub.path} />
                                        </svg>
                                        <p className="text-white text-xl overflow-ellipsis">Joshua</p>
                                    </a>
                                    <button onClick={handleDiscordClick} className="bg-gray-800 text-white p-4 text-center rounded space-y-0.5 has-tooltip hover:text-rose-600 duration-200">
                                        <svg
                                            fill="currentColor"
                                            className="mx-auto max-h-12"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>{siDiscord.title}</title>
                                            <path d={siDiscord.path} />
                                        </svg>
                                        <span className='tooltip bg-gray-800 text-white rounded shadow-lg'>{discordText}</span>
                                        <p className="text-white text-xl overflow-ellipsis">jxshuaa</p>
                                    </button>
                                    <a href="https://www.linkedin.com/in/joshua-lee-a47677320/" className="bg-gray-800 text-white p-4 text-center rounded space-y-0.5" target="_blank" rel="noopener noreferrer">
                                        <Linkedin fill="currentColor" strokeWidth="0" className="mx-auto max-h-12" size={48}>
                                            <title>Linkedin</title>
                                        </Linkedin>
                                        <p className="text-white text-xl overflow-ellipsis">Joshua L.</p>
                                    </a>
                                    <a href="https://twitter.com/jxshyyhere" className="bg-gray-800 text-white p-4 text-center rounded space-y-0.5" target="_blank" rel="noopener noreferrer">
                                        <svg
                                            fill="currentColor"
                                            className="mx-auto max-h-12"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>{siTwitter.title}</title>
                                            <path d={siTwitter.path} />
                                        </svg>
                                        <p className="text-white text-xl overflow-ellipsis">jxshyyhere</p>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
