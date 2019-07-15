// tslint:disable-next-line:no-shadowed-variable
import { ConfigModel } from '../core/interfaces/config';

// tslint:disable-next-line:no-shadowed-variable
export class MenuConfig implements ConfigModel {
	public config: any = {};

	constructor() {
		this.config = {
			header: {
				self: {},
				items: [
					{
						title: 'Actions',
						root: true,
						icon: 'flaticon-add',
						toggle: 'click',
						translate: 'MENU.ACTIONS',
						submenu: {
							type: 'classic',
							alignment: 'left',
							items: [
								{
									title: 'Create New Post',
									page: '/header/actions',
									icon: 'flaticon-file',
									translate: 'MENU.CREATE_POST',
									aside: {
										self: {
											bullet: 'dot'
										},
										items: [
											{
												section: 'Departments'
											},
											{
												title: 'Resources',
												desc: '',
												icon: 'flaticon-layers',
												bullet: 'dot',
												root: true,
												submenu: [
													{
														title: 'Create New Post',
														page: '/header/actions',
													},
													{
														title: 'Timesheet',
														tooltip: 'Non functional dummy link',
													},
													{
														title: 'Payroll',
														tooltip: 'Non functional dummy link',
													},
													{
														title: 'Contacts',
														tooltip: 'Non functional dummy link',
													}
												]
											}
										]
									}
								},
								{
									title: 'Generate Reports',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-diagram',
									badge: {
										type: 'm-badge--success',
										value: '2'
									},
								},
								{
									title: 'Manage Orders',
									icon: 'flaticon-business',
									submenu: {
										type: 'classic',
										alignment: 'right',
										bullet: 'line',
										items: [
											{
												title: 'Latest Orders',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Pending Orders',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Processed Orders',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Delivery Reports',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Payments',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Customers',
												tooltip: 'Non functional dummy link',
												icon: '',
											}
										]
									}
								},
								{
									title: 'Customer Feedbacks',
									page: '/#',
									icon: 'flaticon-chat-1',
									submenu: {
										type: 'classic',
										alignment: 'right',
										bullet: 'dot',
										items: [
											{
												title: 'Customer Feedbacks',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Supplier Feedbacks',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Reviewed Feedbacks',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Resolved Feedbacks',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Feedback Reports',
												tooltip: 'Non functional dummy link',
												icon: '',
											}
										]
									}
								},
								{
									title: 'Register Member',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-users',
								}
							]
						}
					},
					{
						title: 'Reports',
						root: true,
						icon: 'flaticon-line-graph',
						toggle: 'click',
						translate: 'MENU.REPORTS',
						submenu: {
							type: 'mega',
							width: '1000px',
							alignment: 'left',
							columns: [
								{
									heading: {
										heading: true,
										title: 'Finance Reports',
									},
									items: [
										{
											title: 'Annual Reports',
											tooltip: 'Non functional dummy link',
											icon: 'flaticon-map',
										},
										{
											title: 'HR Reports',
											tooltip: 'Non functional dummy link',
											icon: 'flaticon-user',
										},
										{
											title: 'IPO Reports',
											tooltip: 'Non functional dummy link',
											icon: 'flaticon-clipboard',
										},
										{
											title: 'Finance Margins',
											tooltip: 'Non functional dummy link',
											icon: 'flaticon-graphic-1',
										},
										{
											title: 'Revenue Reports',
											tooltip: 'Non functional dummy link',
											icon: 'flaticon-graphic-2',
										}
									]
								},
								{
									bullet: 'line',
									heading: {
										heading: true,
										title: 'Project Reports',
									},
									items: [
										{
											title: 'Coca Cola CRM',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title:
												'Delta Airlines Booking Site',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Malibu Accounting',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Vineseed Website Rewamp',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Zircon Mobile App',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Mercury CMS',
											tooltip: 'Non functional dummy link',
											icon: '',
										}
									]
								},
								{
									bullet: 'dot',
									heading: {
										heading: true,
										title: 'HR Reports',
									},
									items: [
										{
											title: 'Staff Directory',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Client Directory',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Salary Reports',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Staff Payslips',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Corporate Expenses',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Project Expenses',
											tooltip: 'Non functional dummy link',
											icon: '',
										}
									]
								},
								{
									heading: {
										heading: true,
										title: 'Reporting Apps',
										icon: '',
									},
									items: [
										{
											title: 'Report Adjusments',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Sources & Mediums',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Reporting Settings',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Conversions',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Report Flows',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Audit & Logs',
											tooltip: 'Non functional dummy link',
											icon: '',
										}
									]
								}
							]
						}
					},
					{
						title: 'Apps',
						root: true,
						icon: 'flaticon-paper-plane',
						toggle: 'click',
						translate: 'MENU.APPS',
						badge: {
							type: 'm-badge--brand m-badge--wide',
							value: 'new',
							translate: 'MENU.NEW',
						},
						submenu: {
							type: 'classic',
							alignment: 'left',
							items: [
								{
									title: 'eCommerce',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-business',
									submenu: {
										type: 'classic',
										alignment: 'right',
										items: [
											{
												title: 'Customers',
												page: '/ecommerce/customers',
												icon: 'flaticon-users',
											},
											{
												title: 'Orders',
												page: '/ecommerce/orders',
												icon: 'flaticon-interface-1',
											},
											{
												title: 'Products',
												page: '/ecommerce/products',
												icon: 'flaticon-list-1',
											}
										]
									}
								},
								{
									title: 'Audience',
									page: '/crud/datatable_v1',
									icon: 'flaticon-computer',
									submenu: {
										type: 'classic',
										alignment: 'right',
										items: [
											{
												title: 'Active Users',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-users',
											},
											{
												title: 'User Explorer',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-interface-1',
											},
											{
												title: 'Users Flows',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-lifebuoy',
											},
											{
												title: 'Market Segments',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-graphic-1',
											},
											{
												title: 'User Reports',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-graphic',
											}
										]
									}
								},
								{
									title: 'Marketing',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-map',
								},
								{
									title: 'Campaigns',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-graphic-2',
									badge: {
										type: 'm-badge--success',
										value: '3'
									}
								},
								{
									title: 'Cloud Manager',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-infinity',
									submenu: {
										type: 'classic',
										alignment: 'left',
										items: [
											{
												title: 'File Upload',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-add',
												badge: {
													type: 'm-badge--danger',
													value: '3'
												}
											},
											{
												title: 'File Attributes',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-signs-1',
											},
											{
												title: 'Folders',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-folder',
											},
											{
												title: 'System Settings',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-cogwheel-2',
											}
										]
									}
								}
							]
						}
					}
				]
			},
			aside: {
				self: {},
				items: [
					//{
					//	title: 'Dashboard',
					//	desc: 'Some description goes here',
					//	root: true,
					//	icon: 'flaticon-line-graph',
					//	page: '/',
					//	badge: {type: 'm-badge--danger', value: '2'},
					//	translate: 'MENU.DASHBOARD'
					//},
					{section: 'Admin'},
					{
						title: 'Dashboard',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-chat-1',
						page: '/material/form-controls/autocomplete'
					},
					{
						title: 'Supplier Dashboard',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-chat-2',
						page: '/material/form-controls/autocomplete'
					},
					{
						title: 'User Management',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-interface-2',
						submenu: [
							{
								title: 'User Type',
								page: '/material/navigation/menu'
							},
							{
								title: 'User Role',
								page: '/material/navigation/menu'
							},
							{
								title: 'Users',
								page: '/material/navigation/menu'
							}
						]
					},
					{
						title: 'Booking Systems',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-interface-3',
						submenu: [
							{
								title: 'Booking Systems',
								page: '/material/navigation/menu'
							},
							{
								title: 'Financial Setup',
								page: '/material/navigation/menu'
							}
						]
					},
					{
						title: 'Supplier Management',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-interface-4',
						submenu: [
							{
								title: 'Supplier Types',
								page: '/material/navigation/menu'
							},
							{
								title: 'Suppliers',
								page: '/material/navigation/menu'
							}
						]
					},
					{
						title: 'Product Management',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-interface-4',
						submenu: [
							{
								title: 'Product Type',
								page: '/material/navigation/menu'
							},
							{
								title: 'Product Category',
								page: '/material/navigation/menu'
							},
							{
								title: 'Product Sub-Category',
								page: '/material/navigation/menu'
							},
							{
								title: 'Attributes',
								bullet: 'dot',
								submenu: [
									{
										title: 'Attribute Groups',
										page: '/material/form-controls/autocomplete'
									},
									{
										title: 'Attributes',
										page: '/material/form-controls/checkbox'
									},
									{
										title: 'Attribute Mapping',
										page: '/material/form-controls/radiobutton'
									}
								]
							},
							{
								title: 'Products',
								bullet: 'dot',
								submenu: [
									{
										title: 'Go',
										page: '/ecommerce/products'
									},
									{
										title: 'Stay',
										page: '/ecommerce/products'
									},
									{
										title: 'Do',
										page: '/ecommerce/customers'
									}
								]
							}
						]
					},
					{
						title: 'Order Management',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-interface-3',
						submenu: [
							{
								title: 'Order Details',
								page: '/material/navigation/menu'
							}
						]
					},
					{
						title: 'Accounts',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-interface-3',
						submenu: [
							{
								title: 'Billing',
								page: '/material/form-controls/autocomplete'
							},
							{
								title: 'Payment',
								page: '/material/form-controls/checkbox'
							}
						]
					},
					{
						title: 'CRM',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-interface-3',
						submenu: [
							{
								title: 'Customers',
								page: '/material/form-controls/autocomplete'
							},
							{
								title: 'Booking/Sales History',
								page: '/material/form-controls/checkbox'
							}
						]
					},
					{
						title: 'Common Setup',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-interface-3',
						submenu: [
							{
								title: 'Language',
								page: '/material/form-controls/autocomplete'
							},
							{
								title: 'Currency',
								page: '/material/form-controls/checkbox'
							},
							{
								title: 'Country',
								page: '/material/form-controls/checkbox'
							},
							{
								title: 'Main City',
								page: '/material/form-controls/checkbox'
							},
							{
								title: 'Airport',
								page: '/material/form-controls/checkbox'
							}
						]
					}
					//{
					//	title: 'Ng-Bootstrap',
					//	root: true,
					//	bullet: 'dot',
					//	icon: 'flaticon-web',
					//	submenu: [
					//		{
					//			title: 'Accordion',
					//			page: '/ngbootstrap/accordion'
					//		},
					//		{
					//			title: 'Alert',
					//			page: '/ngbootstrap/alert'
					//		},
					//		{
					//			title: 'Buttons',
					//			page: '/ngbootstrap/buttons'
					//		},
					//		{
					//			title: 'Carousel',
					//			page: '/ngbootstrap/carousel'
					//		},
					//		{
					//			title: 'Collapse',
					//			page: '/ngbootstrap/collapse'
					//		},
					//		{
					//			title: 'Datepicker',
					//			page: '/ngbootstrap/datepicker'
					//		},
					//		{
					//			title: 'Dropdown',
					//			page: '/ngbootstrap/dropdown'
					//		},
					//		{
					//			title: 'Modal',
					//			page: '/ngbootstrap/modal'
					//		},
					//		{
					//			title: 'Pagination',
					//			page: '/ngbootstrap/pagination'
					//		},
					//		{
					//			title: 'Popover',
					//			page: '/ngbootstrap/popover'
					//		},
					//		{
					//			title: 'Progressbar',
					//			page: '/ngbootstrap/progressbar'
					//		},
					//		{
					//			title: 'Rating',
					//			page: '/ngbootstrap/rating'
					//		},
					//		{
					//			title: 'Tabs',
					//			page: '/ngbootstrap/tabs'
					//		},
					//		{
					//			title: 'Timepicker',
					//			page: '/ngbootstrap/timepicker'
					//		},
					//		{
					//			title: 'Tooltips',
					//			page: '/ngbootstrap/tooltip'
					//		},
					//		{
					//			title: 'Typehead',
					//			page: '/ngbootstrap/typehead'
					//		}
					//	]
					//},
					//{
					//	title: 'Metronic',
					//	root: true,
					//	bullet: 'dot',
					//	icon: 'flaticon-interface-8',
					//	submenu: [
					//		{
					//			title: 'Accordion',
					//			page: '/metronic/accordion'
					//		},
					//		{
					//			title: 'Sticky Form Actions',
					//			page: '/metronic/sticky-form-actions'
					//		},
					//		{
					//			title: 'Forms',
					//			page: '/metronic/forms'
					//		}
					//	]
					//},
					//{section: 'Applications'},
					//{
					//	title: 'eCommerce',
					//	bullet: 'dot',
					//	icon: 'flaticon-business',
					//	root: true,
					//	submenu: [
					//		{
					//			title: 'Customers',
					//			page: '/ecommerce/customers'
					//		},
					//		{
					//			title: 'Orders',
					//			page: '/ecommerce/orders'
					//		},
					//		{
					//			title: 'Products',
					//			page: '/ecommerce/products'
					//		},
					//	]
					//},
					// {
					// 	title: 'User Management',
					// 	root: true,
					// 	bullet: 'dot',
					// 	icon: 'flaticon-user',
					// 	page: '/user-management'
					// },
					// {
					// 	title: 'Audit Log',
					// 	root: true,
					// 	bullet: 'dot',
					// 	icon: 'flaticon-interface-5',
					// 	page: '/audit-log'
					// },
					//{section: 'Pages'},
					//{
					//	title: 'User',
					//	root: true,
					//	bullet: 'dot',
					//	icon: 'flaticon-interface-1',
					//	submenu: [
					//		{
					//			title: 'Profile',
					//			page: '/profile'
					//		},
					//	]
					//},
					//{
					//	title: 'Error',
					//	root: true,
					//	bullet: 'dot',
					//	icon: 'flaticon-interface-2',
					//	submenu: [
					//		{
					//			title: 'Error-1',
					//			page: '/error/1'
					//		},
					//		{
					//			title: 'Error-2',
					//			page: '/error/2'
					//		},
					//		{
					//			title: 'Error-3',
					//			page: '/error/3'
					//		},
					//		{
					//			title: 'Error-4',
					//			page: '/error/4'
					//		},
					//		{
					//			title: 'Error-5',
					//			page: '/error/5'
					//		},
					//		{
					//			title: 'Error-6',
					//			page: '/error/6'
					//		},
					//	]
					//},
					//{section: 'Tools'},
					//{
					//	title: 'Layout Builder',
					//	root: true,
					//	icon: 'flaticon-settings',
					//	page: '/builder'
					//}
				]
			}
		};
	}
}
