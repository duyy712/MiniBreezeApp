import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Router } from '@angular/router';
import { Table, Column } from '../object/object';

@Component({
    selector: 'app-data-model',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss'],
    providers: [Table]
})

export class TableComponent implements OnInit {
    entity: any;
    tables: Table[];
    sTable: Table;
    sColumns: Column[]; // search by ID
    ssColumns: Column[]; // search by string
    pColumns: Column[];
    temp: number;
    click = false;
    constructor(private dataModelService: TableService, private table: Table) { }

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
        this.click = true;
    }
    saveTable() {
        this.entity = this.dataModelService.createTable(this.table);
        // this.entities.push(this.entity);
        this.saveChanges();
        this.click = false;
        window.location.reload();
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
}
