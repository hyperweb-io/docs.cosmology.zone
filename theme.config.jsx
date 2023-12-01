import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import React from "react";

export default {
  logo: (
    <>
      <img src="/images/favicon.svg" width="36px"></img>
      <span style={{ fontWeight: 600, fontSize: 20 }}>
        &nbsp;&nbsp;cosmology
      </span>
    </>
  ),
  logoLink: "https://docs.cosmology.zone",
  project: {
    link: "https://github.com/cosmology-tech",
  },
  editLink: {
    text: "Edit this page →",
  },
  feedback: {
    content: "Go to project Github →",
    useLink: () => {
      const { asPath } = useRouter();
      const head = "https://github.com/cosmology-tech";
      const project = asPath.split("/")[1];
      switch (project) {
        case "ts-codegen":
          return "https://github.com/CosmWasm/ts-codegen";
        default:
          return `${head}/${project}`;
      }
    },
  },
  docsRepositoryBase: "https://github.com/cosmology-tech/docs/tree/main",
  chat: {
    link: "https://discord.gg/6hy8KQ9aJY",
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { title } = useConfig();
    const url =
      "https://docs.cosmology.zone" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    const _title = asPath !== "/" ? `${title} - Cosmology` : `${title}`;
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={_title} />
        <meta property="og:description" content={"Web3 Products Provider"} />
        <link rel="icon" type="image/x-icon" href="/images/favicon.svg" />
        <title>{_title}</title>
      </>
    );
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  primaryHue: {
    light: 260,
    dark: 265,
  },
  primarySaturation: {
    light: 75,
    dark: 100,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Cosmology",
      };
    } else {
      return {
        titleTemplate: "%s",
      };
    }
  },
};
