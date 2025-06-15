import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface HumeAudioAnalysisModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  url: string;
}

export default function HumeAudioAnalysisModal({
  isOpen,
  onClose,
  url,
}: HumeAudioAnalysisModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!w-[80vw] !h-[70vh] !max-w-none !p-4 !flex !flex-col">
        <DialogHeader className="!gap-1 !mb-2 !flex-shrink-0 !text-center">
          <DialogTitle className="text-xl sm:text-2xl">
            Real-time Audio Analysis
          </DialogTitle>
        </DialogHeader>
        <iframe
          src={url}
          className="w-full flex-1 min-h-0 rounded-lg"
          title="Real-time Audio Analysis"
        />
      </DialogContent>
    </Dialog>
  );
}
