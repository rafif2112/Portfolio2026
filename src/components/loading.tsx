import { Settings } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[70dvh] flex items-center justify-center text-2xl">
        <Settings className="w-8 h-8 mr-4 animate-spin" />
        Loading...
    </div>
  );
}