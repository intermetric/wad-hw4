import { mount } from "@vue/test-utils";

import List from "../../src/components/List.vue";

describe("List", () => {
  const wrapper = mount(List);

  it("If no list item is provided List component displays text: Add your first Todo task", () => {
    let list = wrapper.findAll(".list-item");
    if (list.length == 0) {
      let text = "Add your first Todo task";
      expect(wrapper.html()).toContain(text);
    }
  });
});
