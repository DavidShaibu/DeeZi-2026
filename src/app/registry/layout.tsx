import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registry",
};

export default function RegistryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
