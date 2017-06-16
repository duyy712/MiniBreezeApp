export class Table {
    Name: string;
    Columns: Column[];
    Description: string;
    Code: string;
   
}

export class Column {
    TableID: number;
    Name: string;
    Description: string;
}
