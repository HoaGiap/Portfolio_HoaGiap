import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  show: boolean;
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  show,
  message,
  type = 'success',
  onClose,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-none
            bg-[#101010] text-[#F2F2F2] border border-[#0000F2]
            shadow-[0_0_20px_rgba(0,0,242,0.35),inset_0_0_0_0.5px_#0000F2] font-mono text-xs"
        >
          {type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-[#0000F2] shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
          )}
          <span className="text-xs uppercase tracking-wider pr-2">{message}</span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 hover:bg-[#0000F2]/20 transition-colors"
            aria-label="Đóng"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
