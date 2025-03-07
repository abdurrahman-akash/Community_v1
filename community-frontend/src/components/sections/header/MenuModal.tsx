import { motion } from "framer-motion";
import React,{JSX} from "react";
import { FaTimes } from "react-icons/fa";

interface MenuModalProps {
  showMenuModal: boolean;
  setShowMenuModal: (show: boolean) => void;
  navItems: { name: string; link: string; icon: JSX.Element }[];
}

const backdropVariants = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0, transition: { duration: 0.3 } },
};

const modalVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.4 },
  },
};

const MenuModal: React.FC<MenuModalProps> = ({ showMenuModal, setShowMenuModal, navItems }) => {
  return (
    <>
      {showMenuModal && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="relative bg-white/70 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl w-full max-w-sm p-6"
            variants={modalVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <button
              onClick={() => setShowMenuModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/50 hover:bg-white/80 transition"
            >
              <FaTimes className="h-5 w-5 text-gray-700" />
            </button>

            <div className="flex justify-center mb-8">
              <h1 className="text-2xl font-extrabold text-gray-800 tracking-wide">
                My<span className="text-blue-500">Logo</span>
              </h1>
            </div>

            <nav>
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/60 hover:bg-blue-100 transition shadow-sm"
                    >
                      <span className="text-blue-600">{item.icon}</span>
                      <span className="font-medium text-gray-800">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default MenuModal;
