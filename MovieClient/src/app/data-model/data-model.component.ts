import { Component, OnInit } from '@angular/core';
import { DataModelService } from './data-model.service';
import { Router } from '@angular/router';
import { Table, Column } from '../object/object';

@Component({
    selector: 'app-data-model',
    templateUrl: 'data-model.component.html',
    providers: [Table]
})

export class DataModelComponent implements OnInit {
    table: Table = {
        Name: 'Agi Heroes',
        Description: 'Test Table',
        Columns: [],
        Code: ''
    };
    entity: any;
    tables: Table[];
    sTable: Table;
    sColumns: Column[]; // search by ID
    ssColumns: Column[] ; // search by string
    temp: number;
    click: boolean = false ;
    constructor(private dataModelService: DataModelService) { }

    ngOnInit() {
        this.dataModelService.initPromise.then(() => {
            this.dataModelService.getTables()
                .then(tables => {
                    this.tables = tables;
                })
                .catch(error => Promise.reject(error));
        });
    }

    addTable() {
        this.entity = this.dataModelService.createTable(this.table);
        // this.entities.push(this.entity);
        this.saveChanges();
    }

    searchTable(id: number): Promise<any> {
        return this.dataModelService.getTableByID(id)
            .then(table => this.sTable = table);
    }

    saveChanges() {
        return this.dataModelService.saveChanges()
            .then(() => alert('success'))
            .catch(error => alert(error));
    }

    delete(table, id) {
        table.entityAspect.setDeleted();
        // this.tables.splice(id, 1);
        this.dataModelService.saveChanges()
            .then(() => {
                alert('success');
                console.log(this.tables.length);
            })
            .catch(error => console.log(error));
    }

    save() {
        return this.saveChanges();
    }

    getColumn(id: number) {
        this.temp = id;
        return this.dataModelService.getColumnByTableID(id).then(columns => this.sColumns = columns);
    }

    getColumnByString(str: string) {
        this.ssColumns = [];
        this.dataModelService.getColumnByString(this.temp, str).then(columns => this.ssColumns = columns);
    }
}
