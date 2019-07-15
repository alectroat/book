import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'm-e-commerce',
	templateUrl: './e-commerce.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ECommerceComponent implements OnInit {

	leftMenuItems = [
		{ title: 'Description', link: '/ecommerce/products/description' },
		{ title: 'Facts', link: '/ecommerce/products/facts' },
		{ title: 'Price information', link: '/ecommerce/products/price' },
		{ title: 'Contact information', link: '/ecommerce/products/contact'},
		{ title: 'Map & Direction', link: '/ecommerce/products/map' },
		{ title: 'Media', link: '/ecommerce/products/media' },
		{ title: 'Date/Time', link: '/ecommerce/products/datetime' },
		{ title: 'Links', link: '/ecommerce/products/edit', id: 7 },
		{ title: 'Hidden information', link: '/ecommerce/products/edit', id: 8 },
		{ title: 'Category', link: '/ecommerce/products/edit', id: 9 },
		{ title: 'Channel', link: '/ecommerce/products/edit', id: 10 },
		{ title: 'Product settings', link: '/ecommerce/products/edit', id: 11 },
		{ title: 'Geo location', link: '/ecommerce/products/edit', id: 12 },
		{ title: 'Product references', link: '/ecommerce/products/edit', id: 13 },
		{ title: 'Product mapping', link: '/ecommerce/products/edit', id: 14 }
	];

	constructor() {}

	ngOnInit() {}
}
