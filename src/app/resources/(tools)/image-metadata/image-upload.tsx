"use client";

import exifr from "exifr";
import { LucideFile } from "lucide-react";
import { type ChangeEvent, useState } from "react";
import { Input } from "~/app/components/ui/input";

interface FileWithMeta {
  file: File;
  meta: unknown;
}

export const ImageUpload = () => {
  const [filesWithMeta, setFilesWithMeta] = useState<FileWithMeta[]>([]);

  const handleFileSelection = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = await Promise.all(
      Array.from(e.target.files ?? []).map(async (file) => {
        const meta = await getMeta(file);
        return { file, meta };
      }),
    );
    setFilesWithMeta(files);
  };

  const getMeta = async (file: File): Promise<unknown> => {
    const fileUrl = URL.createObjectURL(file);
    const meta: unknown = await exifr.parse(fileUrl);
    return meta;
  };

  return (
    <>
      <div className="relative flex w-full flex-col items-center rounded-md border border-dashed border-neutral-200 bg-neutral-50 px-3 py-2 text-sm ring-offset-white text-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:hover:bg-neutral-700 dark:focus-visible:ring-neutral-300">
        <LucideFile className="h-12 w-12 text-neutral-50" />
        <span className="text-sm font-medium text-neutral-500">
          Drag and drop a file or click to browse
        </span>
        <span className="text-xs text-neutral-500">
          PDF, image, video, or audio
        </span>
        <Input
          type="file"
          accept="image/*"
          className="absolute inset-0 h-full cursor-pointer opacity-0"
          multiple
          onChange={handleFileSelection}
        />
      </div>
      <p className="font-semibold">Files:</p>
      <div className="flex flex-col gap-y-2">
        {filesWithMeta.map(({ file, meta }) => (
          <div key={file.name} className="rounded border px-4 py-2">
            <p className="font-bold">{file.name}</p>
            <pre>{JSON.stringify(meta, undefined, 2)}</pre>
          </div>
        ))}
      </div>
    </>
  );
};
