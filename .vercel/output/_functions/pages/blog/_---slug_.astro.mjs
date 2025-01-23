import { e as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../../chunks/astro/server_pGyjC6cI.mjs';
import { g as getCollection } from '../../chunks/consts_CZ7Qb74U.mjs';
import { $ as $$PageLayout } from '../../chunks/PageLayout_C82-chZ2.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = await getCollection("blog");
  const { slug } = Astro2.params;
  const post = posts.find((page) => page?.slug === slug);
  if (!post || post.data.draft) return Astro2.redirect("/404");
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/chenguanshou/CODE/astro/blog/src/pages/blog/[...slug].astro", undefined);

const $$file = "/Users/chenguanshou/CODE/astro/blog/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
