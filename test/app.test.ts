import { mountSuspended } from "@nuxt/test-utils/runtime";
import App from "../app.vue";
import { describe, it, expect } from "vitest";

describe("App", () => {
  it("can mount the component", async () => {
    const component = await mountSuspended(App);
    expect(component.html()).toContain("Welcome");
  });
});
