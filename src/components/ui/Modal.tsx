import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#000000]/85 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container: Hermes Sharp Obsidian Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="relative w-full max-w-3xl my-8 z-10 rounded-none p-1
              bg-[#141414] border border-[#0000F2]
              shadow-[0_0_40px_rgba(0,0,242,0.35)]"
          >
            {/* Technical Registration Marks */}
            <span className="corner-tick-tl" />
            <span className="corner-tick-tr" />
            <span className="corner-tick-bl" />
            <span className="corner-tick-br" />

            <div className="bg-[#101010] border border-[#0000F2]/30 text-[#F2F2F2] p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-[inset_0_0_0_0.5px_rgba(0,0,242,0.3)]">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#0000F2]/30 pb-4 mb-6">
                {title && (
                  <div className="flex items-center gap-2">
                    <span className="text-[#0000F2] font-mono text-xs font-bold">[ SPEC ]</span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-white">
                      {title}
                    </h3>
                  </div>
                )}
                <button
                  onClick={onClose}
                  className="rounded-none p-1.5 text-slate-400 hover:text-white hover:bg-[#0000F2] transition-colors ml-auto border border-transparent hover:border-[#0000F2]"
                  aria-label="Đóng"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div>{children}</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
