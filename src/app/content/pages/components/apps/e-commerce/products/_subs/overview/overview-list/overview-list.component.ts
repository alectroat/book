import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
	selector: 'overview-table',
	styleUrls: ['overview-list.component.css'],
	templateUrl: 'overview-list.component.html',
})
export class OverviewListComponent implements OnInit {
	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'recurrence', 'arena', 'edit', 'delete'];
	dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

	//@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}
}

export interface PeriodicElement {
	name: string;
	position: string;
	weight: string;
	symbol: string;
	recurrence: string;
	arena: string;
	edit: string;
	delete: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete:'' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' },
	{ position: '2019-07-12', name: '21:30', weight: '00:30', symbol: '3 Hours', recurrence: 'None', arena: '', edit: '', delete: '' }
];
