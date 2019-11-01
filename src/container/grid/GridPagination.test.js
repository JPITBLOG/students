import React from 'react';
import { shallow,configure } from 'enzyme';
import GridPagination from "./GridPagination";
import Adapter from 'enzyme-adapter-react-16';
import {PaginationItem, PaginationLink} from "reactstrap";

configure({adapter: new Adapter()});

const props = {
    pageIndex:1,
    totalNumberOfPage:3
}

describe('Test case for gridPagination',() =>{
    let wrapper = shallow(<GridPagination {...props}/>);
    test("createTable function test in GridPagination ",() => {
        const resp = wrapper.instance().createTable();
        expect(resp.length).toEqual(3);
    })
    test("test case for previousPage",() => {
        const previousPageResp = wrapper.instance().previousPage();
    })
    test("test case for nextPage",() => {
        const nextPageResp = wrapper.instance().nextPage();
    })
})
