import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { createSubscribeSession } from "./actions";

export default function Page() {
  return (
    <form action={createSubscribeSession}>
      <Card>
        <CardHeader className="border-b border-border">
          <CardTitle>
            Uso do plano
          </CardTitle>
          <CardDescription>
            Você está atualmente no [current_plan]. Ciclo de faturamento atual:{''}
            [next_due_date].
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <header className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">
                1/5
              </span>
              <span className="text-muted-foreground text-sm">
                20%
              </span>
            </header>
            <main>
              <Progress value={20} />
            </main>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t pt-6">
          <span>
            Para um maior limite, assine o PRO
          </span>
          <Button type="submit">Atualizar Plano por R$9/ mês</Button>
        </CardFooter>
      </Card>
    </form>

  )
}
