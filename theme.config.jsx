import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import React from "react";

export default {
  logo: (
    <img
      src="https://cosmology.zone/logos/cosmology/cosmology-with-name.svg"
      width="150px"
    />
  ),
  project: {
    link: "https://github.com/cosmology-tech",
  },
  docsRepositoryBase: "https://github.com/cosmology-tech/docs",
  editLink: {
    text: "Edit this page on GitHub",
  },
  chat: {
    link: "https://discord.gg/6hy8KQ9aJY",
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { title } = useConfig();
    const url =
      "https://docs.cosmology.zone/" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    const _title = asPath !== "/" ? `${title} - Cosmology` : `${title}`;
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={_title} />
        <meta property="og:description" content={"Web3 Products Provider"} />
        <link rel="icon" type="image/x-icon" href="/images/icon.ico" />
        <title>{_title}</title>
      </>
    );
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
};
