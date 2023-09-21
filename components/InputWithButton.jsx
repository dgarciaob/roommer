import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-xl items-center space-x-2">
      <Input type="email" placeholder="Ingresa la ubicación" />
      <Button type="submit">Buscar</Button>
    </div>
  )
}
