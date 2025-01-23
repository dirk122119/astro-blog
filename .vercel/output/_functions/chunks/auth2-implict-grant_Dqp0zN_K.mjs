const id = "auth2-implict-grant.mdx";
						const collection = "blog";
						const slug = "auth2-implict-grant";
						const body = "## 註冊憑證\n到[Google API Console](https://console.developers.google.com/?hl=zh-tw)註冊OAuth2.0憑證\n\n## 在應用程式端發http請求\n```\nhttps://accounts.google.com/o/oauth2/v2/auth?\nresponse_type=token&client_id=${yourClientId}&\nredirect_uri=${yourRedirectUri}&\nscope=${authrieScope}\n```\n## 回傳的請求\n```\nhttp://127.0.0.1:3000/callback#access_token=ya29.a0AcM612xDtsHzT-KAuFoRwt3XiFFXnYnssx5wRAO4cV_EoNhFfaYv4H4-RvAYIOLhGRRTHpnkXlO7nR1Kd5jH_FxrunS5MQb_ajZmyGMBdHe_k0XoDlcVt6f0foHlq-I1ReogMChuwS7Tw_v5tGUJmgoaV7NowS_bywaCgYKAfMSARMSFQHGX2MiISle4RR7kFBjZcxh2RdBHA0169&\ntoken_type=Bearer&\nexpires_in=3598&\nscope=email%20profile%20openid%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&\nauthuser=0&\nprompt=none\n```";
						const data = {title:"OAuth2.0 Implicit Grant",description:"This is span example of OAuth2.0 Implicit Grant",pubDate:new Date(1725062400000),tags:["OAuth2.0"],draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/chenguanshou/CODE/astro/blog/src/content/blog/auth2-implict-grant.mdx",
							rawData: "\nlayout: '../../layouts/BlogPost.astro'\ntitle: 'OAuth2.0 Implicit Grant'\npubDate: 2024-08-31\ndescription: 'This is span example of OAuth2.0 Implicit Grant'\nimage:\n    url: 'https://astro.build/assets/blog/astro-1-release-update/cover.jpeg'\n    alt: 'The Astro logo with the word One.'\ntags: [\"OAuth2.0\"]\ndraft: false\n",
						};

export { _internal, body, collection, data, id, slug };
