"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[calc(95svh_-_9rem)] flex-col items-center justify-center gap-medium text-base">
      <h1 className="text-center text-h1 text-accent">{error.message}</h1>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
