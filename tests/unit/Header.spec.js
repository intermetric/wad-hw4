import {mount} from '@vue/test-utils';
import Header from "../../src/components/Header.vue";

describe('Header component', () => {

    const wrapper = mount(Header)

    // check if component displays correct date
    it('test if header component displays correct date', () => {
        let today = new Date();
        let date = today.getDate() < 10 ? `0${today.getDate()}` :
        today.getDate();

        expect(wrapper.html()).toContain(date)
    })

    it('tests if header component displays correct year', () => {
        let year = new Date().getFullYear();
        expect(wrapper.html()).toContain(year)
    })

    it("test if header component displays correct month", () =>{
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        let month = new Date().getMonth();
        expect(wrapper.html()).toContain(monthNames[month - 1])
    })


    it("test if header component displays correct week day", () =>{
        let d = new Date();
        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        let day = weekday[d.getDay()];

        expect(wrapper.find("weekday")).toContain(day)
    })
});