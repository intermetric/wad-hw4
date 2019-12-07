import { mount } from "@vue/test-utils";

import List from "../../src/components/List.vue";
import Item from "../../src/models/Item.js";



describe("DoneItem", () => {
    const wrapper = mount(List,{
        propsData: {
            list: [new Item("Cooking"), new Item("Homework")]
        }
    });
    it("When an item in the list is marked as done the item is updated correctly", () => {
        let list = wrapper.findAll(".list-item");
        if (list.length !== 0) {
            let oldvalue = wrapper.props().list[0].done;
            wrapper.find('.list-item:nth-of-type(1) span').trigger('click');
            let newvalue = wrapper.props().list[0].done;
            expect(newvalue).toBe(!oldvalue);
            //Change back to old value
            wrapper.find('.list-item:nth-of-type(1) span').trigger('click');
            expect(wrapper.props().list[0].done).toBe(oldvalue);

            //Try changing second item
            let oldValue1 = wrapper.props().list[1].done;
            wrapper.find('.list-item:nth-of-type(2) span').trigger('click');
            let newValue1 = wrapper.props().list[1].done;
            expect(newValue1).toBe(!oldValue1);
            //Make sure that the first item doesnt change
            expect(wrapper.props().list[0].done).toBe(oldvalue)
        }
    });
});
