import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export const Toast = () => {
  const createDefaultToast = () => {
    // toast.error("Error Toast Created");
    toast.success("Toast created");
  };
  return (
    <div className="flex w-full p-4">
      <div className="flex flex-col w-full items-start gap-2">
        <p className="text-3xl">Usage Toast</p>
        <Button
          onClick={() => {
            createDefaultToast();
          }}
        >
          Create Toast
        </Button>
        <Link to={"/"} className={buttonVariants({ variant: "outline" })}>
          Go to Home
        </Link>
      </div>
    </div>
  );
};
