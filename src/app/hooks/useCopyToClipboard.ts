import { useToast } from "~/app/components/ui/use-toast";

type CopyFn = (text: string) => Promise<boolean>;

export function useCopyToClipboard(): CopyFn {
  const { toast } = useToast();

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      toast({
        title: "Browser support warning",
        description: "Clipboard is not supported on this browser.",
        variant: "destructive",
      });
      return false;
    }

    // Try to save to clipboard
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `"${text}" copied to clipboard.`,
      });
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      toast({
        title: "Something went wrong",
        description: "Could not copy to clipboard.",
        variant: "destructive",
      });
      return false;
    }
  };

  return copy;
}
