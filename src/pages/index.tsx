import Head from "next/head";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work, Shipped } from "@/components/Work";
import { Experience, Stack, Record } from "@/components/Sections";
import { Closing } from "@/components/Closing";
import { profile } from "@/data/profile";

/*
  Page plan — software / site-kind software / kind tech
  Deal: hero "centred", palette "soot-pale-lime", type "chivo", radius soft, buttons pill,
        ground "deep", one effect (grain-gradient, hero only), one moment (the window's loop).

  1  top         the assistant itself, live                              1 screen
  2  work        four systems, each with its own real UI fragment        2 screens
  3  shipped     the rest of the public repositories, as a list          1 screen
  4  experience  the internship, the degree, the club roles              1 screen
  5  stack       the real marks of what he uses                          1 screen
  6  record      two contest ratings and one published paper             1 screen
  7  contact     the close and the directory, in one section             1 screen
*/

export default function HomePage() {
  const title = `${profile.name} — ${profile.role}`;
  const description =
    "I build retrieval pipelines, agent graphs and the REST APIs underneath them. Final-year computer science at Bennett University, in New Delhi.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="page-type" content="software" />
        <meta name="site-kind" content="software" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <Nav />

      <main>
        <Hero />
        <Work />
        <Shipped />
        <Experience />
        <Stack />
        <Record />
      </main>

      <Closing />
    </>
  );
}
