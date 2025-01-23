import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderSlot } from './astro/server_pGyjC6cI.mjs';
import 'clsx';

const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="container py-6"> <article class="prose prose-stone mx-auto dark:prose-invert"> ${renderSlot($$result, $$slots["default"])} </article> </main>`;
}, "/Users/chenguanshou/CODE/astro/blog/src/layouts/BlogPost.astro", undefined);

export { $$BlogPost as $ };
