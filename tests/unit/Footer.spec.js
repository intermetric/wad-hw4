import { mount } from "@vue/test-utils";

import Footer from "../../src/components/Footer.vue";

describe("Footer", () => {
  const wrapper = mount(Footer);

  it("When '+' button is clicked, 'open' property changes to true", () => {
    wrapper.find("span").trigger("click");
    let open = wrapper.vm.$data.open;
    expect(open).toBe(true);
  });
});
