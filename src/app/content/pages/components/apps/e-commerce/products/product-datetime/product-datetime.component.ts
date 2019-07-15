import { Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Material
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
// RXJS
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { fromEvent, merge } from 'rxjs';
// Services
import { ProductsService } from '../../_core/services/index';
import { LayoutUtilsService, MessageType } from '../../_core/utils/layout-utils.service';
import { SubheaderService } from '../../../../../../../core/services/layout/subheader.service';

import { OverviewListComponent } from '../_subs/overview/overview-list/overview-list.component';

@Component({
	selector: 'm-product-datetime',
	templateUrl: './product-datetime.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductDatetimeComponent implements OnInit {

	constructor(private productsService: ProductsService,
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private subheaderService: SubheaderService,
		private layoutUtilsService: LayoutUtilsService) { }

	/** LOAD DATA */
	ngOnInit() {
		// Set title to page breadCrumbs
		this.subheaderService.setTitle('Product Date/Time');
	}

	getComponentTitle() {
		let result = 'Product Date/Time';
		return result;
	}
}
