import { BaseModel } from './_base.model';
import { ProductSpecificationModel } from './product-specification.model';
import { ProductRemarkModel } from './product-remark.model';
import { Identifiers } from '@angular/compiler';

export class ProductModel extends BaseModel {

	id: number;
	name: string;
	relationship: string;
	supplier: string;
	template: string;
	status: any;
	lastUpdated: string;
	updatedBy: string;
	actions: string;

	clear() {
		this.name = '';
		this.relationship = '';
		this.supplier = '';
		this.template = '';
		this.status = '';
		this.lastUpdated = '';
		this.updatedBy = '';
		this.actions = '';
	}
}
