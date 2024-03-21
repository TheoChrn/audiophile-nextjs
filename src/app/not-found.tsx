import LinkButton from "@/components/ui/linkButton";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100svh_-_9rem)] flex-col items-center justify-center gap-medium text-base">
      <h1 className="text-h1 text-accent">Not Found</h1>
      <p className="text-h4">Could not find requested resource</p>
      <LinkButton href="/" variant="accent">
        Return to home
      </LinkButton>
    </div>
  );
}
