import Layout from "../layout/layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
        <div className="flex flex-grow items-center">
            <div className="w-full">
                <div className="container flex mx-auto justify-center">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                        <h1 className="md:text-6xl text-3xl font-bold">
                          Hey there, I'm <span className="text-rose-500">Joshua L.</span>
                        </h1>
                        <p className="text-gray-200 text-lg font-medium">
                            Junior Developer & Tech Boy
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
