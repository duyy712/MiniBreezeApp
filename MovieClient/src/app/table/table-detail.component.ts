import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Table, Column } from '../object/object';
import { TableService } from './table.service';

@Component({
    selector: 'app-model-detail',
    templateUrl: 'table-detail.component.html',
    styles: ['table-detail.component.css']
})

export class TableDetailComponent implements OnInit {
    _sub: any;
    tableID: number;
    table: Table;
    columns: Column[];
    pageSize: number;
    pageIndex: number;
    totalCol: number;
    totalPage: number;
    result: Column[];
   
    selection: number;
    constructor(private tableService: TableService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this._sub = this.route.params.subscribe(params => {
            this.tableID = params['id'];
            this.tableService.getColumnByTableID(this.tableID).then(columns => this.columns = columns);
            this.pageIndex = 1;
            this.result = null;
        });
    }

    gotoPrev() {
        this.pageIndex = this.pageIndex - 1;
        this.paging();
    }

    gotoNext() {
        this.pageIndex = this.pageIndex + 1;
        this.paging();
    }

    paging() {
        this.totalCol = this.columns.length;
        this.totalPage = Math.ceil(this.totalCol / this.pageSize);
        if (this.pageSize == 0) { this.pageSize = 1; };
        this.tableService.getColumnAndPaging(this.tableID, this.pageSize, this.pageIndex)
            .then(columns => this.result = columns);

    }
    search(str: string) {
        this.tableService.getColumnByString(this.tableID, str).then(columns => this.result = columns);
    }

    selectSearch() {
        this.selection = 1;
        this.result = null;
    }

    selectPaging() {
        this.selection = 2;
        this.result = null;
    }
}
