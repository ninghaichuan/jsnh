import { cn } from "@/lib/utils";

// Empty component
export function Empty({ message = "暂无数据" }: { message?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center h-60 text-gray-500")}>
      <i className="fa-solid fa-folder-open text-4xl mb-3 text-gray-300"></i>
      <p>{message}</p>
    </div>
  );
}
