import { F as Fragment, _ as __astro_tag_component__, c as createVNode } from './astro/server_pGyjC6cI.mjs';
import { $ as $$BlogPost } from './BlogPost_DCuFqRaf.mjs';
import 'clsx';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$BlogPost, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "OAuth2.0 Implicit Grant",
  "pubDate": "2024-08-31T00:00:00.000Z",
  "description": "This is span example of OAuth2.0 Implicit Grant",
  "image": {
    "url": "https://astro.build/assets/blog/astro-1-release-update/cover.jpeg",
    "alt": "The Astro logo with the word One."
  },
  "tags": ["OAuth2.0"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "註冊憑證",
    "text": "註冊憑證"
  }, {
    "depth": 2,
    "slug": "在應用程式端發http請求",
    "text": "在應用程式端發http請求"
  }, {
    "depth": 2,
    "slug": "回傳的請求",
    "text": "回傳的請求"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "註冊憑證",
      children: "註冊憑證"
    }), "\n", createVNode(_components.p, {
      children: ["到", createVNode(_components.a, {
        href: "https://console.developers.google.com/?hl=zh-tw",
        children: "Google API Console"
      }), "註冊OAuth2.0憑證"]
    }), "\n", createVNode(_components.h2, {
      id: "在應用程式端發http請求",
      children: "在應用程式端發http請求"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "https://accounts.google.com/o/oauth2/v2/auth?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "response_type=token&client_id=${yourClientId}&"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "redirect_uri=${yourRedirectUri}&"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "scope=${authrieScope}"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "回傳的請求",
      children: "回傳的請求"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "http://127.0.0.1:3000/callback#access_token=ya29.a0AcM612xDtsHzT-KAuFoRwt3XiFFXnYnssx5wRAO4cV_EoNhFfaYv4H4-RvAYIOLhGRRTHpnkXlO7nR1Kd5jH_FxrunS5MQb_ajZmyGMBdHe_k0XoDlcVt6f0foHlq-I1ReogMChuwS7Tw_v5tGUJmgoaV7NowS_bywaCgYKAfMSARMSFQHGX2MiISle4RR7kFBjZcxh2RdBHA0169&"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "token_type=Bearer&"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "expires_in=3598&"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "scope=email%20profile%20openid%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "authuser=0&"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "prompt=none"
          })
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "src/content/blog/auth2-implict-grant.mdx";
const file = "/Users/chenguanshou/CODE/astro/blog/src/content/blog/auth2-implict-grant.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/chenguanshou/CODE/astro/blog/src/content/blog/auth2-implict-grant.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
