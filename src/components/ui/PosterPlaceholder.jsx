import { FileImage } from "lucide-react";

export default function PosterPlaceholder({ title, note }) {
  return (
    <div className="flex min-h-72 flex-col items-center justify-center rounded-[2rem] border border-dashed border-emerald-200 bg-gradient-to-br from-emerald-50 to-orange-50 p-8 text-center shadow-sm">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
        <FileImage size={24} />
      </div>
      <h3 className="font-heading text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">{note}</p>
    </div>
  );
}
