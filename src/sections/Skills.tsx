"use client";

import { useEffect, useMemo, useState } from "react";
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from "react-icon-cloud";

const slugs = [
  "cplusplus",
  "javascript",
  "typescript",
  "html5",
  "css3",
  "nextdotjs",
  "langchain",
  "github",
  "react",
  "nodedotjs",
  "mongodb",
  "docker",
  "python",
  "langgraph",
  "git",
  "postgresql",
];

function useIcons(slugsToFetch: string[]) {
  const [icons, setIcons] = useState<ReturnType<typeof renderSimpleIcon>[]>([]);

  useEffect(() => {
    fetchSimpleIcons({ slugs: slugsToFetch }).then((data) => {
      const rendered = Object.values(data.simpleIcons).map((icon) =>
        renderSimpleIcon({
          icon,
          size: 52,
          aProps: {
            onClick: (e: React.MouseEvent) => e.preventDefault(),
          },
        })
      );
      setIcons(rendered);
    });
  }, [slugsToFetch]);

  return icons;
}

export function Skills() {
  const icons = useIcons(slugs);

  const cloudProps = useMemo(
    () => ({
      id: "skills-cloud",
      containerProps: {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingTop: 40,
          paddingBottom: 40,
        },
      },
      options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        initial: [0.1, -0.1] as [number, number],
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
        dragControl: true,
      },
    }),
    []
  );

  return (
    <section
      id="skills"
      className="relative overflow-hidden pt-0 pb-28"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="section">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-(--accent) sm:text-base">
            Tech stack
          </span>
          <h2 className="mt-2 px-2 text-3xl font-bold tracking-tight text-pretty sm:text-5xl md:text-6xl">
            My{" "}
            <span className="text-gradient-shimmer">Skills</span>
          </h2>
        </div>

        {/* 3D Globe */}
        <div className="mx-auto mt-6 max-w-xl">
          {icons.length > 0 ? (
            <Cloud {...cloudProps}>{icons}</Cloud>
          ) : (
            <div className="flex h-80 items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-(--accent) border-t-transparent" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
