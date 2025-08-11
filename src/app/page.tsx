import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input';
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div>
      <Button variant="elevated">hello asdasda sdsad</Button>
      <br />
      <Input />
      <br />
      <Progress value={40} />
    </div>
  );
}
