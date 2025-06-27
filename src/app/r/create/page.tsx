import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SubRedditPage() {
  return (
    <div className=" lg:w-[1000px] w-[400px] mx-auto ">
      <h1 className=" lg:text-3xl my-3 text-xl tracking-tighter font-extrabold">
        Create Community
      </h1>
      <Separator />
      <div className="py-2 px-3">
        <Label className="text-lg ">Name</Label>
        <p className="text-muted-foreground">
          The community names cannot be changed again
        </p>
      </div>
      <div className="relative">
        <p className="absolute w-8 left-0 h-full items-center justify-center flex  ">
          r/
        </p>
        <Input className="lg-[600px] pl-7" min={3} maxLength={21} />
        
      </div>
    </div>
  );
}
