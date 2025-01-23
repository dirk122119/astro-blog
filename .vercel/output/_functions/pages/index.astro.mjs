import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_pGyjC6cI.mjs';
import { g as getCollection } from '../chunks/consts_CZ7Qb74U.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_C82-chZ2.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Calendar } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

function PostCard({ className, ...props }) {
  return /* @__PURE__ */ jsxs(Card, { className: cn("w-[380px]", className), ...props, children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: props.post.data.title }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx(Calendar, { className: "inline mr-1 h-4 w-4" }),
        "Posted on April ",
        props.post.data.pubDate.getDate(),
        ", 2023"
      ] })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("p", { children: [
      "This is a brief excerpt from blog post ",
      props.post.data.title,
      ". It provides a quick overview of what the post is about, enticing readers to click and read more..."
    ] }) }),
    /* @__PURE__ */ jsx(CardFooter, {})
  ] });
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  ).filter((post) => !post.data.draft);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="relative bg-gradient-to-r from-purple-600 to-blue-600 py-24 text-white"> <div class="container mx-auto px-4"> <div class="max-w-3xl mx-auto text-center"> <blockquote class="text-2xl md:text-3xl font-light italic mb-8">
"If you want to learn something, read about it.<br>
If you want to understand something, write about it.<br>
If you want to master something, teach it."
</blockquote> <p class="text-lg">- YOGI Bhajan</p> </div> </div> <!-- Decorative element --> <!-- <div
			class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"
		  >
		  </div> --> </div> <div class="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8"> <div class="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}/`, "href")}> ${renderComponent($$result2, "PostCard", PostCard, { "className": "w-full", "post": post, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/PostCard", "client:component-export": "PostCard" })} </a>`)} </div> </div> ` })}`;
}, "/Users/chenguanshou/CODE/astro/blog/src/pages/index.astro", undefined);

const $$file = "/Users/chenguanshou/CODE/astro/blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
