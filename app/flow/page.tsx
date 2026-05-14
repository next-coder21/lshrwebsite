import type { Metadata } from "next";
import FlowPageClient from "./FlowPageClient";

export const metadata: Metadata = {
  title: "Application Flow — LisHR",
  description: "End-to-end architecture and user journey reference for LisHR HRMS — roles, modules, data flows, and security model.",
};

export default function FlowPage() {
  return <FlowPageClient />;
}
