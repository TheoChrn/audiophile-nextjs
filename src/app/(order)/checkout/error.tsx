"use client";

import LinkButton from "@/components/ui/linkButton";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="flex min-h-[calc(100svh_-_9rem)] flex-col items-center justify-center gap-medium text-base">
      <h1 className="text-center text-h1 text-accent">{error.message}</h1>
      <LinkButton href="/" variant="accent">
        Return to home
      </LinkButton>
    </div>
  );
}
