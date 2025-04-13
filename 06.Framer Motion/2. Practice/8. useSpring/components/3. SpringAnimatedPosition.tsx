import { motion, useSpring } from "framer-motion";

const SpringAnimatedPosition = () => {
  const x = useSpring(0);
  const y = useSpring(0);

  const moveBox = () => {
    x.set(Math.random() * 300);
    y.set(Math.random() * 300);
  };

  return (
    <div className="relative">
      <motion.div
        style={{ x, y }}
        className="w-32 h-32 bg-blue-500 rounded"
        onClick={moveBox}
      >
        Click Me
      </motion.div>
    </div>
  );
};

export default SpringAnimatedPosition;
