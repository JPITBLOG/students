import React,{Component} from 'react';
import {Pagination,PaginationItem,PaginationLink} from 'reactstrap';

class GridPagination extends Component{

    createTable = () => {
        let pageIndex = this.props.pageIndex;
        let totalPage = this.props.totalNumberOfPage;
        let paginationMapped = []
        let active = false;

        for (let i = 1; i <= totalPage; i++) {
            if(i === pageIndex) active = true;
            else active = false;
            paginationMapped.push(
                <PaginationItem active={active} key={i}>
                    <PaginationLink onClick = {event => this.props.clickOnPageIndex(event,i)}>
                        {i}
                    </PaginationLink>
                </PaginationItem>
            )
        }
        return paginationMapped
    }

    previousPage = () => {
        let pageIndex = this.props.pageIndex;
        if(pageIndex !== 1){
            return (<PaginationItem>
                        <PaginationLink previous onClick = {event => this.props.clickOnPageIndex(event,(pageIndex - 1))} />
                    </PaginationItem>)
        }
        return (<PaginationItem>
            <PaginationLink previous disable = "true" />
        </PaginationItem>)
    }

    nextPage = () => {
        let pageIndex = this.props.pageIndex;
        let totalPage = this.props.totalNumberOfPage;
        if(pageIndex !== totalPage){
            return (<PaginationItem>
                <PaginationLink next onClick = {event => this.props.clickOnPageIndex(event,(pageIndex + 1))} />
            </PaginationItem>)
        }
        return (<PaginationItem>
                    <PaginationLink next disable = "true"/>
                </PaginationItem>)
    }

    render(){
        let totalNumbarOfPage = this.props.totalNumberOfPage;
        return(
            <Pagination aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink first onClick = {event => this.props.clickOnPageIndex(event,1)}/>
                </PaginationItem>
                    {this.previousPage()}
                    {this.createTable()}
                    {this.nextPage()}
                <PaginationItem>
                    <PaginationLink last onClick = {event => this.props.clickOnPageIndex(event,totalNumbarOfPage)} />
                </PaginationItem>
            </Pagination>
        );
    }
}

export default GridPagination;