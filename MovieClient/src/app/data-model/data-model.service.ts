import { Injectable } from '@angular/core';
import { EntityManager, EntityQuery, config } from 'breeze-client';
import { AjaxAngularAdapter } from 'breeze-bridge-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()

export class DataModelService {
    private entityManager: EntityManager;
    private apiUrl = 'http://localhost:61371/breeze/datamodel';
    initPromise: Promise<any>;
    store: any;

    constructor(private http: Http) {
        config.registerAdapter('ajax', () => new AjaxAngularAdapter(http));
        config.initializeAdapterInstance('ajax', AjaxAngularAdapter.adapterName, true);
        this.entityManager = new EntityManager(this.apiUrl);
        this.initPromise = this.entityManager.metadataStore.isEmpty() ? this.entityManager.fetchMetadata() : Promise.resolve();
    }

    createEntity(entityType: string, initial?: any): any {
        return this.entityManager.createEntity(entityType, initial);
    }

    createTable(initial?: any) {
        return this.createEntity('Table', initial);
    }

    createColumn(initial?: any) {
        return this.createEntity('Column', initial);
    }

    saveChanges(entities?: any[]): Promise<any> {
        return <Promise<any[]>><any>this.entityManager.saveChanges(entities)
            .then(res => res.entities)
            .catch(error => Promise.reject(error));
    }

    getEntity(entityType: string, option?: any): Promise<any> {
        const queryOptions = Object.assign({ from: entityType }, option);
        const query = new EntityQuery(queryOptions);
        return <Promise<any>><any>this.entityManager.executeQuery(query)
            .then(res => res.results)
            .catch(error => Promise.reject(error));
    }

    getTables(options?: any): Promise<any> {
        return this.getEntity('Tables', options);
    }

    getTableByID(id: number): Promise<any> {
        return this.getEntity('Tables', {
            where: {
                ID: id
            },
        }).then(tables => tables[0]);
    }
    getColumnByTableID(id: number): Promise<any>{
        return this.getEntity('Columns', {
            where: {
                TableID: id
            }
        });
    }
    getColumnByString(id: number, str: string){
        return this.getEntity('Columns', {
            where: {
                'TableID': id,
                'Name': { Contains: str}
            }
        })
    }
 }



