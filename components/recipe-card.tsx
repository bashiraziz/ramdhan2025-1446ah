import Image from "next/image"
import { Clock, ChefHat } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface RecipeCardProps {
  title: string
  description: string
  prepTime: string
  difficulty: string
  image: string
}

export default function RecipeCard({ title, description, prepTime, difficulty, image }: RecipeCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-600">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{prepTime}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <ChefHat className="h-4 w-4" />
            <span>{difficulty}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#1a1f36] hover:bg-[#2a2f46]">View Recipe</Button>
      </CardFooter>
    </Card>
  )
}

