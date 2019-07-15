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

@Component({
	selector: 'm-product-map',
	templateUrl: './product-map.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductMapComponent implements OnInit {

	lat: number = 51.678418;
	lng: number = 7.809007;

	constructor(private productsService: ProductsService,
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private subheaderService: SubheaderService,
		private layoutUtilsService: LayoutUtilsService) { }

	/** LOAD DATA */
	ngOnInit() {
		// Set title to page breadCrumbs
		this.subheaderService.setTitle('Product Map & Direction');
	}

	getComponentTitle() {
		let result = 'Product Map & Direction';
		return result;
	}
}
