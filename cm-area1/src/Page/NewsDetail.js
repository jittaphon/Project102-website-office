import React from 'react';
import { NewsDetailComponent } from "../Component/NewsDetailComponent";
import { motion } from "framer-motion";
const NewsDetail = () => {
    return (
        <motion.div>
            <NewsDetailComponent />
        </motion.div>
    );
}

export default NewsDetail;
