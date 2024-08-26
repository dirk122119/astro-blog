import { Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { CollectionEntry } from 'astro:content';
type BlogPost = CollectionEntry<'blog'>;
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>

export function PostCard({ className, ...props }: CardProps & {post: BlogPost}) {
	return (
        <Card className={cn("w-[380px]", className)} {...props} >
        <CardHeader>
                  <h2 className="text-2xl font-bold">{props.post.data.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    <Calendar className="inline mr-1 h-4 w-4" />
                    Posted on April {props.post.data.pubDate.getDate()}, 2023
                  </p>
                </CardHeader>
                <CardContent>
                  <p>
                    This is a brief excerpt from blog post {props.post.data.title}. It provides a quick overview of what the post is about,
                    enticing readers to click and read more...
                  </p>
                </CardContent>
                <CardFooter>
                  {/* <Button variant="outline">Read More</Button> */}
                </CardFooter>
              </Card>
	)
}