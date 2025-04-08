import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TruncatedDescription = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200;
  const shouldTruncate = text.length > maxLength;

  const truncatedText = shouldTruncate && !isExpanded 
    ? text.slice(0, maxLength) + '...' 
    : text;

  return (
    <div className="truncated-description">
      <AnimatePresence initial={false}>
        <motion.p
          key={isExpanded ? 'expanded' : 'collapsed'}
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="card--desc"
        >
          {truncatedText}
        </motion.p>
      </AnimatePresence>
      
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="read-more-button"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  );
};

export default TruncatedDescription; 