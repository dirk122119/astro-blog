const id = "using-mdx.mdx";
						const collection = "blog";
						const slug = "using-mdx";
						const body = "This theme comes with the [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) integration installed and configured in your `astro.config.mjs` config file. If you prefer not to use MDX, you can disable support by removing the integration from your config file.\n\n## Why MDX?\n\nMDX is a special flavor of Markdown that supports embedded JavaScript & JSX syntax. This unlocks the ability to [mix JavaScript and UI Components into your Markdown content](https://docs.astro.build/en/guides/markdown-content/#mdx-features) for things like interactive charts or alerts.\n\nIf you have existing content authored in MDX, this integration will hopefully make migrating to Astro a breeze.\n\n## Example\n\nHere is how you import and use a UI component inside of MDX.  \nWhen you open this page in the browser, you should see the clickable button below.\n\nimport HeaderLink from '../../components/HeaderLink.astro'\n\n<HeaderLink href=\"#\" onclick=\"alert('clicked!')\">\n\tEmbedded component in MDX\n</HeaderLink>\n\n## More Links\n\n- [MDX Syntax Documentation](https://mdxjs.com/docs/what-is-mdx)\n- [Astro Usage Documentation](https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages)\n- **Note:** [Client Directives](https://docs.astro.build/en/reference/directives-reference/#client-directives) are still required to create interactive components. Otherwise, all components in your MDX will render as static HTML (no JavaScript) by default.";
						const data = {title:"Using MDX",description:"Lorem ipsum dolor sit amet",pubDate:new Date(1680307200000),tags:[],draft:true};
						const _internal = {
							type: 'content',
							filePath: "/Users/chenguanshou/CODE/astro/blog/src/content/blog/using-mdx.mdx",
							rawData: "\nlayout: '../../layouts/BlogPost.astro'\ntitle: 'Using MDX'\ndescription: 'Lorem ipsum dolor sit amet'\npubDate: 2023-04-01\ndraft: true\n",
						};

export { _internal, body, collection, data, id, slug };
