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
	selector: 'm-product-facts',
	templateUrl: './product-facts.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductFactsComponent implements OnInit {	

	pageControlLists: any = {
		effortLevel: {
			title: 'Effort level:',
			items: [
				{ itemName: 'Intense', isChecked: true },
				{ itemName: 'None', isChecked: true },
				{ itemName: 'Low', isChecked: true },
				{ itemName: 'Medium', isChecked: true },
				{ itemName: 'High', isChecked: true }]
		},
		guidedIn: {
			title: 'Guided in:',
			items: [
				{ itemName: 'Swedish', isChecked: true },
				{ itemName: 'German', isChecked: true },
				{ itemName: 'Spanish', isChecked: true },
				{ itemName: 'Finnish', isChecked: true },
				{ itemName: 'Russian', isChecked: true },
				{ itemName: 'English', isChecked: true },
				{ itemName: 'French', isChecked: true },
				{ itemName: 'Norwegian', isChecked: true },
				{ itemName: 'Chinese', isChecked: true },
				{ itemName: 'Danish', isChecked: true }]
		},
		mealsIncluded: {
			title: 'Meals included:',
			items: [
				{ itemName: 'Yes with surcharge', isChecked: true },
				{ itemName: 'No', isChecked: true },
				{ itemName: 'Yes', isChecked: true }]
		},
		clothingGearIncluded: {
			title: 'Clothing and gear included:',
			items: [
				{ itemName: 'No', isChecked: true },
				{ itemName: 'Yes', isChecked: true },
				{ itemName: 'Yes with surcharge', isChecked: true }]
		},
		suitableForKids: {
			title: 'Suitable for kids:',
			items: [
				{ itemName: 'Yes 12+', isChecked: true },
				{ itemName: 'Yes 8+', isChecked: true },
				{ itemName: 'Yes', isChecked: true }]
		},
		canceledInBadWeather: {
			title: 'Canceled in bad weather:',
			items: [
				{ itemName: 'Yes', isChecked: true },
				{ itemName: 'Sometimes', isChecked: true },
				{ itemName: 'No', isChecked: true }]
		},
		AgeLimit: {
			title: 'Age limit',
			items: [
				{ age: 'Undefined', isChecked: false },
				{ age: 'Ingen', isChecked: true },
				{ age: '1', isChecked: false },
				{ age: '2', isChecked: false },
				{ age: '3', isChecked: false },
				{ age: '4', isChecked: false },
				{ age: '5', isChecked: false },
				{ age: '6', isChecked: false },
				{ age: '7', isChecked: false },
				{ age: '8', isChecked: false },
				{ age: '9', isChecked: false },
				{ age: '10', isChecked: false },
				{ age: '11', isChecked: false },
				{ age: '12', isChecked: false },
				{ age: '13', isChecked: false },
				{ age: '14', isChecked: false },
				{ age: '15', isChecked: false },
				{ age: '16', isChecked: false },
				{ age: '17', isChecked: false },
				{ age: '18', isChecked: false },
				{ age: '19', isChecked: false },
				{ age: '20', isChecked: false },
				{ age: '21', isChecked: false },
				{ age: '22', isChecked: false },
				{ age: '23', isChecked: false },
				{ age: '24', isChecked: false },
				{ age: '25', isChecked: false },
				{ age: '26', isChecked: false },
				{ age: '27', isChecked: false },
				{ age: '28', isChecked: false },
				{ age: '29', isChecked: false },
				{ age: '30', isChecked: false }]
		},
		ThemesBokun: {
			title: 'Themes Bokun:',
			items: [
				{ itemName: 'Beach', isChecked: true },
				{ itemName: 'Family friendly', isChecked: true },
				{ itemName: 'Outdoors', isChecked: true },
				{ itemName: 'Indoor', isChecked: true },
				{ itemName: 'Group friendly', isChecked: true },
				{ itemName: 'Rainy day', isChecked: true },
				{ itemName: 'Skip the line', isChecked: true },
				{ itemName: 'Eco friendly', isChecked: true },
				{ itemName: 'Romantic', isChecked: true },
				{ itemName: 'Tailor made', isChecked: true },
				{ itemName: 'Luxury', isChecked: true },
				{ itemName: 'Private activity', isChecked: true }]
		},
		Inclusions: {
			title: 'Inclusions:',
			items: [
				{ itemName: 'Entry or admission fee', isChecked: true },
				{ itemName: 'Goods and services tax', isChecked: true },
				{ itemName: 'Fuel Surcharge', isChecked: true },
				{ itemName: 'Parking fee', isChecked: true },
				{ itemName: 'Bus Fare', isChecked: true },
				{ itemName: 'Departure Tax', isChecked: true },
				{ itemName: 'Tip or Gratuity', isChecked: true },
				{ itemName: 'Landing and facility Fees', isChecked: true },
				{ itemName: 'Entry tax', isChecked: true },
				{ itemName: 'National Park fee', isChecked: true },
				{ itemName: 'Food & Drink', isChecked: true },
				{ itemName: 'WiFi', isChecked: true }]
		},
	};

	//effortLevel = [
	//	{ itemName: 'Description', isChecked: true },
	//	{ itemName: 'Description', isChecked: true },
	//	{ itemName: 'Description', isChecked: true }];

	////duration = [];
	//guidedIn = [];
	//mealsIncluded = [];
	//clothingGearIncluded = [];
	//suitableForKids = [];
	//canceledInBadWeather = [];
	//AgeLimit = [];
	////WhatIncluded = [];
	////WhatNotIncluded = [];
	////WhatBring = [];
	////requirements = [];
	//peningHours = [];
	////Attention = [];
	//ThemesBokun = [];
	//Inclusions = [];

	//leftMenuItems = [
	//	{ title: 'Description', link: '/ecommerce/products/description' },
	//	{ title: 'Facts', link: '/ecommerce/products/edit', id: 1 },
	//	{ title: 'Price information', link: '/ecommerce/products/edit', id: 2 },
	//	{ title: 'Contact information', link: '/ecommerce/products/edit', id: 3 },
	//	{ title: 'Map & Direction', link: '/ecommerce/products/edit', id: 4 },
	//	{ title: 'Media', link: '/ecommerce/products/edit', id: 5 },
	//	{ title: 'Date/Time', link: '/ecommerce/products/edit', id: 6 },
	//	{ title: 'Links', link: '/ecommerce/products/edit', id: 7 },
	//	{ title: 'Hidden information', link: '/ecommerce/products/edit', id: 8 },
	//	{ title: 'Category', link: '/ecommerce/products/edit', id: 9 },
	//	{ title: 'Channel', link: '/ecommerce/products/edit', id: 10 },
	//	{ title: 'Product settings', link: '/ecommerce/products/edit', id: 11 },
	//	{ title: 'Geo location', link: '/ecommerce/products/edit', id: 12 },
	//	{ title: 'Product references', link: '/ecommerce/products/edit', id: 13 },
	//	{ title: 'Product mapping', link: '/ecommerce/products/edit', id: 14 }
	//];

	constructor(private productsService: ProductsService,
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private subheaderService: SubheaderService,
		private layoutUtilsService: LayoutUtilsService) { }

	/** LOAD DATA */
	ngOnInit() {
		// Set title to page breadCrumbs
		this.subheaderService.setTitle('Product Description');
	}

	getComponentTitle() {
		let result = 'Product Facts';
		return result;
	}
}
