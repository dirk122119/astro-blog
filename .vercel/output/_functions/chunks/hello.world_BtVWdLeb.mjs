const id = "hello.world.mdx";
						const collection = "blog";
						const slug = "helloworld";
						const body = "import { Code } from 'astro/components';\n\n# Welcome to my MDX-powered Astro blog!\n\nThis is my first post on my new blog. I'm excited to use **Astro** and *MDX* together!\n\n## Code Example\n\nHere's a simple React component:\n\n<Code code={`\nfunction Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n`} lang=\"jsx\" />\n\n## Markdown Features\n\nWe can use all the standard Markdown features like:\n\n- Lists\n- [Links](https://astro.build)\n- *Italic* and **Bold** text\n\nAnd much more!";
						const data = {title:"Hello, World!",description:"This is my first blog post using Astro and MDX.",pubDate:new Date(1680307200000),tags:["astro","blogging","learning in public"],draft:true};
						const _internal = {
							type: 'content',
							filePath: "/Users/chenguanshou/CODE/astro/blog/src/content/blog/hello.world.mdx",
							rawData: "\nlayout: '../../layouts/BlogPost.astro'\ntitle: 'Hello, World!'\npubDate: 2023-04-01\ndescription: 'This is my first blog post using Astro and MDX.'\nimage:\n    url: 'https://astro.build/assets/blog/astro-1-release-update/cover.jpeg'\n    alt: 'The Astro logo with the word One.'\ntags: [\"astro\", \"blogging\", \"learning in public\"]\ndraft: true\n",
						};

export { _internal, body, collection, data, id, slug };
