import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant="elevated">press me</Button>
        </div>
        <div>
          <Input placeholder="input here please"></Input>
        </div>
        <div>
          <Progress value={30}></Progress>
        </div>
        <div>
          <Textarea placeholder="text here"></Textarea>
        </div>
        <div>
          <Checkbox></Checkbox>
        </div>
      </div>
    </div>
  );
}
