import { mount } from "@vue/test-utils";

import List from "../../src/components/List.vue";
import Item from "../../src/models/Item.js";



describe("DoneItem", () => {
    const wrapper = mount(List,{
        propsData: {
            list: [new Item("Kokkamine")]
        }
    });
    it("When an item in the list is marked as done the item is updated correctly", () => {
        let list = wrapper.findAll(".list-item");
        if (list.length !== 0) {
            let oldvalue = wrapper.props().list[0].done;
            wrapper.find('span').trigger('click');
            let newvalue = wrapper.props().list[0].done;
            expect(newvalue).toBe(!oldvalue);
            wrapper.find('span').trigger('click');
            expect(wrapper.props().list[0].done).toBe(!newvalue);
        }
    });
});
