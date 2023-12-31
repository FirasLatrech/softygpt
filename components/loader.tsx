import Image from "next/image";

export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-y-4">
      <div className="relative w-10 h-10 scale-150 animate-spin">
        <Image alt="Logo" src="/test.png" fill />
      </div>
      <p className="text-sm text-muted-foreground">Softy GPT is thinking...</p>
    </div>
  );
};
